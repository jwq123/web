<template>
  <div class="all">
    <div class="header"></div>
    <div class="img_header">
      <img src="../assets/stecnews.png">
    </div>
    <div class="contain">
      <div class="top">
        <h1 v-text="newsdetail[0]"></h1>
        <h3 v-text="newsdetail[1]"></h3>
      </div>
      <div class="footer">
      <div  class="theimg">  <img :src="newsdetail[2]"></div>
        <p v-text="newsdetail[3]">
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
  .all  .img_header{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .all  .img_header > img{
    width: 100%;
  }
  .all .contain{
    width: 100%;
    height: auto;
  }
  .all .contain .top{
    width: 100%;
    height: auto;
  }
  .all .contain .top h1{
    width: 100%;
    text-align: center;
  }
  .all .contain .top h3{
    width: 100%;
    text-align: center;
  }
  .all .contain .footer{
    width: 100%;
    height: auto;
  }
  .all .contain .footer img{
    display: block;
    margin: 0 auto;
  }
  .all .contain .footer p{
    width: 100%;
    height: auto;
    line-height: 25px;
    padding:0 70px;
    color: #888888;
  }
</style>
<script>
  export default{
      data() {
          return{
            list_news:[
              {id:1,title:'大连市委书记来大连智趣指导工作',data:'2012.3',contain:'湖南省委常委、长沙市委书记胡衡华，长沙市委副书记、市长陈文浩及长沙市总工会等，代表新的长沙市委班子和长沙市民，慰问高温中仍奋战在一线的建设者，“检阅”隧道股份建设团队',src:'../static/news.jpg',article:'我是文章内容'},
              {id:2,title:'大连智趣完成第三轮融资',data:'2012.4',contain:'大连智趣召开第三次融资大会，共完成20亿元的融资规模,啦啦啦啦啦拉拉阿拉啦阿拉啊啦拉拉阿拉啦啦啦拉拉阿拉阿拉啦啦啦啦拉拉阿拉阿拉阿拉啦啦了了了了了了阿拉阿拉啦啦啦拉拉',src:'../static/news.jpg',article:'我是文章内容'},
              {id:3,title:'大连智趣完成第四轮融资',data:'2012.5',contain:'大连智趣召开第四次融资大会，共完成20亿元的融资规模,啦啦啦啦啦拉拉阿拉啦阿拉啊啦拉拉阿拉啦啦啦拉拉阿拉阿拉啦啦啦啦拉拉阿拉阿拉阿拉啦啦了了了了了了阿拉阿拉啦啦啦拉拉',src:'../static/news.jpg',article:'我是文章内容'},
              {id:4,title:'大连智趣完成第五轮融资',data:'2012.6',contain:'大连智趣召开第五次融资大会，共完成20亿元的融资规模,啦啦啦啦啦拉拉阿拉啦阿拉啊啦拉拉阿拉啦啦啦拉拉阿拉阿拉啦啦啦啦拉拉阿拉阿拉阿拉啦啦了了了了了了阿拉阿拉啦啦啦拉拉',src:'../static/news.jpg',article:'我是文章内容'}
            ],
            newsdetail:[]
          }
      },
    methods:{

    },
    created:function () {
         for(var i=0;i<this.list_news.length;i++){
             if(this.list_news[i].id===this.$route.query.id){
               this.newsdetail[0]=this.list_news[i].title;
               this.newsdetail[1]=this.list_news[i].data;
               this.newsdetail[2]=this.list_news[i].src;
               this.newsdetail[3]=this.list_news[i].article;
               return
             }
         }
//      console.log(this.$route.query.id)
    }
  }
</script>
