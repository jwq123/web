<template>
  <div class="footer">
  <div class="sign">
  <div class="top">
  <span >联系我们</span>
  <router-link to="/site/aboutus"> <span class="theone" >关于我们</span></router-link>
  <span class="theone">加入江龙</span>
  <span class="theone">版权隐私</span>
  </div>
  </div>
  <p style="text-align: right;margin:10px 0;padding:0 30px">江龙股份 版权所有 沪ICP备15043468号</p>
  </div>
</template>
<style scoped>
    .footer{
    margin-top: 20px;
    width: 100%;
    height:auto;
  }
    .footer .sign{
    width: 100%;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    padding:5px 30px ;
    border-bottom: 1px solid #888888;
  }
    .footer .sign .top{
    float: right;
    font-size: 13px;
  }
   .footer .sign .top span{
    cursor: pointer;
    display: inline-block;
    margin-left: 3px;
    color: #888888;
    position: relative;
  }
   .footer .sign .top span:hover{
    color: deepskyblue;
  }
    .footer .sign .top .theone::before{
    content: '';
    width: 1px;
    top:50%;
    margin-top: -7px;
    position: absolute;
    height: 14px;
    left: -3.5px;
    background-color: #3f3f3f;
  }
</style>
