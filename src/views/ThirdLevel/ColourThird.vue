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

              <!-- 面包屑导航 -->
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/ColourScheme' }">陶瓷色系</el-breadcrumb-item>
              </el-breadcrumb>
              
              <!-- 红色系色条 -->
              <div class="red">
                <div class="red-one">
                  <div class="red-fh"></div>
                  <div class="red-fh-text">粉红釉</div>
                </div>
                <div class="red-two">
                  <div class="red-yz"></div>
                  <div class="red-yz-text">胭脂红</div>
                </div>
                <div class="red-three">
                  <div class="red-jh"></div>
                  <div class="red-jh-text">祭红</div>
                </div>
                <div class="red-four">
                  <div class="red-sh"></div>
                  <div class="red-sh-text">珊瑚红</div>
                </div>
                <div class="red-five">
                  <div class="red-lj"></div>
                  <div class="red-lj-text">郎窑红</div>
                </div>
                <div class="red-six">
                  <div class="red-jd">
                    <span>红釉</span>
                    <P>HONGYOU</P>
                  </div>
                  <div class="red-jd-text">豇豆红</div>
                </div>
              </div>

              <!-- 红色系图片 -->
              <div class="red-pic">
                <ul class="image-row">
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/red-01.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/red-02.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/red-03.png" alt="">
                  </li>
                </ul>
                <ul class="image-row">
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/red-04.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/red-05.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/red-06.png" alt="">
                  </li>
                </ul>
              </div>

              <!-- 黄色系色条 -->
              <div class="yellow">
                <div class="yellow-one">
                  <div class="yellow-dh"></div>
                  <div class="yellow-dh-text">蛋黄</div>
                </div>
                <div class="yellow-two">
                  <div class="yellow-nm"></div>
                  <div class="yellow-nm-text">柠檬黄</div>
                </div>
                <div class="yellow-three">
                  <div class="yellow-jh"></div>
                  <div class="yellow-jh-text">浇黄</div>
                </div>
                <div class="yellow-four">
                  <div class="yellow-jy"></div>
                  <div class="yellow-jy-text">鸡油黄</div>
                </div>
                <div class="yellow-five">
                  <div class="yellow-sy"></div>
                  <div class="yellow-sy-text">鳝鱼黄</div>
                </div>
                <div class="yellow-six">
                  <div class="yellow-cy">
                    <span>黄釉</span>
                    <P>HUANGYOU</P>
                  </div>
                  <div class="yellow-cy-text">茶叶末</div>
                </div>
              </div>

              <!-- 红色系图片 -->
              <div class="yellow-pic">
                <ul class="image-row">
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/yellow-01.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/yellow-02.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/yellow-03.png" alt="">
                  </li>
                </ul>
                <ul class="image-row">
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/yellow-04.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/yellow-05.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/yellow-06.png" alt="">
                  </li>
                </ul>
              </div>

              <!--绿色系色条 -->
              <div class="green">
                <div class="green-one">
                  <div class="green-song"></div>
                  <div class="green-song-text">松石绿</div>
                </div>
                <div class="green-two">
                  <div class="green-qk"></div>
                  <div class="green-qk-text">秋葵绿</div>
                </div>
                <div class="green-three">
                  <div class="green-pg"></div>
                  <div class="green-pg-text">苹果绿</div>
                </div>
                <div class="green-four">
                  <div class="green-gp"></div>
                  <div class="green-gp-text">瓜皮绿</div>
                </div>
                <div class="green-five">
                  <div class="green-ly"></div>
                  <div class="green-ly-text">郎窑绿</div>
                </div>
                <div class="green-six">
                  <div class="green-kq">
                    <span>绿釉</span>
                    <P>LV YOU</P>
                  </div>
                  <div class="green-kq-text">孔雀绿</div>
                </div>
              </div>

              <!-- 绿色系图片 -->
              <div class="green-pic">
                <ul class="image-row">
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/green-01.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/green-02.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/green-03.png" alt="">
                  </li>
                </ul>
                <ul class="image-row">
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/green-04.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/green-05.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/ThirdLevel/ColourThird/green-06.png" alt="">
                  </li>
                </ul>
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
  /* background: #536153; */
 /* background: url('../../assets/back/Home-bg.jpg'); */

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

  width: 100%;
}

