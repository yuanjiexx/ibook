<template>
  <div id="productdetails">
    <header>
      <span class="iconfont">&#xe615;</span>
      <a>商品</a>
      <a>评论</a>
      <a>详情</a>
      <a>推荐</a>
      <span class="iconfont">&#xe60e;</span>
      <span class="iconfont">&#xe66f;</span>
    </header>
    <main>
      <div class="p-box">
        <ul>
          <!--<li v-for="a,index of kiterunnerO"><img src="{{a[index].src}}"/></li>-->
        </ul>
      </div>
      <p>
        <span>{{ddzy}}</span>
        {{bookname}}
      </p>
      <p>{{short}}</p>
      <p>{{sale}}</p>
      <h2>{{price}}
        <span>{{discont}}</span>
      </h2>
      <p>{{money}}</p>
    </main>
  </div>
</template>

<script>
    export default {
        name: "ProductDetails",
        data(){
          return {
            ddzy : '当当自营',
            bookname : '追风筝的人（2018年新版）',
            short : '（为你，千千万万遍！快乐大本营高圆圆感动推荐，朗读者张一山深情诵读，窦靖童创作灵感的来源，奥巴马送给女儿的新年礼物。）',
            sale : '此商品不参加促销，更多文艺每满150减50请点',
            price : '￥24.8',
            discont : '6.89折',
            money : '原价：￥36.00',
            kiterunnerO : [
              {url: require('@/assets/img/p-d-1.png')},
              {url: require('@/assets/img/p-d-1.png')},
              {url: require('@/assets/img/p-d-1.png')},
              {url: require('@/assets/img/p-d-1.png')},
            ],

          }
        }
    }
</script>

<style scoped>
#productdetails {
  display: flex;
  flex-direction:column;
  justify-content:left;
  font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";
  margin:0;
  padding:0;
}
a { text-decoration: none;
  display:block;}
header {
  display:flex;
  justify-content: space-between;
  width:90%;
  margin:0 auto;
  line-height: 2rem;
}
  header a {
    font-size:1.2rem;
  }
  .mouseon {
    color:#ff8566;
    border-bottom:1px solid #ff8566;
  }

</style>
