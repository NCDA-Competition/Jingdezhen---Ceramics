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
              <!-- 陶瓷纹样 -->
              <ul class="lines">
                <li>
                  <img src="../../assets/HomePage/wenyang/wenyang_01.png" alt="">
                  <p>云纹</p>
                </li>
                <li>
                  <img src="../../assets/HomePage/wenyang/wenyang_02.png" alt="">
                  <p>团花纹</p>

                </li>
                <li>
                  <img src="../../assets/HomePage/wenyang/wenyang_03.png" alt="">
                  <p>松纹</p>

                </li>
                <li>
                  <img src="../../assets/HomePage/wenyang/wenyang_04.png" alt="">
                  <p>皮球纹</p>

                </li>
                <li>
                  <img src="../../assets/HomePage/wenyang/wenyang_05.png" alt="">
                  <p>蕉叶纹</p>
                </li>
                <li>
                  <img src="../../assets/HomePage/wenyang/wenyang_06.png" alt="">
                  <p>火焰纹</p>
                </li>
              </ul>

              <!-- 陶瓷发展历史 -->
              <div class="history">
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

              <ul class="history-container">
                <li class="history-container-one">
                  <div class="produce">
                    <div class="produce-wz">
                      景德镇瓷器以白瓷为闻名，
                      素有“白如玉，明如镜，薄如纸，
                      声如磬”之称，品种齐全，
                      曾达三千多种品名。瓷质优良，
                      造型轻巧，装饰多样。
                      在装饰方面有青花、
                      釉里红、古彩、粉彩、斗彩、新彩、釉下五彩
                      、青花玲珑等，其中尤以青花、
                      粉彩产品为大宗，颜色釉为名产。 景德镇瓷器中最著名有
                      典雅素净的青花瓷，
                      明净剔透的青花玲珑瓷，五彩缤纷的颜色釉瓷， 幽静雅的
                      青花影青瓷，古朴清丽的古彩瓷，
                      万紫千红的新彩瓷，明丽隽秀的窑彩瓷，
                      别开生面的总和装饰瓷等。这些珍贵的名瓷，
                      被誉为“中华民族文化之精华”、“瓷国之瑰宝”。
                    </div>
                  </div>
                  <div class="pro-img">
                    <img src="../../assets/HomePage/CQIntro/CQIntro_07.jpg" alt="">
                  </div>
                </li>
                <li class="history-container-two">
                  <div>
                    <img src="../../assets/HomePage/CQIntro/CQIntro_01.jpg" alt="">
                  </div>
                  <div class="wenzi">
                    <img src="../../assets/HomePage/CQIntro/CQIntro_02.jpg" alt="">
                    <div class="text-container">
                      <p class="text-line">薄如纸</p>
                      <p class="text-line">青玉缠枝莲纹小杯</p>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/HomePage/CQIntro/CQIntro_03.jpg" alt="">
                  </div>
                </li>
                <li class="history-container-three">
                  <div class="wenzi">
                    <img src="../../assets/HomePage/CQIntro/CQIntro_04.jpg" alt="">
                    <div class="text-container">
                      <p class="text-line">白如玉</p>
                      <p class="text-line">粉彩桃蝶球瓶</p>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/HomePage/CQIntro/CQIntro_05.jpg" alt="">
                  </div>

                  <div class="wenzi">
                    <img src="../../assets/HomePage/CQIntro/CQIntro_06.jpg" alt="">
                    <div class="text-container">
                      <p class="text-line">明如镜</p>
                      <p class="text-line">手绘珐琅采莲花</p>
                    </div>
                  </div>



                </li>
              </ul>


              <!-- 陶瓷历史发展 -->
              <div class="develop">
                <!-- <div class="title">
                  <img src="../../assets/HomePage/images/title.png" alt="">
                  <div class="title-text">陶瓷发展历史</div>
                </div> -->
                <!-- <img src="../../assets/HomePage/title/lsfz.png" alt=""> -->

                <div class="title">
                  <!-- 左边 -->
                  <div class="left">
                    <img src="../../assets/HomePage/title/left.png" alt="">
                  </div>
                  <div class="text">历史发展</div>
                  <!-- 右边 -->
                  <div class="right">
                    <img src="../../assets/HomePage/title/right.png" alt="">
                  </div>
                </div>

              </div>
              <!-- 内容部分 -->
              <div class="develop-container" @click="goToDevelopmentHistory">
                <!-- 上面部分 -->
                <div class="develop-container-top">

                  <div class="develop-container-top-one">
                    <div class="one-time">
                      <img src="../../assets/HomePage/images/lishifazhanTitle.png" alt="">
                      <div class="one-time-word">商周时期</div>
                    </div>
                    <div class="yuan">
                    </div>
                  </div>
                  <!-- 图 -->
                  <div class="two-pic-top">
                    <img src="../../assets/HomePage/images/lishifazhan_02.png" alt="">
                  </div>
                  <div class="develop-container-top-one">
                    <div class="one-time">
                      <img src="../../assets/HomePage/images/lishifazhanTitle.png" alt="">
                      <div class="one-time-word">六朝时期</div>
                    </div>
                    <div class="yuan">
                    </div>
                  </div>
                  <!-- 图 -->
                  <div class="two-pic-top">
                    <img src="../../assets/HomePage/images/lishifazhan_04.png" alt="">
                  </div>

                  <div class="develop-container-top-one">
                    <div class="one-time">
                      <img src="../../assets/HomePage/images/lishifazhanTitle.png" alt="">
                      <div class="one-time-word">唐朝时期</div>
                    </div>
                    <div class="yuan">
                    </div>
                  </div>


                </div>
                <!-- 中间部分 -->
                <div class="develop-container-middle">
                  <img src="../../assets/HomePage/images/hengxian-middle.png" alt="">
                </div>

                <!-- 下面部分 -->
                <div class="develop-container-bottom">
                  <div class="two-pic-bottom">
                    <img src="../../assets/HomePage/images/lishifazhan_01.png" alt="">
                  </div>
                  <div class="develop-container-top-one">
                    <div class="yuan"></div>
                    <div class="one-time">
                      <img src="../../assets/HomePage/images/lishifazhanTitle.png" alt="">
                      <div class="one-time-word">秦汉时期</div>
                    </div>
                  </div>
                  <!-- <div class="develop-container-bottom"> -->
                  <div class="two-pic-bottom">
                    <img src="../../assets/HomePage/images/lishifazhan_03.png" alt="">
                  </div>
                  <!-- </div> -->
                  <div class="develop-container-top-one">
                    <div class="yuan">

                    </div>
                    <div class="one-time">
                      <img src="../../assets/HomePage/images/lishifazhanTitle.png" alt="">
                      <div class="one-time-word">隋朝时期</div>
                    </div>
                  </div>
                  <div class="two-pic-bottom">
                    <img src="../../assets/HomePage/images/lishifazhan_05.png" alt="">
                  </div>
                </div>




              </div>

              <!-- 陶瓷名窑 -->
              <div class="hole">
                <!-- <div class="title">
                  <img src="../../assets/HomePage/images/title.png" alt="">
                  <div class="title-text">陶瓷名窑</div>
                </div> -->
                <!-- <img src="../../assets/HomePage/title/bdmy.png" alt=""> -->

                <div class="title">
                  <!-- 左边 -->
                  <div class="left">
                    <img src="../../assets/HomePage/title/left.png" alt="">
                  </div>
                  <div class="text">八大名窑</div>
                  <!-- 右边 -->
                  <div class="right">
                    <img src="../../assets/HomePage/title/right.png" alt="">
                  </div>
                </div>
              </div>
              <!-- 名窑内容 -->
              <div class="hole-infoPic" @click="goToFamousCeramic">
                <div class="hole-top">
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/minyao_01.jpg" alt="">
                  </div>
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_02.jpg" alt="">
                  </div>
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_03.jpg" alt="">
                  </div>
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_04.jpg" alt="">
                  </div>
                </div>
                <div class="hole-bottom">
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_05.jpg" alt="">
                  </div>
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_06.jpg" alt="">
                  </div>
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_07.jpg" alt="">
                  </div>
                  <div class="hole-top-ru">
                    <img src="../../assets/HomePage/images/mingyao_08.jpg" alt="">
                  </div>
                </div>
              </div>


              <!-- 陶瓷色系 -->
              <div class="color">
                <!-- <div class="title">
                  <img src="../../assets/HomePage/images/title.png" alt="">
                  <div class="title-text">陶瓷色系</div>
                </div> -->
                <!-- <img src="../../assets/HomePage/title/tcsx.png" alt=""> -->

                <div class="title">
                  <!-- 左边 -->
                  <div class="left">
                    <img src="../../assets/HomePage/title/left.png" alt="">
                  </div>
                  <div class="text">陶瓷色系</div>
                  <!-- 右边 -->
                  <div class="right">
                    <img src="../../assets/HomePage/title/right.png" alt="">
                  </div>
                </div>
              </div>
              <!-- 色系内容 -->
              <div class="color-bigBox" ref="ColourScheme">
                <div class="color-large">
                  <img src="../../assets/HomePage/images/s-01.jpg" alt="">
                </div>
                <!-- <div class="color-series">

                  <div class="color-series-one">
                    <div class="color-series-one-text">#94CCCD</div>
                  </div>

                  <div class="color-series-two"></div>
                  <div class="color-series-three"></div>
                  <div class="color-series-four"></div>
                </div> -->
                <div class="color-pin">
                  <img src="../../assets/HomePage/images/s-02.jpg" alt="">
                </div>
                <div class="color-yellow">
                  <img src="../../assets/HomePage/images/s-03.jpg" alt="">
                </div>
                <div class="color-blue">
                  <img src="../../assets/HomePage/images/s-04.jpg" alt="">
                </div>
                <div class="color-red">
                  <img src="../../assets/HomePage/images/s-05.jpg" alt="">
                </div>

              </div>

              <!-- 四大陶瓷 -->
              <div class="famous">
                <!-- <div class="title">
                  <img src="../../assets/HomePage/images/title.png" alt="">
                  <div class="title-text">四大陶瓷</div>
                </div> -->
                <!-- <img src="../../assets/HomePage/title/tczs.png" alt=""> -->

                <div class="title">
                  <!-- 左边 -->
                  <div class="left">
                    <img src="../../assets/HomePage/title/left.png" alt="">
                  </div>
                  <div class="text">四大陶瓷</div>
                  <!-- 右边 -->
                  <div class="right">
                    <img src="../../assets/HomePage/title/right.png" alt="">
                  </div>
                </div>
              </div>
              <!-- 四大陶瓷内容 -->
              <div class="famous-box">
                <div class="famous-box-one">
                  <div class="famous-box-one-top-pic">
                    <img src="../../assets/HomePage/images/sdtc-01.png" alt="">
                  </div>
                  <div class="famous-box-one-text">
                    颜色釉瓷
                  </div>
                  <!-- <div class="famous-box-one-more">
                    查看更多
                  </div> -->
                </div>

                <div class="famous-box-two">
                  <!-- <div class="famous-box-two-top"></div> -->
                  <div class="famous-box-two-top-pic">
                    <img src="../../assets/HomePage/images/sdtc-02.png" alt="">
                  </div>
                  <div class="famous-box-two-text">
                    青花瓷
                  </div>
                  <!-- <div class="famous-box-two-more">
                    查看更多
                  </div> -->


                </div>

                <div class="famous-box-three">
                  <!-- <div class="famous-box-three-top "></div> -->
                  <div class="famous-box-three-top-pic">
                    <img src="../../assets/HomePage/images/sdtc-03.png" alt="">
                  </div>
                  <div class="famous-box-three-text">
                    粉彩瓷
                  </div>
                  <!-- <div class="famous-box-three-more">
                    查看更多
                  </div> -->
                </div>
              </div>
              <BottomView></BottomView>
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
// 引入底部防伪
import BottomView from '../../components/BottomView.vue';
// 引入轮播图
import CarouselPage from '../../components/CarouselPage.vue';
// 引入导航栏
import AppBar from '../../components/AppBar.vue'


