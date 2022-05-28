<template>
  <div class="h-screen grid grid-rows-pattern grid-cols-pattern justify-center gap-8">
    <Navigation class="col-span-full"/>
  
    <div class="col-span-full flex items-center">
      <div class="">
        <span class="text-4xl text-text w-[333px] h-24 font-semibold">Facilite sua vida. Crie alertas.</span>
        <span class="flex text-xl text-caption w-[333px] h-[48px] font-semibold">Deixe a preocupação de esquecer algo de lado</span>
        <span class="caption2 flex text-sm text-caption w-[391px] h-[30px] font-semibold">Estamos criando soluções para alguns paises. Dê uma olhada se o seu esta em nossa lista.</span>
        <div class="slotBtn">
          <button type="button" @click="openList()" class="w-40 h-10 bg-button rounded-lg font-medium text-text hover:bg-buttonHover">Lista de paises</button>
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
.caption2 {
  padding: 68px 0px 0px;
}
.slotBtn {
  padding-top: 78px;
}
</style>