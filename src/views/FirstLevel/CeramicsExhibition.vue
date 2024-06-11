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

        <!-- 陶瓷展览 -->
        <!-- 标题 -->
        <div class="exhibition-title">
          <div class="title">
                  <!-- 左边 -->
                  <div class="left">
                    <img src="../../assets/HomePage/title/left.png" alt="">
                  </div>
                  <!-- 标题文本 -->
                  <div class="text">陶瓷介绍</div>
                  <!-- 右边 -->
                  <div class="right">
                    <img src="../../assets/HomePage/title/right.png" alt="">
                  </div>
                </div>
          </div>
        <div class="exhibition">
         
          <div class="exhibition-left">
            <div class="exhibition-left-one">
              <img src="../../assets/exhibition/exhibition-1.jpg" alt="">
            </div>
            <div class="exhibition-left-two">
              <img src="../../assets/exhibition/exhibition-2.jpg" alt="">
            </div>
            <div class="exhibition-left-three">
              <img src="../../assets/exhibition/exhibition-3.jpg" alt="">
            </div>
            <div class="exhibition-left-four">
              <img src="../../assets/exhibition/exhibition-4.jpg" alt="">
            </div>
            <div class="exhibition-left-five">
              <img src="../../assets/exhibition/exhibition-5.jpg" alt="">
            </div>
          </div>
          <div class="exhibition-middle">
            <div class="exhibition-middle-one">
              <img src="../../assets/exhibition/exhibition-6.jpg" alt="">
            </div>
            <div class="exhibition-middle-two">
              <img src="../../assets/exhibition/exhibition-7.jpg" alt="">
            </div>
            <div class="exhibition-middle-three">
              <img src="../../assets/exhibition/exhibition-8.jpg" alt="">
            </div>
            <div class="exhibition-middle-four">
              <img src="../../assets/exhibition/exhibition-8-12.jpg" alt="">
            </div>
            <div class="exhibition-middle-five">
              <img src="../../assets/exhibition/exhibition-9.jpg" alt="">
            </div>
          </div>
          <div class="exhibition-right">
            <div class="exhibition-right-one">
              <img src="../../assets/exhibition/exhibition-10.jpg" alt="">
            </div>
            <div class="exhibition-right-two">
              <img src="../../assets/exhibition/exhibition-10-06.jpg" alt="">
            </div>
            <div class="exhibition-right-three">
              <img src="../../assets/exhibition/exhibition-11.jpg" alt="">
            </div>
            <div class="exhibition-right-four">
              <img src="../../assets/exhibition/exhibition-12.jpg" alt="">
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
   <!-- <BottomView></BottomView> -->
  </div>
 </template>
 
 <script>
 // 引入导航栏
 import AppBar from '@/components/AppBar'
 // 引入底部防伪
// import BottomView from'../../components/BottomView.vue';
// 引入轮播图
import CarouselPage from'../../components/CarouselPage.vue';

 export default {
  components: {
   AppBar ,// 确保在 components 中注册了 AppBar  
   CarouselPage,  
    // BottomView
  },
 }
 
 
 </script>
 
 <style scoped>
 * {
  margin: 0;
  padding: 0;
 }
 
 .app {
  /* background-color: aquamarine; */
 
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
 .app{
  /* background-color: #f8fefe; */
  /* background-color: #0c4c4c; */
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
  /* background: #f8fefe; */
  /* background: rgb(224, 205, 208); */
 }
 
 /* 添加部分 */
 .main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }

 /* 内容部分 */

 

 /* 陶瓷展览 */
 .exhibition{
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
 }
 .exhibition-title{
  margin-top: 30px;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;

 }
 
/* 标题样式 */
.title {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left,
.right {
  width: 30%;
}

.left img,
.right img {
  width: 100%;
}

.text {
  margin-top: -30px;
  font-size: 16px;
  text-align: center;
}






 .exhibition-left,
 .exhibition-middle,
 .exhibition-right
 {
  width: 29%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .exhibition-left-one,
 .exhibition-left-two,
 .exhibition-left-three,
 .exhibition-left-four,
 .exhibition-left-five,

 .exhibition-middle-one,
 .exhibition-middle-two,
 .exhibition-middle-three,
 .exhibition-middle-four,
 .exhibition-middle-five,

 .exhibition-right-one,
 .exhibition-right-two,
 .exhibition-right-three,
 .exhibition-right-four

 {
  width: 100%;
  height: auto;
 }
 .exhibition-left-one img,
 .exhibition-left-two img,
 .exhibition-left-three img,
 .exhibition-left-four img,
 .exhibition-left-five img,

 .exhibition-middle-one img,
 .exhibition-middle-two img,
 .exhibition-middle-three img,
 .exhibition-middle-four img,
 .exhibition-middle-five img,

 .exhibition-right-one img,
 .exhibition-right-two img,
 .exhibition-right-three img,
 .exhibition-right-four img

 {
  width: 100%;
  height: auto;
  margin-top: 30px;
 }
 
 </style>
 