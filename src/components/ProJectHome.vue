<template>
  <div class="all">
    <div class="header">
      <img src="../assets/representativeproject_banner.jpg">
    </div>
    <div class="contain">
      <div class="on_list">
        <ul>
          <li @click="click(key)" v-for="(value,key) in liData" :style="value.colorStyle"><span v-text="value.name"></span></li>
        </ul>
      </div>
      <div class="img_li">
        <ul>
          <li v-for="(value,key) in  img_li">
            <div class="theimg"><router-link :to="{path:'/detail',query:{id:value.id}}"><img :src="value.src"></router-link></div>
            <h4 v-text="value.name" style="height: 25px;line-height: 25px;border-bottom: 1px solid  #919191"></h4>
            <p v-text="value.title" style="color: #919191;margin-top: 5px"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .all{
    width: 100%;
    height: auto;
  }
  .all .header{
    margin-bottom: 50px;
    width: 100%;
    height: 220px;
  }
  .all .header img{
    height: 100%;
    width: 100%;
  }
  .all .contain{
    width: 100%;
    height: auto;
    padding:10px 20px ;
    box-sizing: border-box;
  }
  .all .contain .on_list{
    height: 45px;
    margin-bottom: 20px;
  }
  .all .contain .on_list ul{
    overflow: hidden;
    height: 100%;
  }
  .all .contain .on_list ul li span{
    display: block;
    text-align: center;
    line-height: 45px;
  }
  .all .contain .img_li{
    width: 100%;
    height: auto;
  }
  .all .contain .img_li ul{
    overflow: hidden;
    width: 100%;
    height: auto;
  }
  .all .contain .img_li ul li{
    float: left;
    width: 25%;
    height: 300px;
  }
  .all .contain .img_li ul li .theimg{
    width: 90%;
    height: 200px;
  }
  .all .contain .img_li ul li .theimg img{
    height: 100%;
    width: 100%;
  }
  .all .contain .img_li ul li .theimg  h4{
    height: 25px;
    color: black;
  }
</style>
<script>
  export default{
    data() {
      return {
        another_img:[
          {src:'../static/img_li1.png',name:'民勇大楼9', title:'世界第一高楼，不解释', id:9, projects:'房产类',address:'北京',data:'2009,2',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li2.jpg',name:'民勇大楼10',title:'世界第一高楼，不解释', id:10,projects:'房产类',address:'上海',data:'2009,10',model:'EPC设计总承包',category:'地下室建设'},
          {src:'../static/img_li3.jpg',name:'民勇大楼11',title:'世界第一高楼，不解释', id:11,projects:'房产类',address:'大连',data:'2014,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li4.jpg',name:'民勇大楼12',title:'世界第一高楼，不解释', id:12,projects:'房产类',address:'沈阳',data:'2003,12',model:'EPC设计总承包',category:'场馆建设'},
        ],
        theimg_li:[
          {src:'../static/img_li1.png',name:'民勇大楼1',title:'世界第一高楼，不解释', id:1,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li2.jpg',name:'民勇大楼2',title:'世界第一高楼，不解释', id:2,projects:'建筑类',address:'大连中山区',data:'2008,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li3.jpg',name:'民勇大楼3',title:'世界第一高楼，不解释', id:3,projects:'建筑类',address:'大连金州区',data:'2007,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li4.jpg',name:'民勇大楼4',title:'世界第一高楼，不解释', id:4,projects:'建筑类',address:'大连开发区',data:'2006,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li5.jpg',name:'民勇大楼5',title:'世界第一高楼，不解释', id:5,projects:'建筑类',address:'大连甘井子区',data:'2005,12',model:'EPC设计总承包',category:'建筑建设'},
          {src:'../static/img_li6.jpg',name:'民勇大楼6',title:'世界第一高楼，不解释', id:6,projects:'建筑类',address:'沈阳浑南区',data:'2004,12',model:'EPC设计总承包',category:'世界高楼建设'},
          {src:'../static/img_li7.jpg',name:'民勇大楼7',title:'世界第一高楼，不解释', id:7,projects:'建筑类',address:'沈阳和平区',data:'2003,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li8.jpg',name:'民勇大楼8',title:'世界第一高楼，不解释', id:8,projects:'建筑类',address:'大连大东区',data:'2002,12',model:'EPC设计总承包',category:'场馆建设'}
        ],
        img_li:[
          {src:'../static/img_li1.png',name:'民勇大楼1',title:'世界第一高楼，不解释', id:1,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li2.jpg',name:'民勇大楼2',title:'世界第一高楼，不解释', id:2,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li3.jpg',name:'民勇大楼3',title:'世界第一高楼，不解释', id:3,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li4.jpg',name:'民勇大楼4',title:'世界第一高楼，不解释', id:4,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li5.jpg',name:'民勇大楼5',title:'世界第一高楼，不解释', id:5,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li6.jpg',name:'民勇大楼6',title:'世界第一高楼，不解释', id:6,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li7.jpg',name:'民勇大楼7',title:'世界第一高楼，不解释', id:7,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'},
          {src:'../static/img_li8.jpg',name:'民勇大楼8',title:'世界第一高楼，不解释', id:8,projects:'建筑类',address:'大连沙河口区',data:'2009,12',model:'EPC设计总承包',category:'场馆建设'}
        ],
        liData:[{name:'隧道',colorStyle:this.normal_style()},{name:'轨道交通',colorStyle:this.normal_style()},{name:'能源',colorStyle:this.normal_style()},{name:'水务',colorStyle:this.normal_style()},{name:'地下空间',colorStyle:this.normal_style()}],
      }
    },
    methods: {
      normal_style:function () {
        return{
          float: 'left',
          height: '100%',
          width: '20%',
          listStyle: 'none',
          border:'1px solid  gainsboro',
        }
      },
      special_style:function () {
        return{
          float: 'left',
          height: '100%',
          width: '20%',
          listStyle: 'none',
          border:'1px solid  gainsboro',
          backgroundColor:'#24acff'
        }
      },
      click:function (key) {
        for(var i=0;i<this.liData.length;i++){
          this.liData[i].colorStyle=this.normal_style()
        }
        this.liData[key].colorStyle=this.special_style();
        if(key===0){
          this.img_li=this.theimg_li
        }else if(key===1){
          this.img_li=this.another_img
        }
      }
    }
  }
</script>
