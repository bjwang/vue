<template>
	<div>
		<h1>Login</h1>
    <validator name="validation">
      <form class="topic-form" novalidate>
        <input type="text" id="phone" v-model="phone" detect-change="off" detect-blur="off" placeholder="phone" v-validate:phone="{ required: true, minlength: 3, maxlength: 11, pattern: '/^1[3|4|5|7|8|9][0-9]{9}$/' }" />
        <span class="errors" v-if="$validation.phone.touched">
          <span v-if="$validation.phone.required">Required your phone.</span>
          <span v-if="$validation.phone.minlength">3pos.</span>
          <span v-if="$validation.phone.maxlength">11pos.</span>
          <span v-if="$validation.phone.pattern">telphone</span>
        </span>
        <input type="password" id="password" v-model="password" detect-change="off" detect-blur="off" placeholder="password" v-validate:password="['required']"/>
        <span class="errors" v-if="$validation.password.touched">
          <span v-if="$validation.password.required">Required your password.</span>
        </span>
        <input type="submit" value="register" @click="onSubmit">
      </form>
    </validator>
	</div>
</template>

<script>
	export default{
    data: function(){
			return {
        phone: '',
        password: ''
			}
		},
    methods: {
      loginPost: function(data){
        this.$http.post('/djcf/user/login', data)
        .then((response) =>{
          let ret = response.body;
          console.log(ret);
          if(ret.status !== 0){
            return;
          }
          this.$route.router.go({path:'/'});
        })
        .catch((response) =>{
          console.log(response.status);
        })
      },
      onSubmit: function (e) {
        // validate manually
        var that = this;
        console.log('submit');
        this.$validate(true, function () {
          if (that.$validation.invalid) {
            e.preventDefault();
            return;
          }else{
            var _data = {
              mobile: that.$get('phone'),
              mobileNumber: that.$get('phone'),
              password: that.$get('password'),
              ipAddress: '127.0.0.1'
            }
            console.log('提交成功' + JSON.stringify(_data));
            that.loginPost(_data);
          }
        })
      }
    }
	}
</script>
