<template>
  <div class="app">
    <AppBar></AppBar>
    <CarouselPage></CarouselPage>

    <div class="haha"></div>

    <div class="tabBar">
      <ul class="appBar-content">
        <li  
        v-for="(item, index) in ceramics"  
        :key="index"  
        class="ceramic-item"  
        @click="toView(index)"  
        :class="{ active: currentIndex === index }"  
      >  
        {{ item.name }}  
        <div v-if="currentIndex === index" class="indicator"></div>  
      </li>  
      </ul>
    </div>
    <!--  -->
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple page-flex">
          <!-- 中间内容:页面中所有东西写在这里 -->
          <div class="page-box">
            <!-- 显示导航栏组件 -->
            <div class="main-container">
              <!-- 页面内容 -->
              <!-- 左边图片＋标题 -->
              <div class="ru">
                <div class="ru-left">
                  <p class="admire">图片欣赏</p>
                  <div class="hx"></div>
                  <!-- 图片 -->
                  <div class="ru-tp">
                    <img :src="currentInfo.img[0]" alt="汝窑图片欣赏">
                  </div>
                </div>
                <!-- 右边简介 -->
                <div class="ru-right">
                  <p class="info">{{ title }}窑简介</p>
                  <div class="hx"></div>
                  <div class="info-text">
                    {{ infotext }}
                  </div>
                </div>
              </div>
              <!-- 汝窑图片排列 -->
              <div class="ru-pic">
                <div class="one">
                  <img :src="currentInfo.img[1]" alt="汝窑1">
                </div>
                <div class="two">
                  <!-- <img :src="info[0].img[2]" alt="汝窑2"> -->
                  <img :src="currentInfo.img[2]" alt="汝窑2">
                </div>
                <div class="three">
                  <img :src="currentInfo.img[3]" alt="汝窑3">
                </div>
              </div>
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

import AppBar from './../../components/AppBar.vue'
import CarouselPage from './../../components/CarouselPage.vue'