export default {
  components: {
    AppBar,
    CarouselPage,
    BottomView
  },
  data() {
    return {

    };
  },
  mounted() {
    this.$refs.ColourScheme.addEventListener('click', this.goToColourScheme);
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器，避免内存泄漏  
    this.$refs.ColourScheme.removeEventListener('click', this.goToColourScheme);
  },
  methods: {
    goToColourScheme() {
      this.$router.push('/ColourScheme')
    },
    goToDevelopmentHistory() {
      this.$router.push('/DevelopmentHistory')
    },
    // 跳转到陶瓷名窑界面
    goToFamousCeramic() {
      this.$router.push('/FamousCeramic')
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
  /* background-color: aquamarine; */
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
  /* width: 1200px; */
  width: 100%;
}

/* 添加部分 */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 开始写内容 */

/* 陶瓷纹样 */
.lines {
  width: 100%;
  height: 150px;
  /* height: 4%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}

.lines>li {
  list-style: none;
  /* width: 153px;
  height: 200px; */
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.lines img {
  width: 100%;
  border-radius: 50%;
}

.lines p {
  font-size: 13px;
}

/* 陶瓷发展历史标题盒子 */
.history,
.develop,
.hole,
.color,
.famous {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 标题样式 */
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
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

/* 标题样式结束 */

/* .history img,
.develop img,
.hole img,
.color img,
.famous img {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

} */

/* .title {
  width: 163px;
  height: 44px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
} */

/* .title img {
  width: 163px;
  height: 44px;
}

.title-text {
  position: absolute;
  z-index: 1;
} */

/* // 陶瓷介绍内容 */
.history-container {
  /* width: 1198px;
  height: 660px; */
  width: 100%;
  height: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

/* // 第一板块 */
.history-container-one {
  width: 52%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.produce {
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #55d6d6; */
}

.produce-wz {
  width: 95%;
  height: 100%;
  text-align: justify;
  font-family: Microsoft YaHei;
  /* font-weight: bold; */
  font-size: 13px;
  color: #999999;
  line-height: 30px;
  /* background-color: #ef7575; */
  text-indent: 2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;

}

.pro-img {
  width: 100%;
  height: 70%;
  /* height: 66.2%; */
  /* height: 60%; */
  /* background-color: #f8fefe; */
  /* overflow: hidden; */
}

.pro-img>img {
  width: 100%;
  height: 100%;
}

/* // 第二 */
.history-container-two,
.history-container-three {
  width: 16%;
  height: 100%;
  /* background-color: green; */
  /* background-color: #f8fefe; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.history-container-two>div {
  width: 100%;
  height: 33.33%;
  display: flex;
  /* background: #AECCB1; */


}

.history-container-two img,
.history-container-three img {
  width: 100%;
  /* height: 100%; */
}

/* 第三 */
.wenzi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

}
 /* 陶瓷介绍背景上的字体样式 */
.text-container {  
  position: absolute; 
  /* top: 50%;   */
  /* left: 50%;   */
  /* transform: translate(-50%, -50%);  */
  text-align: center; 
  /* color: white;  */
}  
  
.text-line {  
  font-family: Microsoft YaHei;
/* font-weight: 400; */
font-size: 13px;
color: #666666;
line-height: 30px;
}


/* 陶瓷历史发展 */
.develop-container {
  /* width: 90%; */
  width: 100%;
  height: 9%;
  /* background-color: #f8fefe; */
  display: flex;
  flex-direction: column;
  /* margin-top: 40px; */

}

.develop-container-top,
.develop-container-bottom {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.develop-container-top-one {
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.one-time {
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.one-time img {
  /* width: 120px;
  height: 30px; */
  width: 100%;
  height: 100%;
}

.one-time-word {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
}

.yuan {
  /* width: 6px; */
  height: 130px;
  border-left: 6px dotted #455988;
}


.develop-container-middle {
  width: 100%;
  /* height: 100px; */
  /* background-color: #c0f4da; */
}

.develop-container-middle img {
  width: 100%;
  /* height: 100px; */
}

/* .develop-container-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
} */
.two-pic-top,
.two-pic-bottom {
  /* width: 130px;
  height: 128px; */
  margin-top: 15px;
  width: 15%;
}

.two-pic-top img,
.two-pic-bottom img {
  /* width: 130px;
  height: 128px; */
  width: 100%;
  height: auto;
}

.two-pic-top {
  /* width: 130px;
  height: 128px; */
  margin-bottom: 15px;
}

/* .two-pic-top img {
  width: 130px;
  height: 128px;
} */

/* 陶瓷名窑 */
.hole-infoPic {
  width: 100%;
}

.hole-top,
.hole-bottom {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 60px; */
  /* width: 90%; */
  width: 100%;
  cursor: pointer;
}

.hole-top-ru {
  width: 20%;
  height: auto;
  overflow: hidden;
  position: relative;
  /* cursor: pointer; */
  /* transition: transform 0.3s ease-in-out; */
}

.hole-top-ru img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

}

.hole-top-ru:hover img {
  transform: scale(1.2);
  /* 放大1.2倍 */
  transform-origin: center center;
  /* transition: transform 0.3s ease-in-out; */
}


.hole-bottom {
  margin-top: 17px;
}

.color-bigBox {
  width: 100%;
  height: auto;
  display: flex;
  /* justify-content: space-evenly; */
  justify-content: center;
  align-items: center;
  /* margin-top: 60px; */
}

.color-large {
  /* width: 54%; */
  width: 32%;
  height: auto;

}

.color-large img {
  width: 100%;
  height: auto;
}




.color-pin,
.color-yellow,
.color-blue,
.color-red {
  /* width: 15%; */
  width: 9%;
  height: auto;
}

.color-pin img,
.color-yellow img,
.color-blue img,
.color-red img {
  width: 100%;
  height: auto;
}

/* 四大陶瓷 */
.famous-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #d5eb72; */
}

.famous-box-one,
.famous-box-three {
  /* width: 25%; */
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.famous-box-two {
  /* width: 25%; */
  width: 30%;
  height: 81%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}





.famous-box-one-top-pic,
.famous-box-three-top-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 100%;
  height: auto;

}

.famous-box-two-top-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.famous-box-one-top-pic img,
.famous-box-three-top-pic img {
  width: 100%;
  height: auto;

}

.famous-box-two-top-pic img {
  width: 100%;
  height: auto;
}

.famous-box-one-text,
.famous-box-two-text,
.famous-box-three-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Microsoft YaHei;
  /* font-weight: 400; */
  font-size: 14px;
  color: #666666;
  line-height: 10px;
  margin-top: 20px;
}
</style>
