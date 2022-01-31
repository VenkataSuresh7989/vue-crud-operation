<template>
  <div>
    <div class="register">
      <h1>SignUp</h1>
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="signUp">Sign Up</button>
      <p><router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (this.name !== "" && this.email !== "" && this.password !== "") {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log(result);

        if (result.status == 201) {
          alert("SignUp Successfull");
          this.$router.push("/login");
          window.location.reload();
        }
      } else {
        alert("Field is Empty");
      }
    },
  },
  //   mounted() {
  //     {
  //       let user = localStorage.getItem("user-info");
  //       if (user) {
  //         this.$router.push("/");
  //       }
  //     }
  //   },
};
</script>
