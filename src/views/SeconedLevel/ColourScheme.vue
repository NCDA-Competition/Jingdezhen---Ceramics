<template>
 <div class="app">

    <!-- 显示导航栏和轮播图组件 -->
    <AppBar></AppBar>
    <CarouselPage></CarouselPage>
    
  <el-row>
   <el-col :span="3">
    <div class="grid-content bg-purple"></div>
   </el-col>
   <el-col :span="18">
    <div class="grid-content bg-purple page-flex">
     <!-- 中间内容:页面中所有东西写在这里 -->
     <div class="page-box">

      <div class="main-container">
       <!-- 页面内容 -->

       <div class="colour" @click="goToColourThird">
        <div class="colour-left">
         <div class="colour-left-one">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-01.png" alt="">
         </div>
         <div class="colour-left-two">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-02.png" alt="">
         </div>
         <div class="colour-left-three">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-03.png" alt="">
         </div>
         <div class="colour-left-four">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-04.png" alt="">
         </div>
        </div>
        <div class="colour-right">
         <div class="colour-right-one">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-05.png" alt="">
         </div>
         <div class="colour-right-two">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-06.png" alt="">
         </div>
         <div class="colour-right-three">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-07.png" alt="">
         </div>
         <div class="colour-right-four">
          <img src="../../assets/SeconedLevel/ColourScheme/colour-08.png" alt="">
         </div>
        </div>
       </div>

       

       <!--  -->
      </div>
      <!-- 内容结束盒子 -->
     </div> 
    </div>
   </el-col>
   <el-col :span="3">
    <div class="grid-content bg-purple"></div>
   </el-col>
  </el-row>
 </div>
</template>

<script>
// 引入导航栏
import AppBar from '@/components/AppBar'
export default {
 components: {
  AppBar // 确保在 components 中注册了 AppBar  
 },
 methods:{
  goToColourThird(){
   this.$router.push('/ColourThird')
  }
 }
}


</script>

<style scoped>
* {
 margin: 0;
 padding: 0;
}
.app {
 /* background-color: #f8fefe; */
}

.el-row {
 margin-bottom: 20px;
 background: url('../../assets/back/Home-bg.jpg');

 &:last-child {
  margin-bottom: 0;
 }
}

.el-col {
 border-radius: 4px;
}

.grid-content {
 border-radius: 4px;
 min-height: 36px;
}

/* 设置弹性布局 内容永远居中 */
.page-flex {
 display: flex;
 justify-content: center;
}

.page-box {
 width: 100%;
 background: #536153;
}

/* 添加部分 */
.main-container {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 /* background: #F8FEFE; */
 background: url('../../assets/back/Home-bg.jpg');

}

/* 开始写内容 */

.colour{
 width :100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 margin-top: 30px;
 
}
.colour-left,
.colour-right
{
 width: 45%;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
}
.colour-left img,
.colour-right img
{
 width: 100%;
 height: auto;
}

</style>
