import { ref, computed } from 'vue'
import { defineStore, mapActions } from 'pinia'
import axios from 'axios'
export const useShopdatabase = defineStore('Shop', {
  state: () => {
    return {
      productList: [],
      userList: [],
      status: "done",
      statusA: "done"
    };
  },
  getters: {
    getProduct: state => state.productList,
    getUser: state => state.userList,
    getStatus: state => state.status,
    getStatusA: state => state.statusA
  },
  actions: {
    async fetchProducts() {
      this.status = "fetching"
      this.productList = await axios({ url: "http://localhost:80/api/products", method: "get" })
      this.status = "done"
    },
    async Authfunction() {
      this.statusA = "Searching for correspondance"
      this.productList = await axios({ url: "http://localhost:80/api/users", method: "get" })
      this.statusA = "done"
    },
  }
})
