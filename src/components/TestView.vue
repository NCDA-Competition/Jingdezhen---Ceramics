<template>    
  <div>    
    <div    
      class="ceramic-item"    
      :class="{ 'active': currentIndex === index }"    
      v-for="(ceramic, index) in ceramics"    
      :key="index"    
      @click="goToDetail(ceramic.route)"    
    >    
      {{ ceramic.name }}    
      <!-- <div class="indicator" v-show="currentIndex === index"></div>     -->
    </div>    
  </div>    
</template>    
    
<script>    
export default {    
  data() {    
    return {    
      ceramics: [    
        { name: '汝窑' },    
        { name: '官窑' },    
        { name: '哥窑' },    
        // ... 其他窑    
      ],    
      // currentIndex: null, // 用于追踪当前点击的索引    
    };    
  },    
  methods: {    
    goToDetail(route) {    
      this.$router.push({ name: 'ceramicDetail', params: { route } });  
    }     
    },      
};    

</script>    
    
<style scoped>    
.ceramic-item {    
  position: relative;    
  display: inline-block;    
  margin-right: 20px; /* 根据需要调整 */    
  cursor: pointer;    
  transition: background-color 0.3s ease; /* 添加背景色过渡效果 */  
  margin-top: 100px;
}  
  
.ceramic-item.active {  
color: blue; /* 当为活跃状态时显示蓝色背景 */  
}  
  
.indicator {    
  position: absolute;    
  top: -30px; /* 初始位置在上方，根据需要调整 */    
  left: 50%; /* 水平居中，假设图片不大，可以完整显示 */    
  transform: translateX(-50%); /* 水平居中偏移 */    
  width: 50px; /* 图片宽度，根据需要调整 */    
  height: 69px; /* 图片高度，根据需要调整 */    
  background-image: url('../assets/FirstLevel/FamousCeramic/pointer.png'); /* 指示器图片 */    
  background-size: cover; /* 图片覆盖整个div */    
  background-repeat: no-repeat; /* 不重复图片 */    
  transition: top 0.3s ease, opacity 0.3s ease; /* 添加透明度和top的过渡效果 */    
  opacity: 0; /* 初始状态为透明 */    
}    
    
.ceramic-item:hover .indicator {    
  /* hover效果，可选 */    
  opacity: 0.5;    
}    
    
.ceramic-item.active .indicator {    
  /* 点击后显示指示器 */    
  opacity: 1;    
  top: -76px; /* 显示时稍微上移，根据需要调整 */    
}    
</style>