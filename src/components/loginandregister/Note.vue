<template>
  <div id="note">
    <router-link to="/Login"><span class="iconfont header">&#xe606;</span></router-link>
    <div class="note-des">
      <router-link to="/Login"><a href="" class="login-login">账号密码登录</a></router-link>
      <a href="" class="note-note">短信快捷登陆</a>
    </div>
    <form action="#" method="post" name="form">
      <div class="note-tel">
        <span class="iconfont">&#xe613;</span>
        <input type="text" name="tel" placeholder="请输入手机号"/>
      </div>
      <router-link to="/NoteGet"><a href="" class="geting">获取验证码</a></router-link><!--成功则链接主页-->
    </form>
    <div class="note-link">
      <router-link to="/ForgitPwd"><a href="" class="forget-parseword">忘记密码？</a></router-link><!--点击链接忘记密码-->
      <router-link to="/Register"><a href="" class="now-enroll">立即注册</a></router-link><!--点击链接注册页-->
    </div>
    <div class="note-other">
      <span class="iconfont note-other-qq">&#xe65e;</span>
      <span class="iconfont note-other-zfb">&#xe64a;</span>
      <span class="iconfont note-other-wb">&#xe73c;</span>
      <span class="iconfont note-other-wx">&#xe73b;</span>
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

  #note {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:41px;
    top:68px;}
  .note-des {  width:80%;
    margin:200px auto 0 auto;
    height:200px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom:1px solid #ccc;}
  .note-des a {  display:block;
    height:200px;
    line-height:200px;
    font-size:80px;
    color:#3c3c3c;}
  .note-note {
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
  }
  .geting {  width:80%;
    height:140px;
    margin:90px auto;
    text-align:center;
    line-height:140px;
    font-size:40px;
    background-color:#fd4e4b;
    color:#ffffff;
    border-radius:5px;}
  .note-link { display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:80%;
    margin:0 auto;}
  .note-link a { color:#f3344a;}
  .note-other {  position:absolute;
    left:10%;
    bottom:400px;
    width:80%;
    margin:0 auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font-size:100px;
  }
  .note-other span { margin:0 1.2rem;}
  .note-other-qq { color:#98d4f7;}
  .note-other-zfb { color:#a3baef;}
  .note-other-wb { color:#ff999b;}
  .note-other-wx { color:#9adca3;}
  .safety-problem { position:absolute;
    left:41px;
    bottom:68px;}
</style>
