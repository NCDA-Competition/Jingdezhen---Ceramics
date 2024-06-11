<template>  
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      images: [  
        require('../assets/technology/lb01.jpg'), // 替换为你的图片路径  
        require('../assets/technology/lb01.jpg'),  
        require('../assets/technology/lb01.jpg'),  
        require('../assets/technology/lb01.jpg'),  
      ],  
      currentIndex: 0,  
    };  
  },  
  methods: {  
    nextSlide() {  
      this.currentIndex = (this.currentIndex + 1) % this.images.length;  
    },  
    prevSlide() {  
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;  
    },  
  },  
};  
</script>  
  
<style scoped>  
.el-carousel__item  {
    
  }


  .el-carousel__item:nth-child(2n) {
     /* background-color: #99a9bf; */
     background-image: url("../assets/technology/lb01.jpg");
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>