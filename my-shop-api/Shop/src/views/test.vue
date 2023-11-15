<template>
                 <section v-if="getStatus =='done'">
                      <article v-for="product in getProduct.data['hydra:member']"  :key="product.id">
            <h1>{{product.name}}</h1>
            <h1>{{product.description}}</h1>
            <h1>{{product.price + "€"}}</h1>
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
  },
}
//created() {
  //const article = { title: "Vue POST Request Example" };
  //const headers = { 
   // "Authorization": "Bearer my-token",
   // "My-Custom-Header": "foobar"
  //};
  //axios.post("https://reqres.in/api/articles", article, { headers })
   // .then(response => this.articleId = response.data.id);
//}
</script>

