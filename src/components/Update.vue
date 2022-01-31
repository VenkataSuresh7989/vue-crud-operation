<template>
  <div>
    <div class="update">
    <h1>Update</h1>
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
      <button type="button" v-on:click="updateRestaurant">
        Update Restaurent
      </button>
    </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Update",
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
    async updateRestaurant() {
      //alert((this.$route.query.id));
      const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.query.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    {
      let user = localStorage.getItem("username");
      if (!user) {
        this.$router.push("/signup");
      }
      let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.query.id);
      console.warn(result.data);
      this.restaurant = result.data;
    }
  },
};
</script>
