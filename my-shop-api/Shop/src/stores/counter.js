import { ref, computed } from 'vue'
import { defineStore, mapActions } from 'pinia'

export const useShopdatabase = defineStore('Shop',{
  state: () =>{
    return{
      productList:[]
    }
  },
  getters:{
    getProduct: state => state.productList
  },
  actions: {

  }
})
