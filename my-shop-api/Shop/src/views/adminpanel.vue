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
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyMzU0MTAsImV4cCI6MTcwMDIzOTAxMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1heGltZS5icmF1bHRAZXBpdGVjaC5kaWdpdGFsIn0.OqUjzBS5dZx6rcK8LQiNfPzLrG1n3C0unLXtsP-ZWYAZO8wUg5kqvTEmjkp7gPMAnC5bEGcJcozZ-Bg6bQyMEo439qvvlxE3CUwVs8Q0tWqiu87mrh9p_udmfY9vNuwxCp_xWpBA2AiqxDIef5ebNx4hQ1Dn4CoKmY7BvXEBEEnmvcUAK7Q78rZYD0uhrLDhZJnNJee-0oToW9eMJKD1uYtFqc3wdtt6R_GpYQgGzZgAx0k0w6pu5PAIB8ZwZfPFaf9o2oOMgwi-AZChlcKUu8We7dd9v2qp3Fb07W7DIuML4x1O__brx9NWQxC7JkPPXhLs3CZpX8gN6fHlVuXpAA'
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
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyMzU0MTAsImV4cCI6MTcwMDIzOTAxMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1heGltZS5icmF1bHRAZXBpdGVjaC5kaWdpdGFsIn0.OqUjzBS5dZx6rcK8LQiNfPzLrG1n3C0unLXtsP-ZWYAZO8wUg5kqvTEmjkp7gPMAnC5bEGcJcozZ-Bg6bQyMEo439qvvlxE3CUwVs8Q0tWqiu87mrh9p_udmfY9vNuwxCp_xWpBA2AiqxDIef5ebNx4hQ1Dn4CoKmY7BvXEBEEnmvcUAK7Q78rZYD0uhrLDhZJnNJee-0oToW9eMJKD1uYtFqc3wdtt6R_GpYQgGzZgAx0k0w6pu5PAIB8ZwZfPFaf9o2oOMgwi-AZChlcKUu8We7dd9v2qp3Fb07W7DIuML4x1O__brx9NWQxC7JkPPXhLs3CZpX8gN6fHlVuXpAA'
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