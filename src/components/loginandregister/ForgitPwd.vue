<template>
  <div id="forgitpwd">
    <router-link to="/Login"><span class="iconfont header">&#xe606;</span></router-link>
    <p class="f-write">请输入要找回的账号</p>
    <form action="#" method="post" name="form">
      <div class="note-tel">
        <span class="iconfont">&#xe613;</span>
        <input type="text" name="tel" placeholder="请输入手机号"/>
      </div>
      <router-link to="/FNoteGet"><a href="" class="f-geting">获取验证码</a></router-link>
    </form>
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

  #forgitpwd {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:41px;
    top:68px;}
  .f-write {
    width:80%;
    font-size: 40px;
    font-weight: bold;
    margin:200px auto;
    text-align: left;
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
  .f-geting {  width:80%;
    height:140px;
    margin:90px auto;
    text-align:center;
    line-height:140px;
    font-size:40px;
    background-color:#fd4e4b;
    color:#ffffff;
    border-radius:5px;}
</style>
