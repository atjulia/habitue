<template>
  <div class="h-screen grid grid-rows-pattern grid-cols-pattern justify-center gap-8">
    <Navigation class="col-span-full"/>
  
    <div class="col-span-full flex items-center">
      dsadaddasd
    </div>
    <div class="col-span-full">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "Lista",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
.caption2 {
  padding: 68px 0px 0px;
}
.slotBtn {
  padding-top: 78px;
}
</style>