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
          <div class="timeTitle">预约时间</div>
          <div class="time">{{time}}</div>
      </div>
      <div class="btn-group">
          <div @click="reQuery">再次查询</div>
          <div @click="()=>{$router.go(-1)}">返回</div>
      </div>
  </div>
</template>

<script>
import {getOrderInfoById} from '../api/index.js'
import dayjs from 'dayjs'
export default {
    data(){
        return {
            result:'',
            name:'',
            age:'',
            address:'',
            email:'',
            time:'',
        }
    },
    created(){
        // 获取预约成功返回的 _id
        let _id = window.sessionStorage.getItem('_id');
        let  userObj = window.sessionStorage.getItem('userInfo');
        let userInfo = JSON.parse(userObj);
        this.name = userInfo.name;
        this.age = userInfo.age;
        this.address = userInfo.address;
        this.email = userInfo.email;
        console.log(this.name)
        getOrderInfoById({_id}).then(data => {
            if(data.code == 1000) {
                // 获取预约成功时间
                this.time = dayjs(data.msg.date).format('YYYY-MM-DD hh:mm');
                // 获取预约码
                this.result = data.msg.code;
            }
        }).catch(err => {
            console.log(err)
        })
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
            .time {
                font-size: 0.28rem;
                color: #009FD7;
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