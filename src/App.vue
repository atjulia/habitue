<template>
  <div class="font bg-background">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: "App",
  components: {
    Home
  }
}

</script>

<style>

.countries__title {
  margin: 1.4rem 0;
  padding: 1.4rem 0;
  border-top: #ECF0F1 1px solid;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>