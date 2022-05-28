<template>
  <div class="h-screen grid grid-rows-pattern grid-cols-pattern justify-center gap-8">
    <Navigation class="col-span-full"/>
  
    <div class="col-span-full flex items-center">
      <div class="w-[550px]">
        <span class="text-4xl text-text font-semibold">Utilize nossas ferramentas para  buscar a melhor opção para você.</span>
        <span class="flex mt-6 text-xl text-caption w-[320px] h-[24px] font-semibold">Selecione as opções nos filtros:</span>
        <!-- <span class="flex mt-12 text-xl text-caption w-[284px] h-[24px] font-semibold">Selecione as opções no filtro:</span> -->
        <select id="small" class="block mt-6 p-2 mb-6 w-full text-sm text-text bg-gray-50 rounded-lg border border-button focus:ring-button focus:border-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Escolha o Continente</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select id="small" class="block mt-6 p-2 mb-6 w-full text-sm text-text bg-gray-50 rounded-lg border border-button focus:ring-button focus:border-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Países com mais de um idioma</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select id="small" class="block mt-6 p-2 mb-6 w-full text-sm text-text bg-gray-50 rounded-lg border border-button focus:ring-button focus:border-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Idioma</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <div class="slotBtn">
          <button type="button" @click="openList()" class="w-40 h-10 justify-center bg-button rounded-lg font-medium px-5 py-2.5 text-center inline-flex items-center text-sm text-text hover:bg-buttonHover">
            Buscar
            <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
          </button>
        </div>
      </div>
      <div>
        <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </a>
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
  padding-top: 12px;
}
</style>