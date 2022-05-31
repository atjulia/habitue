<template>
  <div class="h-screen grid grid-rows-pattern grid-cols-pattern justify-center gap-8">
    <Navigation class="col-span-full"/>
  
    <div class="col-span-full flex items-center">
      <div class="">
        <span class="flex text-4xl text-text mb-8 w-[500px] h-24 font-semibold dark:text-background">Make your life easier. Create alerts.</span>
        <span class="flex text-xl text-caption w-[360px] h-[48px] font-semibold dark:text-caption-dark">Leave the worry of forgetting something aside</span>
        <span class="mt-[68px] flex text-[12px] text-caption w-[391px] h-[30px] font-semibold dark:text-caption-dark">We are creating solutions for some countries. Check if yours is on our list.</span>
        <div class="mt-6">
          <button type="button" @click="openList()" data-cy="button" class="w-40 h-10 bg-button rounded-lg font-medium text-text  hover:bg-buttonHover">List of countries</button>
        </div>
      </div>
      <div class="pl-60 min-width-80">
        <img class="w-80 h-80" src="../assets/imgs/annotation.svg" alt=""/>
      </div>
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
  name: "Home",
  components: {
    Navigation,
    Footer,
  },
  data () {
    return {

    }
  },
  methods: {
    openList (){
      this.$router.push('/lista'); 
    }
    
  }
};
</script>

<style>
.slotBtn {
  padding-top: 78px;
}
</style>