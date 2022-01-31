<template>
  <div>    
    <div class="login">
      <h1>Login</h1>
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
      <p>
        <router-link to="/signup">SignUp</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    {
      return {
        email: "",
        password: "",
      };
    }
  },
  methods: {
    async login() {
      {
        if (this.email !== "" && this.password !== "") {
          let result = await axios.get("http://localhost:3000/users?email=" +this.email +"&password=" +this.password);

          if (result.status == 200 && result.data.length > 0) {
            localStorage.setItem("username",this.email);
            localStorage.setItem("password",this.password);
            //localStorage.setItem("user-info", JSON.stringify(result.data[0]));
            this.$router.push("/");
            window.location.reload();
          } else {
            alert("Invalid User Details");
          }
        } else {
          alert("Field is Empty");
        }
      }
    },
  },
};
</script>
