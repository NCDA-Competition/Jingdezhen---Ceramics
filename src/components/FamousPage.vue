<template>
 <div class="tabBar">
   <ul class="appBar-content">
     <li  class="sty" @click="toRuView(0)">
      汝窑
      <!-- <router-link class="sty" to="/RuView">汝窑</router-link> -->
    </li>
     <li>
       <router-link class="sty" to="/GuanView">官窑</router-link>
     </li>
     <li>
       <router-link class="sty" to="/GeView">哥窑</router-link>
     </li>
     <li>
       <router-link class="sty" to="/CizhouView">磁州窑</router-link>
     </li>
     <li>
       <router-link class="sty" to="/JianView">建窑</router-link>
     </li>
     <li>
       <router-link class="sty" to="/DingView">定窑</router-link>
     </li>
     <li>
       <router-link class="sty" to="/JingView">景德镇窑</router-link>
     </li>
     <li>
       <router-link class="sty" to="/JunView">均窑</router-link>
     </li>
   </ul>

 </div>

</template>

<script>

export default {
 data() {
   return {

   }
 },
 methods:{
  toRuView(i){
    // this.$router.push({path:'/FamousCeramic/RuView'},()=>{},()=>{})
    // console.log(this.$route);
    // 把i传递给组件
    console.log(i);
  }
 },
 mounted(){
  this.$router.push({path:'/FamousCeramic/RuView'},()=>{},()=>{})
 }
}
</script>
<style  scoped>
.tabBar {
 width: 100%;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 height: 60px;
 background: #D1D1D1;
}

.appBar-pic {
 width: 5%;
 height: 37px;
 display: flex;
 align-items: center;
}

.appBar-pic img {
 width: 30px;
}

.appBar-content {
 width: 100%;
 height: 37px;
 list-style: none;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
}

.sty {
 display: flex;
 align-items: center;
 color: #FFFFFF;
}

a {
 text-decoration: none;
 color: #000000;
}

.router-link-active {
 text-decoration: none;
}
</style>