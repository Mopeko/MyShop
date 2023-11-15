import { ref, computed } from 'vue'
import { defineStore, mapActions } from 'pinia'
import axios from 'axios'
export const useShopdatabase = defineStore('Shop',{
  state: () =>{
    return{
      productList:[],
      status : "done"
    };
  },
  getters:{
    getProduct: state => state.productList,
    getStatus: state => state.status
  },
  actions: {
     async fetchProducts(){
      this.status = "fetching"
      this.productList = await axios({url:"http://localhost:80/api/products", method: "get" })
      this.status = "done"
     }
  }
})
