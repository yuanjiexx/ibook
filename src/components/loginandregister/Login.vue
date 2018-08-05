<template>
  <div id="login">
    <router-link to=""><span class="iconfont header">&#xe606;</span></router-link><!--跳转至个人中心-->
    <div class="login-des">
      <router-link to="/Login"><a href="" class="login-login">账号密码登录</a></router-link>
      <router-link to="/Note"><a href="">短信快捷登陆</a></router-link>
    </div>
    <form action="#" method="post" name="form">
      <div class="login-user">
        <span class="iconfont">&#xe658;</span>
        <input type="text" name="tel" placeholder="请输入手机号/邮箱/昵称"/>
        <span class="iconfont login-user-clear">&#xe605;</span>
        <span class="iconfont login-user-more">&#xe695;</span>
      </div>
      <div class="login-password">
        <span class="iconfont">&#xe604;</span>
        <input type="text" name="password" placeholder="请输入密码"/>
        <span class="iconfont login-password-close">&#xe625;</span>
        <span class="iconfont login-password-open">&#xe901;</span>
      </div>
      <router-link to=""><a href="" class="loaging">登录</a></router-link><!--成功则链接主页-->
    </form>
    <div class="login-link">
      <router-link to="/ForgitPwd"><a href="" class="forget-parseword">忘记密码？</a></router-link><!--点击链接忘记密码-->
      <router-link to="/Register"><a href="" class="now-enroll">立即注册</a></router-link><!--点击链接注册页-->
    </div>
    <div class="login-other">
      <span class="iconfont login-other-qq">&#xe65e;</span>
      <span class="iconfont login-other-zfb">&#xe64a;</span>
      <span class="iconfont login-other-wb">&#xe73c;</span>
      <span class="iconfont login-other-wx">&#xe61b;</span>
    </div>
    <a class="safety-problem">安全问题</a>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #login {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:41px;
    top:68px;}
  .login-des {  width:80%;
    margin:200px auto 0 auto;
    height:200px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom:1px solid #ccc;}
  .login-des a {  display:block;
    height:200px;
    line-height:200px;
    font-size:80px;
    color:#3c3c3c;}
  .login-login {
    font-weight: bold;
    border-bottom:2px solid #000000;
    color:#000000;
  }
  form input {
    border:none;
    height:196px;
    font-size: 20px;
  }
  form div {  width:80%;
    height:204px;
    line-height:196px;
    font-size:30px;
    border-bottom:1px solid #ccc;
    margin:0 auto;
    text-align: left;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .loaging {  width:80%;
    height:140px;
    margin:90px auto;
    text-align:center;
    line-height:140px;
    font-size:40px;
    background-color:#f7a9b2;
    color:#ffffff;
    border-radius:5px;}
  .login-link { display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:80%;
    margin:0 auto;
    font-size: 30px;
  }
  .login-link a { color:#f3344a;}
  .login-other {  position:absolute;
    left:10%;
    bottom:400px;
    width:80%;
    margin:0 auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font-size:100px;
  }
  .login-other span { margin:0 1.2rem;}
  .login-other-qq { color:#98d4f7;}
  .login-other-zfb { color:#a3baef;}
  .login-other-wb { color:#ff999b;}
  .login-other-wx { color:#9adca3;}
  .safety-problem { position:absolute;
    left:41px;
    bottom:68px;}
</style>
