<template>
  <div class="loop">
    <Carousel autoplay>
      <Carousel-item  v-for="value  in img" >
        <div class="demo-carousel"><img :src="value.srcimg"></div>
      </Carousel-item>
    </Carousel>
    <div class="theheader">
     <span>信息展示</span>
    </div>
    <div class="show_img">
    <div :class="value.name" v-for="(value,key) in infor" @mouseenter="mouse_in_action(key)"  :style="value.style" :id="value.id">
        <div class="layout-area" style="height: 100%;">
            <a><img style="height: 100%" :src="value.src"></a>
        </div>
    </div>
    </div>
    <div class="footer">
      <div class="left" style="width: 15px;height: 25px" @click="theleft">
        <img src="../assets/left.png" style="width:100%;height: 100%">
      </div>
      <div class="thefooter" :style="thefooter">
        <div class="thefooter_one"  :style="value.style"  v-for="value in footerImg">
       <a>
          <div style="height: 100%;width: 100%">
            <img :src="value.src">
          </div>
       </a>
          <div class="display_style " :style="value.colorStyle">
            <span class="span_one" v-text="value.font[0]">ENERGY</span>
            <span class="span_two" v-text="value.font[1]">能源</span>
          </div>
        </div>
      </div>
      <div class="right" style="width: 15px;height: 25px" @click="theright">
        <img src="../assets/right.png" style="width: 100%;height:100%">
      </div>
    </div>
  </div>
</template>
<style>
.loop .theheader{
  width: 100%;
  height: 50px;
}
.loop .theheader span{
  line-height: 50px;
  font-size: 20px;
  font-weight:bolder;
}
.loop  .show_img{
  width:100%;
  margin-bottom: 30px;
  position: relative;
  height: 200px;
  clear: both;
  overflow: hidden;
}
.loop  .show_img .picitem p {
  font-size: 12px;
  line-height: 24px;
  color: #727272;
}
.loop  .show_img .picitem p img{
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.footer{
  display: block;
  text-align: start;
  position: relative;
  top: auto;
  width: 100%;
  height: 110px;
  margin: 0;
  overflow: hidden;
  }
.footer .left{
  text-align: center;
  left: 10px;
  position: absolute;
  top:50%;
  margin-top: -12.5px;
  cursor: pointer;
  z-index: 10;
}
.footer .right{
  position: absolute;
  top:50%;
  margin-top: -12.5px;
  right: 10px;
}
.footer .thefooter  .thefooter_one img{
  height: 100%;
  width: 100%;
}
.footer .thefooter .thefooter_one .display_style{
    position: absolute;
    top: 0;right: 0;width:
    124px;height: 110px;
    background-color: aqua;opacity: 0.7
  }
.footer .thefooter .thefooter_one .display_style .span_two{
  display: block;
  font-size: 10px;
  right: 10px;
  bottom: 10px;
  position: absolute;
  color: white;
}
.footer .thefooter .thefooter_one .display_style .span_one{
  display: block;
  font-size: 10px;
  right: 10px;
  bottom: 30px;
  position: absolute;
  color: white;
}
</style>
<script>
  import Velocity from 'velocity-animate'
  export default {
    data () {
      return {
        img: [
          {srcimg: '../static/indexbanner2.jpg'},
          {srcimg: '../static/indexbanner3.jpg'},
          {srcimg: '../static/indexbanner4.jpg'},
          {srcimg: '../static/indexbanner5.jpg'},
          {srcimg: '../static/indexbanner4.jpg'},
          {srcimg: '../static/indexbanner5.jpg'}
        ],
        infor: [
          {src: '../static/index22.jpg',  style: this.active_style()},
          {src: '../static/index23.jpg',  style: this.normal_style()},
          {src: '../static/index41.jpg',  style: this.normal_style()},
//          {src: '../static/index21.jpg',  style: this.normal_style()},

        ],
        footerImg:[
          {src: '../static/footer3.png',  style:this.footer_style() , colorStyle:{backgroundColor:'#2b85e4'} ,font: ['ENGLISH','绿色能源'] },
          {src: '../static/footer4.png',  style:this.footer_style() , colorStyle:{backgroundColor:'#e25431'} ,font: ['ENGLISH','道路桥梁']},
          {src: '../static/footer5.png',  style:this.footer_style() , colorStyle:{backgroundColor:'#5255dc'} ,font: ['ENGLISH','水务']},
          {src: '../static/footer6.png',  style:this.special_style(), colorStyle:{backgroundColor:'orange'}  ,font: ['ENGLISH','地下空间']},
          {src: '../static/footer7.png',  style:this.footer_style() , colorStyle:{backgroundColor:'#e25431'} ,font: ['ENGLISH','建筑']},
          {src: '../static/footer8.png',  style:this.footer_style() , colorStyle:{backgroundColor:'#5255dc'}, font: ['ENGLISH','重大装备']},
          {src: '../static/footer7.png',  style:this.footer_style() , colorStyle:{backgroundColor:'orange'} , font: ['ENGLISH','材料']},
          {src: '../static/footer8.png',  style:this.special_style(), colorStyle:{backgroundColor:'blue'}   , font: ['ENGLISH','轨道交通']}
        ],
        thefooter:{
                    transition: 'all 1s',
                    textAlign: 'left',
                    float:'none',
                    position: 'absolute',
                    top: 0,
                    right: 'auto',
                    bottom: 'auto',
                    left: '26px',
                    margin: 0,
                    width: '6356px',
                    height: '110px',
                    zIndex: 'auto'
        }
      }
    },
    methods: {

        mouse_in_action: function(key) {
            var self = this;
            for(var i = 0;i<self.infor.length;i++) {
                if(i==key) {
                    self.infor[i].style = self.active_style();
                }
                else {
                    self.infor[i].style = self .normal_style();
                }
            }
        },
       theleft:function () {
         this.thefooter.left='26px'
       },
      theright:function () {
        this.thefooter.left='-1084px'
      },
      active_style: function () {
        return {
          width: '40%',
          height: '200px',
          float: 'left',
          transition: 'all 0.3s'
        };
      },
      footer_style:function () {
        return{
        float: 'left',
        width: '267px',
        height: '100%',
        margin: '0 5px',
        position: 'relative'
        }
      },
      special_style:function () {
         return{
        float: 'left',
        width: '248px',
        height: '100%',
        marginLeft:'5px',
        marginRight: '27px',
        position: 'relative'
        }
      },
      normal_style: function () {
        return {
          width: '30%',
          height: '200px',
          float: 'left',
          transition: 'all 0.3s'
        };
      }
    }
}
</script>