export default {
	components: { AppBar, CarouselPage },
  data() {
    return {
      // 窑导航栏列表
      ceramics: [    
        { name: '汝窑' },    
        { name: '官窑' },    
        { name: '哥窑' },       
        { name: '磁州窑' },       
        { name: '建窑' },       
        { name: '定窑' },       
        { name: '景德镇窑' },       
        { name: '均窑' },       
      ],   

      // 窑具体信息数组
      info: [
        // 汝窑信息
        {
          title: "汝",
          text: "汝窑，宋代五大名窑之一，因窑址位于宋时河南汝州境内而得名，今河南省汝州市张公巷和宝丰县大营镇清凉寺村均发现汝窑烧造。汝瓷位居宋代“汝、官、哥、钧、定”五大名窑之首，在中国陶瓷史上素有“汝窑为魁”之称。汝窑是中华传统制瓷著名瓷种之一，中国北宋、南宋、明朝时期皇家主要代表瓷器。汝瓷造型古朴大方，以名贵玛瑙为釉，色泽独特，有“玛瑙为釉古相传”的赞誉。随光变幻，观其釉色，犹如“雨过天晴云破处”， “千峰碧波翠色来”之美妙，土质细润，坯体如侗体其釉厚而声如磬，明亮而不刺目。器表呈蝉翼纹细小开片，有“梨皮、蟹爪、芝麻花”之特点，被世人称为“似玉、非玉、而胜玉”。宋、元、明、清以来，宫廷汝瓷用器，内库所藏，视若珍宝、可与商彝周鼎比贵。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/ru-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ru-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ru-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ru-03.jpg'),
          ]
        },
        // 官窑信息
        {
          title: "官",
          text: "官窑，是南宋宋高宗时期一些窑口专为宫廷烧制的瓷器，供御捡退，在当时俗称“官窑”。官窑，毛公洞第一（今江苏扬州一带）。南宋官窑瓷器沿袭北宋风格，规整对称，宫廷气势，高雅大气，一丝不苟。因为胎土含铁量极高，手感沉重，胎土呈深黑褐色，后称“紫口铁足”。釉面沉重幽亮，釉厚如堆脂，温润如玉。釉面多层反复细刮，釉光下沉而不刺眼，纹理布局规则有致，造型庄重大方。官窑之谓，在中国古代陶瓷史上有不同的内涵。就广义而言，是有别民窑而专为官办的瓷窑，其产品为宫廷所垄断。在宋代瓷器中，官窑即是一种专称，指北宋和南宋时在京城汴京（汴梁，今开封）和临安（今杭州）由宫廷设窑烧造的青瓷，故又有“旧官”和“新官”之分，前者为北宋官窑，后者为南宋官窑。官窑是在宋大观及政和年间于汴梁所造，青瓷釉色晶莹惕透，有开裂或呈冰片状，粉青紫口铁定是其特色。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/guan-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/guan-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/guan-02.jpg'),
            // 此图片为占位图片
            require('../../assets/FirstLevel/FamousCeramic/ge-03.jpg'),
          ]
        },
        // 哥窑信息
        {
          title: "哥",
          text: "“哥窑”名列宋代五大名窑，在陶瓷史上有举足轻重的地位。哥窑胎多紫黑色、铁黑色、也有黄褐色。釉为失透的乳浊釉，釉面泛一层酥光，釉色以炒米黄、灰青多见，釉面大小纹片结合。经染色后大纹片呈深褐色，小纹片为黄褐色，也称‘金丝铁线’“墨纹梅花片”“叶脉纹”‘文武片’等。这是传世哥窑的主要特征之一。器形有各式瓶、炉、尊、洗及碗、盆、碟等。多见仿古造型，底足制作不十分规整，釉面常见缩釉和棕眼。造型有各式瓶、炉、洗、盘、罐等。论胎有厚薄之分，其胎质有瓷胎和砂胎两种，胎色有黑灰、深灰、浅灰、土黄多种色调，釉色也有粉青、月白、油灰、青黄各色。从时间上讲，这里应有早晚之别，从产地说也有恐非一个瓷窑的作品，情况是比较复杂的。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/ge-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ge-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ge-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ge-03.jpg'),
          ]
        },
        // 磁州窑信息
        {
          title: "磁州",
          text: "磁州窑是中国传统制瓷工艺的珍品，中国古代北方最大的民窑体系，也是著名的民间瓷窑，有“南有景德，北有彭城”之说。磁州窑创烧于北宋中期，并达到鼎盛，南宋、元明清仍有延续。窑址在今河北省邯郸市峰峰矿区的彭城镇和磁县的观台镇一带，磁县宋代叫磁州，故名。磁州窑的匠师们吸收了传统的水墨画和书法艺术的技法，创造了具有水墨画风的白底黑绘装饰艺术，开启了中国瓷器彩绘装饰的先河。磁州窑是中国古代北方最大的一个民窑体系，也是著名的民间瓷窑，窑址在今河北省邯郸市峰峰矿区的彭城镇和磁县的观台镇一带，磁县宋代属磁州，故名。据考察，磁州窑创烧于北宋中期，并达到鼎盛，南宋、辽金元、明清仍继续烧制，烧造历史悠久，具有很强的生命力，流传下来的遗物也多。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/cizhou-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/cizhou-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/cizhou-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/cizhou-03.jpg'),
          ]
        },
        // 建窑信息
        {
          title: "建",
          text: "建窑的黑釉属于结晶釉的范畴，含铁量高达8% 以上。在1300多度的高温熔烧过程中，窑温的变化，使釉面产生奇特的花纹。由于宋代斗茶风尚盛行，而主烧适宜为斗茶的黑釉茶盏，亦称建盏，以水吉镇窑制品为最，北宋后期曾为宫廷烧制斗茶使用的黑釉盏，并于器底刻'进盏'、'供御'字样。建阳窑产品使用含铁高的原料做胎，因而胎色深黑坚硬，有铁胎之俗称，或名乌泥窑、黑建、乌泥等。盏内外均施黑釉，外壁釉不到底，露黑色胎。 建窑以产黑瓷而著称。唐代始创烧，到了宋代尤其是南宋为极盛时期，至清代而终。.建窑原是江南地区的民窑，北宋晚期由于“斗茶”的特殊需要，烧制了专供宫廷用的黑盏，部分茶盏底部刻印有“供御”或“进盏”字样。这种瓷器在日本被称为：天目釉。日本和韩国的茶道都非常重视此物。它的胎体厚实、坚致，色呈浅黑或紫黑，器型以碗、盏为主。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/jian-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jing-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jian-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jian-03.jpg'),
          ]
        },
        // 定窑信息
        {
          title: "定",
          text: "定窑是中国传统制瓷工艺中的珍品，宋代六大窑系之一，它是继唐代的邢窑白瓷之后兴起的一大瓷窑体系。主要产地在今河北省保定市曲阳县（原属今定州市）的涧磁村、野北村及东燕川村、西燕川村一带，因该地区唐宋时期属定州管辖，故名定窑。定窑原为民窑，北宋中后期开始烧造宫廷用瓷。创烧于唐，极盛于北宋及金，终于元，以产白瓷著称，兼烧黑釉、酱釉和绿釉瓷，文献分别称其为'黑定'、紫定和绿定'。定窑从邢窑而来，由于历史的变迁，定窑随着地域变化，新瓷土料的运用和制瓷工艺的进步。卞向和认为：定窑最大的贡献就是在中国陶瓷发展的历史上闪烁过光芒，在中国陶瓷史和世界的陶瓷发展史上留下辉煌的一页。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/ding-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ding-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ding-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/ding-03.jpg'),
          ]
        },
        // 景德镇窑信息
        {
          title: "景德镇",
          text: "景德镇窑位于江西省景德镇市。景德镇原名昌南镇，因北宋景德年间烧制的精美瓷器而称今名。景德镇窑自唐代起即烧制青瓷，至北宋时以烧制青白瓷为主。其瓷釉色白而略带青色，这种白中泛青、青中见白的色釉,为景德镇窑的新创,其色调给人以清新爽快之感。景德镇窑是中国传统窑炉之一，景德镇窑系属于宋代六大窑系之一。诞生于今江西省景德镇，故称景德镇窑，实际上由数个窑口组成。景德镇有着悠久的制瓷历史，完备的陶瓷产业体系，广泛的国际影响，是一座因瓷而生、因瓷而兴、因瓷而名的城市，也是一座“因开放而生，因开放而兴”的深度开放城市。 景德镇窑据记载始烧于唐武德(618一626)年间。建国后发现瓷窑遗址多处，以杨梅亭窑、石虎湾窑、黄泥头窑最早，均为五代时期。。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/jing-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jing-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jing-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jing-03.jpg'),
          ]
        },
        // 均窑信息
        {
          title: "均",
          text: "均窑始于唐，兴盛于北宋，地处河南禹县古均台和神 镇一带，宋时称均州，故名“均窑”，亦名“钧窑”或“钧州窑”，但在明朝因明神宗名曰“朱翊均”后均州改名为禹州。均窑所烧造的瓷器品种较多，以钧瓷最为有名。均瓷胎质细腻坚硬，较为沉重，主要色为红色和蓝色，其釉为乳浊釉，乳浊釉的好处是可以遮蔽胎色。釉中含铜，所以在高温下呈现出红色。钧窑瓷器的颜色并不是入窑前就已经确定的，而是经过高温后金属离子所呈现的，所以又有“入窑一色出窑万彩”之说，其成品色主要为玫瑰紫、海棠红、茄色紫、梅子青、深紫、米色、天蓝、胭脂红、朱砂红、葱翠青，以及窑变的各种颜色，各色错综相间，绚烂多彩，气韵非凡。",
          img: [
            require('../../assets/FirstLevel/FamousCeramic/jun-pic.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jun-01.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jun-02.jpg'),
            require('../../assets/FirstLevel/FamousCeramic/jun-03.jpg'),
          ]
        },

      ],

      // 窑导航栏列表索引
      currentIndex:0,

      // 信息列表
      title: "",
      infotext: '',
      // 默认显示第一个窑口信息
      // currentInfo:this.info[0] 
      currentInfo: []

    }
  },

  methods: {
    toView(i) {

      // 窑导航栏数组索引更新
      this.currentIndex = i;

      // 信息列表更新
      this.title = this.info[i].title;   //更新标题窑洞名称
      this.infotext = this.info[i].text; //更新当前选中的文本信息
      this.currentInfo = this.info[i];   //更新当前选中的图片信息

    }
  },
  mounted() {
    this.title = this.info[0].title;    //初始化窑洞名称
    this.infotext = this.info[0].text;  //初始化时显示第一个窑的文本
    this.currentInfo = this.info[0];    //初始化时显示的第一个图片信息
  }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.app {
  background-color: #f8fefe;
}

