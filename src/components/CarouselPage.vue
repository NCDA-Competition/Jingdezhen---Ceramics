<template>
 <el-carousel :interval="4000" indicator-position="outside" style="width: 100%;height: 350px;">
  <el-carousel-item v-for="(item, index) in carouselItems" :key="index"
   :class="`carousel-item-${index % 2 === 0 ? 'even' : 'odd'}`">
   <img :src="item.image" class="carousel-image" alt="carousel image" />
   <h3 class="carousel-title">{{ item.title }}</h3>
  </el-carousel-item>
 </el-carousel>
</template>

<script>
export default {
 name: "CarouselPage",
 data() {
  return {
   carouselItems: [ 
        { image: require('../assets/lunboot/lb2.webp') },  
        { image: require('../assets/lunboot/lb3.webp')},  
        { image: require('../assets/lunboot/lb4.webp') },
        { image: require('../assets/lunboot/lb4.webp') },
   ],
  };
 },
};  
</script>

<style scoped>
.carousel-image {
 width: 100%;
 height: auto;
 object-fit: cover;
}

.carousel-title {
 position: absolute;
 bottom: 10px;
 left: 0;
 right: 0;
 text-align: center;
 margin: 0;
 padding: 0 10px;
 background-color: rgba(0, 0, 0, 0.5);
 color: #fff;
}
.el-carousel__item{
 height: 350px;
}
</style>