<template>
   <div>
    <section v-if="getStatus =='done'">
         <article class = "prod" v-for="product in getProduct.data['hydra:member']"  :key="product.id">
<h1>{{product.name}}</h1>
<h1>{{product.description}}</h1>
<h1>{{product.price + "€"}}</h1>
<h1></h1>
</article></section>
       <section v-else>...Loading</section>
    </div> 
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
</script>
<style scoped>
h1 {
display: flex;
justify-content: center;
border: 1px solid black;
width: 200px;
}
.prod{
    display: flex;
    flex-direction: row;
}
</style>