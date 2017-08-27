<template>
  <div class="header">
    <div class="theImg">
      <a href="/">
        <img src="../assets/jianglongname.jpg" >
      </a>
    </div>
    <div class="rightFont">
      <p>
        <span>城建城市梦想 </span>
        <span>建筑美好生活</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
  .header{
    width:100% ;
    box-sizing: border-box;
    padding:20px 0 ;
    height: 97px;
    border-bottom: 2px solid  #1a3e88;
  }
  .header  .theImg {
    float: left;
    width: 173px;
    height: 100%;
  }
  .header  .theImg img{
    height: 100%;
    width: 100%;
  }
  .header .rightFont{
    float: right;
    height: 100%;
    position: relative;
  }
  .header .rightFont p{
    position: absolute;
    width: 260px;
    bottom: 0;
    right: 0;
  }
  .header .rightFont p span{
    margin-right: 10px;
    letter-spacing: 1px;
    font-size: 16px;
    color:gray;
  }
</style>
