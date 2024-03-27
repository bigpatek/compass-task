<template>
  <div class="app">
      <Navbar />
      <router-view/>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  export default {
    components : {
      Navbar
    }
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif; 
}
.app{
  display: flex;
  flex-direction: row;
}

</style>
