<template>
 <div class="app">
  <el-row>
   <el-col :span="3">
    <div class="grid-content bg-purple"></div>
   </el-col>
   <el-col :span="18">
    <div class="grid-content bg-purple page-flex">
     <!-- 中间内容:页面中所有东西写在这里 -->
     <div class="page-box">
      <!-- 显示导航栏组件 -->
      <AppBar />
      <div class="main-container">
       <!-- 页面内容 -->

       

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
}


</script>

<style>
* {
 margin: 0;
 padding: 0;
}

.app {
 background-color: aquamarine;

}

.el-row {
 margin-bottom: 20px;

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
 background: rgb(224, 205, 208);
}

/* 添加部分 */
.main-container {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}

/* 开始写内容 */

</style>
