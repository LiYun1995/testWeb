<template>
    
<el-card>
<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="年龄"
    prop="age"
    :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'string', message: '年龄必须为字符串'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="checkCookie()">cookie</el-button>
    <el-button @click="deleteCookie()">清除cookie</el-button>
  </el-form-item>
  <formBD></formBD>
</el-form>
<h1>Hello{{numberValidateForm.age}}</h1>
</el-card>
</template>

<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           alert("submit!")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      setCookie(cname,cvalue,exdays){
           var d = new Date();
           d.setTime(d.getTime()+(exdays*24*60*60*1000));
           var expires = "expires="+d.toGMTString();
           document.cookie = cname+"="+cvalue+"; "+expires;
      },
      getCookie(cname){
           var name = cname + "=";
           var ca = document.cookie.split(';');
           for(var i=0; i<ca.length; i++) {
           var c = ca[i].trim();
           if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
      }
           return "";
      },
      checkCookie(){
          var user=this.getCookie("username");
          if (user!=""){
          alert("欢迎 " + user + " 再次访问");
     }
        else {
        user = this.numberValidateForm.age;
          if (user!="" && user!=null){
            this.setCookie("username",user,30);
        }
    }
      },
      deleteCookie(){
          document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      }
    }
  }
</script>