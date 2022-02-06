<template>
  <div class="container">
    <h3>Dashboard</h3>
    <table border="2" class="tab">
      <tr>
        <td style="font-weight:bold">ID</td>
        <td style="font-weight:bold">Name</td>
        <td style="font-weight:bold">Contact</td>
        <td style="font-weight:bold">Address</td>
        <td style="font-weight:bold">Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="'/update?id=' + (item.id)">Update</router-link>
          <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },

    async loadData() {
      let user = localStorage.getItem("username");
      this.name = user;
      if (!user) {
        this.$router.push("/signup");
      }

      let result = await axios.get("http://localhost:3000/restaurant");
      console.warn(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    {
      this.loadData();
    }
  },
};
</script>
