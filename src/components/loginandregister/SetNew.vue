<template>
  <div id="setnew">
    <router-link to="FNoteGet"><span class="iconfont header">&#xe606;</span></router-link>
    <p class="s-write">设置新密码</p>
    <form action="#" method="post" name="form">
      <div class="s-password">
        <span class="iconfont">&#xe604;</span>
        <input type="text" name="s-password" placeholder="请输入新密码"/>
        <span class="iconfont s-password-open">&#xe901;</span>
      </div>
      <router-link to="/Login"><a href="" class="setingnpwd">设置新密码</a></router-link>
    </form>
    <p class="set-about">为保障您账户安全，请不要设置与邮箱密码相同的账户登录密码，谨防诈骗</p>
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

  #setnew {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:41px;
    top:68px;}
  .s-write {
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
  form div span { display:block;}
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
  .setingnpwd {  width:80%;
    height:140px;
    margin:90px auto;
    text-align:center;
    line-height:140px;
    font-size:40px;
    background-color:#fd4e4b;
    color:#ffffff;
    border-radius:5px;}
  .set-about {
    width:80%;
    line-height:80px;
    font-size:20px;
    margin:20px auto;
    color:#999;
  }
</style>
