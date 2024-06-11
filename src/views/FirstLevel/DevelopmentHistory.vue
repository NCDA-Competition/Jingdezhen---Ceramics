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

        <!-- 商周时期 -->
        <div class="sz">
          <div class="sz-pic">
            <img src="../../assets/FirstLevel/DevelopmentHistory/d-01.png" alt="">
          </div>
          <div class="text">
            商周时期陶器由于制陶原料、窑炉结构、
            烧制方式等方面都发生了革命性的进展，
            致使这一时期陶器种类愈加丰富。从工艺种类来说，
            夏商周春秋战国时期陶器以硬纹陶、灰陶、黑陶及白陶为主，
            还出现了原始瓷器。从社会功能的角度出发，
            夏商周春秋战国时期的陶器中既涵盖大量兼具实用与审美功能的炊具、
            食器、酒器等，
            用于人们的日常生活;更有运用于祭祀、丧葬、
            宴飧等诸多礼仪活动的陶制礼器。
          </div>
          <!-- 题目 -->
          <div class="title">
            <div class="title-pic">
              <img src="../../assets/FirstLevel/DevelopmentHistory/d-title.png" alt="">
              <div class="title-text">商周时期</div>
            </div>
          </div>
        </div>
        <!-- 秦汉时期 -->
        <div class="qh">
          <div class="qh-pic">
            <img src="../../assets/FirstLevel/DevelopmentHistory/d-02.png" alt="">
          </div>
          <div class="text">
            秦代的陶器经历了从“祭器”的尚礼到“用器”的崇用。
            秦陶俑以完美的艺术形式，生动通真的神态，
            深刻地揭示了各种人物的内心世界。
            表明我国的雕塑艺术现实主义传统的久远。
            过去对于秦代陶器的发掘和研究不多，
            仅从几十年来的考古材料初步看来，
            自秦代统一后到汉代处六七十年间，
            物质文化面貌基本上保持着战国时期的状态。
            秦代印有统一全国度量衡制度“诏版”的陶量，
            也是秦代实行统一和促进经济发展的历史见证。
            陶塑艺术起源很早，古代遗存可以追溯到新石器时代。
            墓葬中的陶俑似乎导源于代替人殉的习俗。
            陶土材料的可塑性是放生象生的最好材料。在战国末期，
            陶塑艺术迅速发展起来，
            其高峰则是今年在秦始陵发展的陶俑。
          </div>
          <!-- 题目 -->
          <div class="title">
            <div class="title-pic">
              <img src="../../assets/FirstLevel/DevelopmentHistory/d-title.png" alt="">
              <div class="title-text">秦汉时期</div>
            </div>
          </div>
        </div>
        <!-- 六朝时期 -->
        <div class="lc">
          <div class="lc-pic">
            <img src="../../assets/FirstLevel/DevelopmentHistory/d-03.png" alt="">
          </div>
          <div class="text">
            六朝时期，制瓷工匠们在长期地生产实践中，
            技术水平日益精进，制工序不断优化，改变了前代青瓷形式粗糙、
            生产力低下的生产状况，
            如婺窑制瓷工匠通过在粗糙的坯体上再施一层含铁量很低的白瓷土，
            即化妆土的方式，使得烧成后的胎体更光滑整洁，
            提高了瓷器的质量与审美价值。而制坯用的陶车，
            普遍使用了更为先进的瓷质轴顶碗装置，
            在保证了器物质量的同时提高了生产效率为瓷器生产提供有利条件，
            并使圆器更加规则。器体施釉方法从涂釉法发展到浸釉法，
            不仅可以使釉层厚薄均匀，
            同时也减少了剥釉与流釉的现象使得器物更加美观，提高了成品率。
            此外，浙江地区制瓷工匠对龙窑结构进行了优化与改进
          </div>
          <!-- 题目 -->
          <div class="title">
            <div class="title-pic">
              <img src="../../assets/FirstLevel/DevelopmentHistory/d-title.png" alt="">
              <div class="title-text">六朝时期</div>
            </div>
          </div>
        </div>
        <!-- 隋朝时期 -->
        <div class="sc">
          <div class="sc-pic">
            <img src="../../assets/FirstLevel/DevelopmentHistory/d-04.png" alt="">
          </div>
          <div class="text">
            隋以前烧瓷窑场主要都集中在长江以南和长江上游的四川地区，
            北方的烧瓷窑场极为稀少，入隋以后，南北方瓷业才开始了飞跃性的发展，
            窑场及其烧制的瓷器明显增多，各种花色、风格、样式的瓷器开始呈现，
            形成各竟风流的局面。隋朝南北瓷业发展飞速，密场及其烧制的瓷器明显增多，
            各种花色、风格、样式的瓷器开始出现，一时形成百家争鸣的盛况。
            隋代青瓷是在南北朝时期陶瓷生产的基础上发展起来的。
            隋朝在陶瓷史上起着承前启后的作用。
            青瓷的生产出现了南北合融为一体的崭新局面，
            既继承了南北朝时期的烧瓷技术与青瓷的造型又有所提高并创造出许多新的器形。
          </div>
          <!-- 题目 -->
          <div class="title">
            <div class="title-pic">
              <img src="../../assets/FirstLevel/DevelopmentHistory/d-title.png" alt="">
              <div class="title-text">六朝时期</div>
            </div>
          </div>
        </div>
        <!-- 唐朝时期 -->
        <div class="tc">
          <div class="tc-pic">
            <img src="../../assets/FirstLevel/DevelopmentHistory/d-05.png" alt="">
          </div>
          <div class="text">
            到了唐代，瓷器制作可为以蜕变到成熟的境界，
            而跨入真正的瓷器时代。因为陶与瓷的分野，在乎质白坚硬或半透明，
            而最大的关键在於火烧温度。汉代虽有瓷器，但温度不高，
            质地弱只能算是原瓷，而发展到唐代，不但釉药发展成熟，
            火烧温度能达到摄氏一千度以上，所以我们说唐代是真正进入瓷器的时代。
            唐代最著名的窑为越窑与那窑。越窑在南方浙江省绍兴，
            主要制造青瓷:邢窑在北方河北省邢台，主要制造白瓷。
            越窑的青瓷明彻如冰，晶莹温润如玉，
            色泽是青中带绿与茶青色相近。
          </div>
          <!-- 题目 -->
          <div class="title">
            <div class="title-pic">
              <img src="../../assets/FirstLevel/DevelopmentHistory/d-title.png" alt="">
              <div class="title-text">六朝时期</div>
            </div>
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

 export default {
  components: {
   AppBar ,// 确保在 components 中注册了 AppBar  
   CarouselPage,  
    BottomView
  },
 }
 
 
 </script>
 
 <style scoped>
 * {
  margin: 0;
  padding: 0;
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
 .app{
  /* background-color: #f8fefe; */
 }
 
 /* 设置弹性布局 内容永远居中 */
 .page-flex {
  display: flex;
  justify-content: center;
 }
 
 .page-box {
  width: 100%;
  /* background: #F8FEFE; */
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
 /* 商周时期 */
 /* 秦汉时期 */
 .sz,
 .qh,
 .lc,
 .sc,
 .tc
 {
  margin-top: 80px;
  width: 100%;
  /* height: 400px; */
  background: #E4F2F2;
  border-radius: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }

 .qh,
 .sc
 {
  flex-direction: row-reverse;
 }


 .sz-pic,
 .qh-pic,
 .lc-pic,
 .sc-pic,
 .tc-pic
 {
  width: 28%;
 }

 .sz-pic img,
 .qh-pic img,
 .lc-pic img,
 .sc-pic img,
 .tc-pic img
 {
  width: 100%;
  border-radius: 200px;
 }
 .text{
  width: 48%;
  color: #949292;
  font-family: Microsoft YaHei;
  line-height: 30px;
 }
 .title{
  width: 12%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 }
 .title-pic{
  /* width: 100%; */
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .title-pic img{
  width: 100%;
  height: auto;
  /* position: relative; */
 }
 .title-text{
  position: absolute;
  font-size: 18px;
  text-align: center;
  font-family: Microsoft YaHei;
  line-height: 30px;
 }

 
 
 </style>
 