.tabBar {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* height: 60px; */
  height: 80px;
  /* margin-top: 20px; */
  background: #D1D1D1;
  /* position: relative; */

}

.appBar-pic {
  width: 5%;
  height: 37px;
  display: flex;
  align-items: center;
}

.appBar-pic img {
  width: 30px;
}

.appBar-content {
  width: 100%;
  /* height: 37px; */
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.appBar-content>li {
  display: flex;
  align-items: center;
  color: #413b3b;
  font-size: 15px;
}

a {
  text-decoration: none;
  color: #000000;
}

.router-link-active {
  text-decoration: none;
}

.el-row {
  margin-bottom: 20px;
  background: url('../../assets/back/My-bg.jpg');

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
}

/* 添加部分 */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: #F8FEFE; */
}

/* 内容 */
.ru {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.ru-left {
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.admire {
  font-family: HYDaSongJ;
  font-weight: 400;
  font-size: 15px;
  color: #333333;
  line-height: 30px;
}

.hx {
  border: 0.5px solid #b6afaf;
  width: 100%;
  margin-bottom: 10px;
}

.ru-tp {
  width: 100%;
  height: auto;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.ru-tp img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.ru-tp:hover img {
  width: 100%;
  height: auto;
  transform: scale(1.2); /* 放大1.2倍 */  
  transform-origin: center center;
}

.ru-right {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info {
  font-family: HYDaSongJ;
  font-weight: 400;
  font-size: 15px;
  color: #333333;
  line-height: 30px;

}

.info-text {
  font-family: Microsoft YaHei;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  line-height: 30px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ru-pic {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.one,
.two,
.three {
  width: 27%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

/* .two {
  width: 27%;
}

.three {
  width: 27%;
} */

.one img,
.two img,
.three img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}
.one:hover img,
.two:hover img,
.three:hover img{
  transform: scale(1.2); /* 放大1.2倍 */  
  transform-origin: center center;
}


/* 窑导航栏列表样式 */
 
.ceramic-item {    
  position: relative;    
  display: inline-block;    
  margin-right: 20px;     
  cursor: pointer;    
  transition: background-color 0.3s ease;   
  text-align: center;
}  
.ceramic-item.active {  
  color: #3A4B8F;   
}  
.indicator {    
  position: absolute;    
  top: -30px;     
  left: 50%;     
  transform: translateX(-50%);    
  width: 50px; 
  height: 69px;    
  background-image: url('../../assets/FirstLevel/FamousCeramic/pointer.png');   
  background-size: cover;    
  background-repeat: no-repeat;    
  transition: top 0.3s ease, opacity 0.3s ease;  
  opacity: 0;     
}    
.ceramic-item:hover .indicator {        
  opacity: 0.5;    
}       
.ceramic-item.active .indicator {     
  opacity: 1;    
  top: -76px;   
} 

/* .haha{
  width: 100%;
  height: 200px;
  background-color: #ae4646;
} */
</style>