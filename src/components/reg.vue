<template>
	<div>
		<h1>Form</h1>
    <validator name="validation">
      <form class="topic-form" novalidate>
    		<input type="text" id="username" v-model="username" detect-change="off" detect-blur="off" placeholder="name" v-validate:username="{ required: { rule: true, message: 'required you name !!' } }" />
        <span class="errors" v-if="$validation.username.touched">
          <span v-if="$validation.username.required">Required your name.</span>
        </span>
        <input type="text" id="phone" v-model="phone" detect-change="off" detect-blur="off" placeholder="phone" v-validate:phone="{ required: true, minlength: 3, maxlength: 11 }" />
        <span class="errors" v-if="$validation.phone.touched">
          <span v-if="$validation.phone.required">Required your phone.</span>
          <span v-if="$validation.phone.minlength">3pos.</span>
          <span v-if="$validation.phone.maxlength">11pos.</span>
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
				username: '',
        phone: '',
        password: ''
			}
		},
    methods: {
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
              userName: that.$get('username'),
              userPhone: that.$get('phone'),
              userPwd: that.$get('password')
            }
            console.log('提交成功' + JSON.stringify(_data));
          }
        })
      }
    }
	}
</script>
