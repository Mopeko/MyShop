import { ref, computed } from 'vue'
import { defineStore, mapActions } from 'pinia'
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
      this.productList = await axios({url:"http://localhost:80/api/products/1", method: "get" })
      this.status = "done"
     }
  }
})
