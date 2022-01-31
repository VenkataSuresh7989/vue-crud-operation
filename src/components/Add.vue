<template>
  <div>
    <div class="add-detail">
    <h1>Add</h1>
    <form class="add">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        v-model="restaurant.address"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter Contact"
        v-model="restaurant.contact"
      />
      <button type="button" v-on:click="addRestaurant">
        Add New Restaurants
      </button>
    </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push("/");
      }
      console.warn("result", result);
    },
  },
  //   mounted() {
  //     let user = localStorage.getItem("user-info");
  //     if (user) {
  //       this.$router.push({ name: "signUp" });
  //     }
  //   },
};
</script>
