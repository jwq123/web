<template>
  <div class="all">
   <div class="header"></div>
    <div class="img_header">
      <img src="../assets/pro_banner.jpg">
    </div>
    <div class="contain">
      <div class="top">
        <h2>代表项目</h2>
        <div class="top_img">
          <img :src="img_src">
        </div>
        <div class="left">
          <h2 v-text="font[5]">名字</h2>
          <p>
            <strong>业务板块:</strong><span v-text="font[0]"></span><br>
            <strong>所在地:</strong><span v-text="font[1]"></span><br>
            <strong>时间:</strong><span v-text="font[2]"></span><br>
            <strong>建设模式:</strong><span v-text="font[3]"></span><br>
            <strong>项目类别:</strong><span v-text="font[4]"></span><br>
          </p>
        </div>
      </div>
      <div class="footer">
        <p>
          上海江龙建设工程有限公司成立于1999年9月，民营性质，公司注册资金为6100万元，是水利水电工程总承包二级施工企业，同时还具有市政公用工程总承包二级；房屋建筑工程总承包二级资质。公司业务涉及水闸、泵站、河道整治、防汛墙、道路桥梁、围海造地、景观绿化工程等水利水电工程以及市政、房建、装饰装修等众多领域。多年来，公司始终坚持“质量第一、信誉至上、持续改进、满意增强”的质量方针，承建的数百个工程项目质量均达到优良等级，其中“中港水闸改建工程”及“东茭泾泵闸工程”被评为上海市优质结构工程；“崇明东滩启动区北沿河道整治工程”获上海市重大工程文明工地称号；“长兴岛青草沙水库周边水系调整工程2标”获上海市重大办文明工地称号；公司还承担多项上海市水务重点实事工程建设任务。通过内强素质，公司管理能力和创新能力得到提升；通过外树形象，打造出了“江龙建设”的品牌, 在上海建筑系统享有良好的声誉和较高的知名度。
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .all .header{
    width: 100%;
    height: 20px;
    background-color: #1a3e88;
  }
  .all .img_header{
    width: 100%;
    height: 220px;
    margin-bottom: 30px;
  }
  .all .img_header img{
    height: 100%;
    width: 100%;
  }
  .all .contain{
    padding:0 10px;
  }
  .all .contain .top{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .all .contain .top > h2{
    background-color: #24acff;
    text-align: center;
    color: white;
    width: 100px;
    height: 40px;
    line-height: 40px;
  }
  .all .contain .top .top_img{
    width: 650px;
    height: auto;
    float: left;
    padding: 20px;
    box-sizing: border-box;
  }
  .all .contain .top .left{
    width: 300px;
    float: right;
    padding: 30px;
    box-sizing: border-box;
  }
  .all .contain .top .left h2{
    text-align: left;
    margin-bottom: 10px;
  }
  .all .contain .top .left  p strong{
    display: inline-block;
    margin-bottom: 5px;
    width: 150px;
  }
  .all .contain .footer{
    margin-top: 40px;
    height: auto;
  }
  .all .contain .footer p{
    line-height: 30px;
  }
</style>
<script>
  import router from '../router/index.js'
  export default{
  data() {
    return{
      img_li:[
        {src:'../static/img_li1.png',name:'民勇大楼1',title:'世界第一高楼，不解释', id:1,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li2.jpg',name:'民勇大楼2',title:'世界第一高楼，不解释', id:2,projects:'建筑类',address:'大连中山区',data:'2008,12',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li3.jpg',name:'民勇大楼3',title:'世界第一高楼，不解释', id:3,projects:'建筑类',address:'大连金州区',data:'2007,12',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li4.jpg',name:'民勇大楼4',title:'世界第一高楼，不解释', id:4,projects:'建筑类',address:'大连开发区',data:'2006,12',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li5.jpg',name:'民勇大楼5',title:'世界第一高楼，不解释', id:5,projects:'建筑类',address:'大连甘井子区',data:'2005,12',model:'EPC设计总承包',category:'建筑建设'},
        {src:'../static/img_li6.jpg',name:'民勇大楼6',title:'世界第一高楼，不解释', id:6,projects:'建筑类',address:'沈阳浑南区',data:'2004,12',model:'EPC设计总承包',category:'世界高楼建设'},
        {src:'../static/img_li7.jpg',name:'民勇大楼7',title:'世界第一高楼，不解释', id:7,projects:'建筑类',address:'沈阳和平区',data:'2003,12',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li8.jpg',name:'民勇大楼8',title:'世界第一高楼，不解释', id:8,projects:'建筑类',address:'大连大东区',data:'2002,12',model:'EPC设计总承包',category:'场馆建设'}
      ],
      another_img:[
        {src:'../static/img_li1.png',name:'民勇大楼9', title:'世界第一高楼，不解释', id:9, projects:'房产类',address:'北京',data:'2009,2',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li2.jpg',name:'民勇大楼10',title:'世界第一高楼，不解释', id:10,projects:'房产类',address:'上海',data:'2009,10',model:'EPC设计总承包',category:'地下室建设'},
        {src:'../static/img_li3.jpg',name:'民勇大楼11',title:'世界第一高楼，不解释', id:11,projects:'房产类',address:'大连',data:'2014,12',model:'EPC设计总承包',category:'场馆建设'},
        {src:'../static/img_li4.jpg',name:'民勇大楼12',title:'世界第一高楼，不解释', id:12,projects:'房产类',address:'沈阳',data:'2003,12',model:'EPC设计总承包',category:'场馆建设'},
      ],
      img_src:'',
      font:[]
    }
  },
  created:function () {
      if(this.$route.query.id<=8){
      for(var i=0;i<this.img_li.length;i++){
       if(this.img_li[i].id===this.$route.query.id)
       {
           this.img_src=this.img_li[i].src;
           this.font[0]=this.img_li[i].projects;
           this.font[1]=this.img_li[i].address;
           this.font[2]=this.img_li[i].data;
           this.font[3]=this.img_li[i].model;
           this.font[4]=this.img_li[i].category;
           this.font[5]=this.img_li[i].name;
           return
       }
      }
      }else if(this.$route.query.id>8 && this.$route.query.id<=12) {
        for (var i = 0; i < this.another_img.length; i++) {
          if (this.another_img[i].id === this.$route.query.id)
          {
            this.img_src=this.another_img[i].src;
            this.font[0] = this.another_img[i].projects;
            this.font[1] = this.another_img[i].address;
            this.font[2] = this.another_img[i].data;
            this.font[3] = this.another_img[i].model;
            this.font[4] = this.another_img[i].category;
            this.font[5] = this.another_img[i].name;
            return
          }
        }
      }
      }
//  console.log(this.$route.query.id)
  }
</script>
