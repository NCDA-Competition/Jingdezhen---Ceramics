<template>
  <div class="appBar">
    <ul class="appBar-content">
      <li class="appBar-pic">
        <img src="../assets/logo.png" alt="">
      </li>
      <li>
        <router-link class="sty" to="/">首页</router-link>
      </li>
      <li>
        <router-link class="sty" to="/DevelopmentHistory">历史发展</router-link>
      </li>
      <li>
        <router-link class="sty" to="/FamousCeramic">陶瓷名窑</router-link>
      </li>
      <li>
        <router-link class="sty" to="/CeramicTechnology">陶瓷工艺</router-link>
      </li>
      <li>
        <router-link class="sty" to="/CeramicsExhibition">陶瓷展览</router-link>
      </li>
    </ul>

  </div>

</template>

<script>

export default {
  data() {
    return {

    }
  }
}


</script>


<style scoped>
.appBar {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  justify-content: space-evenly;
  align-items: center;
  height: 60px;

  /* background: #F8FEFE; */
  background: #536153;
  /* border: 1px solid #FFFFFF; */
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
  /* color: #000000; */


}
</style>