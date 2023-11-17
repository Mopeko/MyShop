<template>
  <div>
    <section v-if="getStatus === 'done'">
      <article class="prod" v-for="product in getProduct.data['hydra:member']" :key="product.id">
        <h1>{{ product.name }}</h1>
        <h1>{{ product.description }}</h1>
        <h1>{{ product.price + "€" }}</h1>
        <button @click="deleteProduct(product.id)">DELETE</button>
      </article>
    </section>
    <section v-else>...Loading</section>
  </div>
  <div>
    <label>Name</label>
    <input type="text" id="name" name="name" />
    <label>Description</label>
    <input type="text" id="description" name="description" />
    <label>Price</label>
    <input type="text" id="price" name="price" />
    <label>Categories</label>
    <input type="text" id="categories" name="categories" />
    <button @click="Postproduct">POST</button>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useProductsStore } from "../stores/counter.js"
import axios from 'axios'
export default {
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.fetchProducts;
  },
  computed: {
    ...mapActions(useProductsStore, ["fetchProducts"]),
    ...mapState(useProductsStore, ["getProduct", "getStatus"]),
  },
  methods: {
    deleteProduct(id) {
      axios.delete(`http://localhost:80/api/products/${id}`)
        .then(response => {
          console.log(response);
        })
        .catch(error=>{
          console.log("Error for deleting",error)
        })
    },
  Postproduct() {
      const Name = document.getElementById("name").value;
      const Description = document.getElementById("description").value;
      const Price = parseFloat(document.getElementById("price").value);
      const Categories = document.getElementById("categories").value.split(',').map(categories => categories.trim());
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyMjc3ODEsImV4cCI6MTcwMDIzMTM4MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1heGltZS5icmF1bHRAZXBpdGVjaC5kaWdpdGFsIn0.a5VuD1HPHDne3n5lOVYRsreyEcLrhEjAXZEQreass1VKo0neu567n7Z2waL5nV2tpMx-dwJHnS7M1cEoHpOyIWscxnsqzI_BQq2xztrYOYVz3UkTSIRgiMQCNekQC438hNsqE7-ck1FIM1Ha1COxTMaNgKQzA248285KxBtgDiX1zeqICE8F1P6MhGoH1kKLJUt0gfUjm3J5L0pNaXv57WMvJIyqCmoxJ7SN83PN1YH7wwHJZrJboa8nT8hc0Kud4ycHTz2YUpjllSdoPh8dzCZOztLtaTA6-S5E8tCP_uSRCriPV3eZL1Ox0_1Atoug3agH3Bjc9nSJSA23BXA0Lw'
      
      axios.post('http://localhost/api/products', {
        name: Name,
        description: Description,
        price: Price,
        categories: Categories
      },
      {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      )
      .then(response =>{
        console.log("Product add!",response.data)
      })
      .catch(error=>{
        console.log("Error during posting", error.message)
      })
    }

  }
}
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 200px;
}

.prod {
  display: flex;
  flex-direction: row;
}
</style>