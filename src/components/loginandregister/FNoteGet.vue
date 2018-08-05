<template>
  <div id="fnoteget">
    <router-link to="/ForgitPwd"><span class="iconfont header">&#xe606;</span></router-link>
    <p class="f-inentifying-code">验证码已发送至{{tel}}
      <span class="iconfont">&#xe610;</span>
    </p>
    <p class="f-noteget-p">请输入6位数字验证码
      <span></span>
    </p>
    <div class="f-get">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <router-link to="/SetNew"><a href="" class="f-nexting">下一步</a></router-link><!--链接首页-->
    <a class="f-safety-problem">收不到验证码？</a>
  </div>
</template>

<script>
  export default {
    name: "NoteGet.vue"
  }
</script>

<style scoped>
  #fnoteget {  display: flex;
    flex-direction:column;
    justify-content:space-between;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:41px;
    top:68px;}
  .f-inentifying-code {
    width:80%;
    font-size: 40px;
    font-weight: bold;
    margin:200px auto 30px auto;
    text-align: left;
  }
  .f-noteget-p {width:80%;
    line-height:90px;
    margin:30px auto;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    font-size: 20px;
  }
  .f-noteget-p span {
    border:1px solid #fd4e4b;
    display: block;
    width:600px;
    height:54px;
    border-radius: 3px;
    margin-left:20px;
  }
  .f-get { width:80%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:100px auto;
  }
  .f-get div {
    width:108px;
    height:108px;
    border-bottom: 1px solid #ccc;
  }
  .f-nexting {  width:80%;
    height:140px;
    margin:84px auto;
    text-align:center;
    line-height:140px;
    font-size:40px;
    background-color:#fd4e4b;
    color:#ffffff;
    border-radius:5px;}
  .f-safety-problem { position:absolute;
    left:41px;
    bottom:68px;}
</style>
