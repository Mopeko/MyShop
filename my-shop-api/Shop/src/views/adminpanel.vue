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
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NDQsImV4cCI6MTcwMDI1NjI0NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1heGltZS5icmF1bHRAZXBpdGVjaC5kaWdpdGFsIn0.NyTrlpzmDPPJSDZ_HPdq_oRbK3e9txXKJRa_2DRMzQd2UMZ5DJNFMpbUOUyIfPAHNqOZouIu2VsdLu-o_FGbWTrL6uqg7DtXDylPx6tM8oU8G5UUZLJeCxGrPf5-ZcypiD2QcJtgdAT_UUycEe5Lkpnb0igUM3XWcXvYMgT77hdz8a_t_NRVb1YYJnzWXH7svNccmuz_9svkSWXkR1c_aEiT08i0z7NF89L4oGPV3-O0eVotMrCyISaeYHOU9hG4sCsy3cprkQ3a9ZjPyqK1BzFvRhlje32r-qp_elNGvhqMt0zZyQeSkebjfl5bg32hbZ189IiFihlU3NJuqF7RXQ'
      const requestOptions = {
    method: 'DELETE',
    headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
      }
      fetch(`http://localhost/api/products/${id}`, requestOptions )
    },
  Postproduct() {
      const Name = document.getElementById("name").value;
      const Description = document.getElementById("description").value;
      const Price = parseFloat(document.getElementById("price").value);
      const Categories = document.getElementById("categories").value.split(',').map(categories => categories.trim());
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NDQsImV4cCI6MTcwMDI1NjI0NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1heGltZS5icmF1bHRAZXBpdGVjaC5kaWdpdGFsIn0.NyTrlpzmDPPJSDZ_HPdq_oRbK3e9txXKJRa_2DRMzQd2UMZ5DJNFMpbUOUyIfPAHNqOZouIu2VsdLu-o_FGbWTrL6uqg7DtXDylPx6tM8oU8G5UUZLJeCxGrPf5-ZcypiD2QcJtgdAT_UUycEe5Lkpnb0igUM3XWcXvYMgT77hdz8a_t_NRVb1YYJnzWXH7svNccmuz_9svkSWXkR1c_aEiT08i0z7NF89L4oGPV3-O0eVotMrCyISaeYHOU9hG4sCsy3cprkQ3a9ZjPyqK1BzFvRhlje32r-qp_elNGvhqMt0zZyQeSkebjfl5bg32hbZ189IiFihlU3NJuqF7RXQ'
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