<template>

       <!-- 页面内容 -->
       <div class="bottom">
        <div class="top">
         <div class="one"></div>
         <div class="two"></div>
         <div class="three"></div>
         <div class="four"></div>
        </div>
        <div class="xian"></div>
        <!-- 文字 -->
        <div class="text">
         <ul class="homePage">
          <li class="home">首页 :</li>
          <li>陶瓷纹样 :</li>
          <li>陶瓷发展历史 :</li>
          <li>陶瓷历史发展 :</li>
          <li>陶瓷色系 :</li>
          <li>四大名瓷 :</li>
         </ul>
        </div>
        <div class="xian-two"></div>

       <div class="up">
        <ul class="bottomPage">
          <li class="upPage">中国国家景德镇瓷器版权所有</li>
          <li>京CP备05085846号</li>
          <li>京公网安备11010102003012</li>
          <li>EMAIL:3438358237@qq.com</li>
         
         </ul>
         <ul class="last">
          <li>内容运维：新闻传播处</li>
          <li>技术保障：信息技术部</li>
         </ul>
       </div>


       </div>



       <!--  -->
    
</template>

<script>
// 引入导航栏
export default {
 components: {

 },
}


</script>

<style scoped>
* {
 margin: 0;
 padding: 0;
}
/* 开始写内容 */

/* 底部 */
.bottom {
 width: 100%;
 height: 600px;
 background: #536153;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 margin-top: 30px;

}

.top {
 width: 80%;
 display: flex;
 justify-content: space-around;
 align-items: center;
}

.one,
.two,
.three,
.four {
 width: 20%;
 /* width: 200px; */
 height: 200px;
 background: #C0A478;
 /* margin-top: 20px; */

}
.xian{
 width: 80%;
 height: 1px;
 background-color: #fff;
/* border: 1px solid #FFFFFF; */
/* margin-top: 65px; */

}
.text,
.up{
 width: 80%;
 /* height: 20px; */

}
.up{
 /* margin-top: 25px; */
}
.homePage,
.bottomPage{
 display: flex;
 justify-content: space-around;
 align-items: center;
}
.last{
 display: flex;
 align-items: center;

}

.text li,
.bottomPage li,
.last li{
 list-style: none;
 margin-left: 15px;
 font-family: HYDaSongJ;
font-weight: 400;
font-size: 17px;
color: #FFFFFF;
line-height: 30px;

}
.xian-two{
 width: 80%;
 height: 1px;
 background-color: #fff;
/* border: 1px solid #FFFFFF; */
/* margin-top: 10px; */
}
</style>
