<template>
  <div class="about">
    <div class="bg_picture">
      <img src="../assets/img/background.jpg" alt="">
      <div class="background">
        <div class="login_left"><img src="../assets/img/loginleft.jpg" alt=""></div>
        <div class="login_right">
          <div class="logo"><img src="../assets/img/logo.jpg" alt=""></div>
          <div class="logo_title">哎呀，在试错，努力奋斗呀！</div>
          <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="0" class="demo-ruleForm">
            <el-form-item  prop="name" class="el-input">
              <el-input v-model="userInfo.name" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item  prop="password" class="el-input">
              <el-input type="password" v-model="userInfo.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('userInfo')" class="submit_button">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "@/api/api.js";
import {ElMessage} from "element-plus"
// import util from '../api/cookie.js'
export default {
  data() {
    return {
      userInfo: {
        name: '',
        password: '',

      },
      rules: {
        name: [
          {required: true, message: '账号不能为空', trigger: 'change'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'change'}
        ],
      }
    };
  },
  // created() {
  //   let name = util.cookies.getCookie("name");
  //   let password = util.cookies.getCookie("password");
  //   if (name && password) {
  //     this.userInfo.account = name;
  //     this.userInfo.password = password;
  //   }
  // },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
   async login(){
      let params = this.userInfo
      login(params).then((res) =>{
        // console.log(res)
        if(res.data.value) {
          ElMessage.success({
            message: '登录成功',
            type: 'success'
          });
          // util.cookies.setCookie('o-token',res.data.value.token);
          this.$router.push({ path:'/list'})
        }
        else {
          ElMessage.success({
            message: res.data.message,
            type: 'error'
          });
        }
      }).catch((err) =>{
        console.log(err);
      })
    }
  }
}
</script>
<style>
.bg_picture>img{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.background {
  width: 1200px;
  height: 640px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
}
.login_left img{
  width: 600px;
  height: 640px;
}
.login_right {
  float: right;
  width: 600px;
  height: 640px;
}
.login_right .logo >img {
  width: 70px;
  height: 70px;
  margin-top: 120px;
}
.login_right .logo_title {
  margin-top: 25px;
  color: #9966FF;
  font-size: 20px;
  font-weight: 700;
}
.demo-ruleForm {
  margin-top: 30px;
}
.el-input {
  height: 70px;
}
.el-form-item__error {
  text-align: left;
  width: 300px;
  height: 20px;
  color: red;
  font-size: 14px;
  margin: 0 auto;
}
.el-input__inner {
  width: 300px;
  height: 30px;
  margin-top: 30px;
}
.el-input__inner :hover {
  border: deepskyblue 1px solid;
}
.submit_button {
  width: 300px;
  height: 40px;
  margin-top: 40px;
  background: #9966FF;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: white;
}

</style>
