<template>
                 <section v-if="getStatus =='done'">
                      <article v-for="product in getProduct.data['hydra:member']"  :key="product.id">
            <h1>{{product.name}}</h1>
            <h1>{{product.description}}</h1>
            <h1>{{product.price + "€"}}</h1>
          </article></section>
                    <section v-else>...Loading</section>
                    <section v-if="getStatus =='done'">
                      <article v-for="user in getUser.data['hydra:member']"  :key="user.username">
            <h1>{{user.username}}</h1>
            <h1>{{user.password}}</h1>
          </article></section>
                    <section v-else>...Loading</section>   
</template>
<script>
import { mapActions, mapState} from 'pinia'
import {useShopdatabase} from "../stores/counter.js"
export default{
  data() {
    return{
      productList:[]
    };
  },
  mounted(){
    this.fetchProducts;
  },
  computed:{
    ...mapActions(useShopdatabase, ["fetchProducts"]),
    ...mapState(useShopdatabase, ["getProduct","getStatus"]),
    ...mapActions(useShopdatabase, ["Authfunction"]),
    ...mapState(useShopdatabase, ["getUser","getStatusA"])

  },
}
</script>

