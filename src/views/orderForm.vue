<template>
  <div class="order">
    <form action="" class="form" ref="form" >
      <label for="">
        姓名: <input placeholder="请输入姓名" v-model="name" style="color:#000;" />
      </label>
      <label for="">
        性别:  <input class="radio" v-model="gender" required type="radio" name="sex" style="color:#000;" value="男" />男
              <input class="radio" v-model="gender" required type="radio" name="sex" style="color:#000;" value="女" />女
      </label>
      <label for="">
        年龄: <input placeholder="请输入年龄" type="number" v-model="age" style="color:#000;" />
      </label>
      <label for="">
        地址: <input  placeholder="请输入地址" v-model="address" style="color:#000;" />
      </label>
      <label for="">
        邮箱: <input placeholder="请输入邮箱" type="email" v-model="email"  style="color:#000;" />
      </label>
      <label for="">
        时间: <input placeholder="请输入时间" type="date" v-model="time"  style="color:#000;" />
      </label>
    </form>
    <div class="btn" @click="goToOrder">预约</div>
    <div class="btn back" @click="goBack">返回</div>
  </div>
</template>
<script>

import {getOrder} from '../api/index.js'
export default {
  name:'order-form',
  data() {
    return {
      name:'',
      gender:'',
      age:'',
      email:'',
      address:'',
      time:''
    }
  },
  methods:{
    goToOrder(){
      console.log(this.gender);
      switch (true) {
        case this.name == '':
          alert('姓名不能为空');
          return false;
        case this.gender == '':
          alert('性别不能为空');
          return false;
        case this.age == '':
          alert('年龄不能为空');
          return false;
        case this.address == '':
          alert('地址不能为空');
          return false;
        case this.email == '':
          alert('邮箱不能为空');
          return false;
        case this.time == '':
          alert('时间不能为空');
          return false;
      }
      // 1.获取表单数据
      let params = {
        name:this.name,
        gender:this.gender,
        age:this.age,
        address:this.address,
        email:this.email,
        time:this.time
      }
      // 填写表单预约核酸检测
      getOrder(params).then(
        data => {
          console.log(data)
          console.log(data.status)
          console.log(data.msg._id)
          if(data.status == 1000){
            // 存储 _id 
            window.sessionStorage.setItem('_id',data.msg._id);
            window.sessionStorage.setItem('userInfo',JSON.stringify(params));
            
            this.$router.push({
              path:'/orderCodeResult'
            })
          }else {
            alert('网络异常');
          }
        }
      ).catch(err => {
        console.log(err);
        alert('网络异常');
      })
      
      
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="less" scoped>
  .order {
    font-size: 0.14rem;
    .form {
      height: 2.6rem;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      label {
        color: #fff;
      }
      input {
        height: 0.3rem;
        width: 2rem;
        border-radius: 0.05rem;
        margin-left: 0.1rem;
        background:#fff;  
	      outline:none;  
	      border:0px;
        padding-left: 0.1rem;
        box-sizing: border-box;
        &::-webkit-input-placeholder {
          color: rgba(136, 136, 136, 100);
        }
        &::-moz-placeholder {/* Firefox 18- */
          color: rgba(136, 136, 136, 100);
        }
        &::-moz-placeholder{/* Firefox 19+ */
          color: rgba(136, 136, 136, 100);
        }
        &::-ms-input-placeholder {
          color: rgba(136, 136, 136, 100);
        }
      }
      .radio {
        width: 0.8rem;
        height: 0.2rem;
        line-height: 0.2rem;
        vertical-align:middle;
      }
    }
    .btn {
        width: 1.8rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.2rem;
        color: rgba(0, 159, 215, 100);
        border-radius: 0.25rem;
        background-color: #fff;
        margin: 0.8rem auto;
    }
    .back {
      margin-top: -0.4rem;
    }
  }
</style>
