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

              <!-- 制瓷工艺 -->
              <div class="make">
                <div class="make-left">
                  <div class="make-left-back">
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
                  <div class="make-left-text">景德镇手工制瓷工艺专业化程度强，
                    行业分工极其细致，最核心的包括拉坯、利坯、画坯、施釉和烧窑等五项工序。
                    景德镇手工制瓷工艺在汇集全国各地名窑技艺的基础上形成自己的特色，
                    并自成体系。其行业分工之细，专业化强度之高是其他手工行业所无法比拟的。
                    从御窑厂来说，其生产组织分工相当完备，具备了制坯行业的各种作坊：
                    有舂碓陶土的作坊，有制作大小圆、琢器坯胎的作坊，有制匣钵的作坊，
                    还有各种辅助性的作坊，如泥水作、大木作，船木作，铁作等。
                    许多局部操作大都由专业性很强的工匠担任。同时将烧、
                    做两行集中在厂内，设御窑若干座，形成了一个门类齐全，
                    无所不及的大型手工作坊。
                  </div>
                </div>
                <div class="make-right">
                  <TechnologyLun></TechnologyLun>
                </div>
              </div>

              <!-- 制作步骤 -->
              <div class="step">

                <div class="step-la">
                  <div class="step-la-title">
                    <img src="../../assets/technology/t_title.png" alt="">
                    <div class="step-la-title-text">拉坯</div>
                  </div>

                  <div class="step-la-text">
                    拉坯成型是利用拉坯机旋转的力量，配合双手的动作，
                    将转盘上的泥团拉成各种形状的成型方法，也叫轮制法。
                    它是利用拉坯机快速旋转所产生的离心力，结合双手控制挤压泥团，
                    掌握泥巴的特性和手与机器之间相互的动力规律，
                    将泥团拉制成各种形状的空膛薄壁的圆体器型。
                    拉坯是陶艺制作中较常用的一种方法，但由于它的技术要求较高，
                    练习者需要花较长的时间才能掌握。拉坯可以制作杯、盘、碗、瓶等简单的造型，
                    也可以利用拉坯成型后再进行切割组合成各种复杂的造型。
                  </div>
                  <div class="step-la-pink"></div>
                </div>

                <div class="step-li">
                  <div class="step-li-title">
                    <img src="../../assets/technology/t_title.png" alt="">
                    <div class="step-li-title-text">利坯</div>
                  </div>
                  <div class="step-li-text">
                    利坯是陶瓷制作
                    中的一个重要工序，主要涉及使用专门的工具对半干的坯体进行手工修整。
                    这个过程旨在使器物表面更加光洁，厚薄均匀，确保陶瓷器物的形状和美观。
                    利坯的过程不仅需要工匠熟悉泥料
                    的性能、器物造型的直曲线变化，
                    还要考虑烧成时各部位的留泥和收缩情况，
                    利坯工具通常是铁质
                    的，需要经过特殊的磨制
                    和淬火处理，以提高其强度和硬度，以适应不同的修整需求。
                  </div>

                  <div class="step-li-pink"></div>
                </div>

                <div class="step-shi">
                  <div class="step-shi-title">
                    <img src="../../assets/technology/t_title.png" alt="">
                    <div class="step-shi-title-text">施釉</div>
                  </div>
                  <div class="step-shi-text">
                    施釉工艺是古陶瓷器制作工艺技术的一种，
                    是指在成型的陶瓷坯体表面施以釉浆的过程。
                    其方法有蘸釉、荡釉、浇釉、刷釉、吹釉、喷釉、轮釉等多种。
                    按坯体的不同形状、厚薄，采用相应的施釉方法。
                    施釉工艺是古陶瓷器制作工艺技术的一种，是指在成型的陶瓷坯体表面施以釉浆。
                    主要有蘸釉、荡釉、浇釉、刷釉、洒釉、轮釉等七种方法，
                    按坯体的不同形状、厚薄，采用相应的施釉方法。
                  </div>

                  <div class="step-shi-pink"></div>
                </div>

                <div class="step-hua">
                  <div class="step-hua-title">
                    <img src="../../assets/technology/t_title.png" alt="">
                    <div class="step-hua-title-text">画青花</div>
                  </div>
                  <div class="step-hua-text">
                    青花是我国陶瓷装饰艺术中珍贵的传统装饰品种之一,
                    自元朝以来,经久不衰。元代是青花瓷的成熟期,
                    其中至正型青花堪称顶峰之作。
                    元青花丰富而独特的文化内涵和艺术语言,不仅在陶瓷史、
                    文化史上有着重要的地位,它至今仍在印象现代青花瓷画的创作。
                    本文从实践出发,简述现代青花瓷画中的元青花意义。
                  </div>

                  <div class="step-hua-pink"></div>
                </div>

                <div class="step-burn">
                  <div class="step-burn-title">
                    <img src="../../assets/technology/t_title.png" alt="">
                    <div class="step-burn-title-text">烧窑</div>
                  </div>
                  <div class="step-burn-text">
                    烧窑，泛指在一个人工搭建的建筑物里，
                    通过生火加热产生高温，使粘土烧制成型的过程。
                    通常所说烧窑是指烧制陶器，瓷器等。
                    窑厂盖法
                    窑有几种盖法，
                    一可用土片去盖，二可用煤饼去盖，三可用粉石去盖，
                    不同省份，不同地区，略有差异。每种盖法的耐热性不同，
                    土窑耐热时间最短，耐热时间最长的是石头窑。
                  </div>

                  <div class="step-burn-pink"></div>
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
// 引入导航栏
import AppBar from '@/components/AppBar'
// 引入底部防伪
import BottomView from'../../components/BottomView.vue';
// 引入轮播图
import CarouselPage from'../../components/CarouselPage.vue';
// 引入右侧制作工艺小轮播图
import TechnologyLun from'../../components/TechnologyLun'


