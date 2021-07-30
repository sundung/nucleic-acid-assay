<template>
  <div class="order-code">
      <div class="title">输入预约码</div>
      <textarea class="code" v-model='text'></textarea>
      <div class="btn-group">
          <div >查询结果</div>
          <div @click="()=>{$router.go(-1)}">返回</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            text:'输入预约码'
        }
    }
}
</script>

<style lang='less' scoped>
    .order-code {
        // margin-bottom:0.3rem;
        .title {
            font-size: 0.14rem;
            color: #000;
            width: 100vw;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            padding-top: 0.3rem;
        }
        .code {
            position:absolute;
            top: 1.3rem;
            left: 50%;
            transform:translateX(-50%);
            font-size: 0.14rem;
            width: 2.5rem;
            height: 0.7rem;
            background-color: #fff;
            border-radius: 0.3rem;
            text-align: center;
            line-height: 0.7rem;
            outline:none;
            resize:none;
        }
        .btn-group {
            margin-top:2rem;
            height: 2rem;
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
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
                &:nth-child(2){
                margin-top: 0.4rem;
                }
            }
            
        }
    }
</style>