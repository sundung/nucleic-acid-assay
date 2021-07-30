<template>
  <div class="home">
    <!-- 图片位置 -->
    <div class="bgc"></div>
    <!-- 三个button -->
    <div class="button-group">
      <div @click="goToNucleicResult">查询核酸结果</div>
      <div @click="goToOrderCode">查询预约</div>
      <div @click="goToOrderForm">预约核酸检测</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return {

    }
  },
  methods:{
    // 跳转到核酸检查结果页面 
    goToNucleicResult(){
      this.$router.push ({
        path:'/nucleicResult'
        })
    },
    // 跳转到核酸检测页面
    goToOrderForm(){
      this.$router.push ({
         path:'/orderForm'
      })
    },
    // 跳转至预约码页面
    goToOrderCode(){
      this.$router.push ({
         path:'/orderCode'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .home {
    // 背景图片
    .bgc {
      height: 2.35rem;
      width: 100%;
      background: url('../assets/img/bgc.png');
      background-size: 100% 100%;
    }
    .button-group {
      margin-top:2rem;
      height: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      div {
        width: 1.8rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.2rem;
        color: rgba(0, 159, 215, 100);
        border-radius: 0.25rem;
        background-color: #fff;
      }
    }
  }
</style>