export default {
  components: {
    AppBar, 
    CarouselPage,  
    BottomView,
    TechnologyLun
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

  /* background-color: #f8fefe; */
}

/* 添加部分 */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 内容部分 */
/* 制瓷工艺 */
.make {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

}

.make-left {
  width: 35%;
}

.make-left-back {
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
  width: 100%;
}

.left,
.right {
  width: 38%;
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

.make-left-text{
  font-family: Microsoft YaHei;
/* font-weight: 400; */
font-size: 13px;
color: #666666;
line-height: 30px;
}


.make-right {
  width: 60%;
  height: auto;
  background-color: #50aac5;
}




/* 制作步骤 */
.step {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.step-la,
.step-li,
.step-shi,
.step-hua,
.step-burn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step-li,
.step-hua {
  margin-top: 30px;
  flex-direction: row-reverse;
}

.step-shi ,
.step-burn{
  margin-top: 30px;
}

.step-la-title,
.step-li-title,
.step-shi-title,
.step-hua-title,
.step-burn-title{
  width: 3%;
  /* height: 130px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}

.step-la-title img,
.step-li-title img,
.step-shi-title img,
.step-hua-title img,
.step-burn-title img {
  width: 100%;
  /* height: 130px; */
}

.step-la-title-text,
.step-li-title-text,
.step-shi-title-text,
.step-hua-title-text,
.step-burn-title-text {
  position: absolute;
  font-family: Microsoft YaHei;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  /* line-height: 30px; */
  writing-mode: vertical-rl;
  letter-spacing: 13px;
}

.step-la-text,
.step-li-text,
.step-shi-text,
.step-hua-text,
.step-burn-text {
  width: 28%;
  /* width: 40%; */
  /* height: 230px; */
  height: 34%;
  font-family: Microsoft YaHei;
  /* font-weight: 400; */
  font-size: 12px;
  color: #666666;
  line-height: 30px;
  writing-mode: vertical-rl;
  /* text-align: right;
  direction: rtl; */
}

.step-la-pink,
.step-li-pink,
.step-shi-pink,
.step-hua-pink,
.step-burn-pink {
  width: 50%;
  height: 230px;
  background: #F1B2AD;
}
</style>