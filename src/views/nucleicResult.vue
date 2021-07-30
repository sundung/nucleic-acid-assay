<template>
  <div class="code-result">
      <div class="title">预约码:</div>
      <div class="result">{{result}}</div>
      <div class="form">
          <div class="name">
              <span>姓名</span>
              <span>{{name}}</span>
          </div>
          <div class="age">
              <span>年龄</span>
              <span>{{age}}</span>
          </div>
          <div class="address">
              <span>地址</span>
              <span>{{address}}</span>
          </div>
          <div class="email">
              <span>邮箱</span>
              <span>{{email}}</span>
          </div>
      </div>
      <!-- 预约时间 -->
      <div class="orderTime">
          <div class="timeTitle">检测结果</div>
          <div class="nucleicResult">{{nucleicResult}}</div>
      </div>
      <div class="btn-group">
          <div @click="reQuery">再次查询</div>
          <div @click="()=>{$router.go(-1)}">返回</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            result:'8686RTX',
            name:'张三',
            age:26,
            address:'北京市海淀区',
            email:'1123@qq.com',
            nucleicResult:'阴性'
        }
    },
    methods:{
        // 再次查询事件
        reQuery(){
            this.$router.push({
                path:'/orderCode'
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .code-result {
        .title {
            font-size: 0.14rem;
            color: #000;
            width: 100vw;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            padding-top: 0.3rem;
        }
        .result {
            width: 1.6rem;
            height: 0.5rem;
            color: rgba(16, 16, 16, 100);
            font-size: 0.36rem;
            text-align: center;
            margin: 0.3rem auto;
        }
        .form {
            font-size: 0.14rem;
            width: 3.2rem;
            height: 1.2rem;
            background-color: #fff;
            margin: auto;
            div {
                display: flex;
                flex-wrap: wrap;        
            }
            span {
                width: 1.6rem;
                height: 0.3rem;
                line-height: 0.3rem;
            }
            .name {
                background-color: #F2F2F2;
            }
            .address {
                background-color: #F2F2F2;
            }
            
        }
        .orderTime{
            width: 3.2rem;
            height: 1.5rem;
            background-color: #fff;
            margin: 0.3rem auto;
            .timeTitle {
                font-size: 0.14rem;
                height: 0.4rem;
                line-height: 0.4rem;
                text-align: center;
            }
            .nucleicResult {
                font-size: 0.48rem;
                color: #34CC60;
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
            }
        }

        .btn-group {
            margin-top:0.2rem;
            display: flex;
            flex-direction: column;
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
                margin-top: 0.2rem;
                }
            }
            
        }
    }
</style>