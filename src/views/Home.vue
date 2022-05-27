<template>
  <div class="h-screen grid grid-rows-pattern grid-cols-pattern justify-center gap-8">
    <Navigation class="col-span-full"/>
  
    <div class="col-span-full flex items-center">
      <div class="">
        <span class="text-4xl text-text w-80 h-24 font-semibold">Facilite sua vida. Crie alertas.</span>
        <span class="caption text-xl text-caption font-semibold">Deixe a preocupação de esquecer algo de lado</span>
        <span class="caption2 text-sm text-caption font-semibold">Estamos criando soluções para alguns paises. Dê uma olhada se o seu esta em nossa lista.</span>
        <div class="slotBtn">
          <button class="w-40 h-10 bg-button rounded-lg font-medium text-text hover:bg-buttonHover">Lista de paises</button>
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
};
</script>

<style>
.home{
  display: flex;
  position: relative;
  padding: 169px 64px 0px;
}
/* .align{
  align-items: flex-end;
} */
.text {
  display: flex;
  font-size: 40px;
  width: 322px;
  height: 96px;
}
.caption {
  padding-top: 12px;
  display: flex;
  width: 333px;
  height: 48px;

}
.caption2 {
  display: flex;
  font-size: 12px;
  width: 391px;
  height: 30px;
  padding: 68px 0px 0px;
}
.slotBtn {
  padding-top: 54px;
}
.btn{
  border-radius: 8px;
  color: #111111;
  font-size: 15px;
  font-weight: 500;
}
.slotImg {
  padding: 0px 113px 0 368px; 
}
</style>