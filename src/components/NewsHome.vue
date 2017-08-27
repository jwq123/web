<template>
<div class="all">
<div class="header"></div>
  <div class="img_header">
    <img src="../assets/stecnews.png">
  </div>
  <div class="contain">
  <div class="theheader" @click="click(list_news[0].id)">
    <div class="img"><img :src="list_news[0].src"></div>
    <div class="font" >
      <h1 v-text="list_news[0].title"></h1>
      <p v-text="list_news[0].contain"></p>
      <div class="data">
        <span v-text="list_news[0].data"></span>
        <span>
         <img src="../assets/more.png">
        </span>
      </div>
    </div>
  </div>
    <div class="newsList">
    <ul>
     <li @click="click(value.id)" v-for="value in  list_news" v-if="value.id>1">
      <div class="newsInsider">
        <h2 v-text="value.title"></h2>
          <p v-text="value.contain"></p>
        </div>
        <div class="more">
          <span v-text="value.data"></span>
          <span>
         <img src="../assets/more.png">
        </span>
        </div>
     </li>
    </ul>
    </div>
  </div>
  <Page @accept="accept"></Page>
</div>
</template>
<script>
  import router from '../router/index'
  import Page from  "../components/Page.vue"
 export default{
     data(){
         return{
         list_news:[
             {id:1,title:'大连市委书记来大连智趣指导工作',data:'2012,3',contain:'湖南省委常委、长沙市委书记胡衡华，长沙市委副书记、市长陈文浩及长沙市总工会等，代表新的长沙市委班子和长沙市民，慰问高温中仍奋战在一线的建设者，“检阅”隧道股份建设团队',src:'../static/news.jpg',articles:'我是文章内容'},
             {id:2,title:'大连智趣完成第三轮融资',data:'2012,4',contain:'大连智趣召开第三次融资大会，共完成20亿元的融资规模,啦啦啦啦啦拉拉阿拉啦阿拉啊啦拉拉阿拉啦啦啦拉拉阿拉阿拉啦啦啦啦拉拉阿拉阿拉阿拉啦啦了了了了了了阿拉阿拉啦啦啦拉拉',src:'../static/news.jpg',articles:'我是文章内容'},
             {id:3,title:'大连智趣完成第四轮融资',data:'2012,5',contain:'大连智趣召开第四次融资大会，共完成20亿元的融资规模,啦啦啦啦啦拉拉阿拉啦阿拉啊啦拉拉阿拉啦啦啦拉拉阿拉阿拉啦啦啦啦拉拉阿拉阿拉阿拉啦啦了了了了了了阿拉阿拉啦啦啦拉拉',src:'../static/news.jpg',articles:'我是文章内容'},
             {id:4,title:'大连智趣完成第五轮融资',data:'2012,6',contain:'大连智趣召开第五次融资大会，共完成20亿元的融资规模,啦啦啦啦啦拉拉阿拉啦阿拉啊啦拉拉阿拉啦啦啦拉拉阿拉阿拉啦啦啦啦拉拉阿拉阿拉阿拉啦啦了了了了了了阿拉阿拉啦啦啦拉拉',src:'../static/news.jpg',articles:'我是文章内容'}
         ],
          pageNumber:''
         }
     },
   watch:{
    pageNumber:function () {
      alert(this.pageNumber)
    }
   },
   components:{
         Page
   },
    methods:{
      accept:function (page) {
         this.pageNumber=page
      },
         click:function (theid) {
           router.push({path:'/newsdetail',query:{id:theid}})
         }
    }
 }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  .all{
    width: 100%;
    height: auto;
    position: relative;
  }
  .all .header{
    width: 100%;
    height: 20px;
    background-color: #1a3e88;
  }
  .all .contain{
    width: 100%;
    height: auto;
    padding: 0 15px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .all  .img_header{
    vertical-align: middle;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .all  .img_header > img{
    width: 100%;
  }
  .all .contain .theheader{
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 20px;
    border-bottom: 1px dashed #717171;
  }
  .all .contain .theheader .img{
    width: 55%;
    float: left;
  }
  .all .contain .theheader .font{
    width: 45%;
    float: right;
    overflow: hidden;
  }
  .all .contain .theheader .font p{
    line-height: 25px;
  }
  .all .contain .theheader .font .data{
    float: right;
  }
  .all .contain .theheader .font .data span{
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
  }
  .all .contain .newsList {
    width: 100%;
    margin-bottom: 50px;
  }
  .all .contain .newsList ul{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .all .contain .newsList ul li{
    cursor: pointer;
    list-style: none;
    border-bottom: 1px dashed #717171;
    position: relative;
    width: 100%;
    padding: 30px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .all .contain .newsList ul li:hover{
    background-color: #dbdbdb;
    opacity: 1;
  }
  .all .contain .newsList ul li .newsInsider{
    width: 85%;
  }
  .all .contain .newsList ul li .more{
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .all .contain .newsList ul li .more span{
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
  }
  .all .contain .newsList ul li h2{
    margin-bottom: 10px;
  }
  .all .contain .newsList ul p{
    text-indent: 25px;
  }
</style>