/* 开始写内容 */

/* 红色系色条 */
/* 黄色系色条 */
/* 绿色系色条 */
.red,
.yellow,
.green {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

/* 第一个占比17%的大盒子 */
.red-one,
.yellow-one,
.green-one {
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.red-fh {
  width: 100%;
  height: 220px;
  background: #CA7685;
}

/* 第一个占比17%的盒子的文本 */
.red-fh-text,
.yellow-dh-text,
.green-song-text {
  width: 15%;
  line-height: 1.5;
}

/* 第二个占比9%的盒子 */
.red-two,
.red-three,
.red-four,
.red-five,

.yellow-two,
.yellow-three,
.yellow-four,
.yellow-five,

.green-two,
.green-three,
.green-four,
.green-five {
  width: 9%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.red-yz {
  width: 100%;
  height: 220px;
  background: #C12E5A;
}

/* 中间部分下面的文本 */
.red-yz-text,
.red-jh-text,
.red-sh-text,
.red-lj-text,

.yellow-nm-text,
.yellow-jh-text,
.yellow-jy-text,
.yellow-sy-text,

/* .green-song-text, */
.green-qk-text,
.green-pg-text,
.green-gp-text,
.green-ly-text {
  width: 15%;
  line-height: 1.5;
}

/* 色条最宽下面的文本 */
.red-jd-text,
.yellow-cy-text,
.green-kq-text {
  width: 5%;
  line-height: 1.5;
}

.red-jh {
  width: 100%;
  height: 220px;
  background: #9E433E;
}

.red-sh {
  width: 100%;
  height: 220px;
  background: #AC3320;
}

.red-lj {
  width: 100%;
  height: 220px;
  background: #AE0E0E;
}

/* 色条最宽的布局 */
.red-six,
.yellow-six,
.green-six {
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 红色系色条最宽 */
.red-jd {
  width: 100%;
  height: 220px;
  background: #551E17;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

/* 色系条文字定位 */
.red-jd p,
.yellow-cy p,
.green-kq p {
  font-family: HYDaSongJ;
  font-weight: 400;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 30px;
  color: #F8FEFE;
}

.red-jd span,
.yellow-cy span,
.green-kq span {
  color: #FFFFFF;
  margin-right: 30px;
  font-size: 18px;
}

/* 红色系图片 */
/* 黄色系图片 */
/* 绿色系图片 */
.red-pic,
.yellow-pic,
.green-pic {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.image-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
}

.image-row>li {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.red-pic>ul>li,
.yellow-pic>ul>li,
.gree-pic>ul>li {
  list-style: none;
}

.red-pic>ul>li>img,
.yellow-pic>ul>li>img,
.green-pic>ul>li>img {
  width: 100%;
  height: auto;
  margin-top: 30px;
}

/* 黄色系色条 */
.yellow-dh {
  width: 100%;
  height: 220px;
  background: #E5E266;
  background: #C7B83E;
}

.yellow-nm {
  width: 100%;
  height: 220px;
  ;
  background: #C7B83E;
}

.yellow-jh {
  width: 100%;
  height: 220px;
  ;
  background: #A68C3C;
}

.yellow-jy {
  width: 100%;
  height: 220px;
  ;
  background: #A18D0E;
}

.yellow-sy {
  width: 100%;
  height: 220px;
  background: #958460;
}

/* 黄色色系条最宽 */
.yellow-cy {
  width: 100%;
  height: 220px;
  background: #775F25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}


/* 绿色系色条 */
.green-song {
  width: 100%;
  height: 220px;
  background: #3C9395;
}

.green-qk {
  width: 100%;
  height: 220px;
  background: #6CB089;
}

.green-pg {
  width: 100%;
  height: 220px;
  background: #67824B;
}

.green-gp {
  width: 100%;
  height: 220px;
  background: #588E65;
}

.green-ly {
  width: 100%;
  height: 220px;
  background: #4B9779;
}

/* 绿色色系条最宽 */
.green-kq {
  width: 100%;
  height: 220px;
  background: #1B5659;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
