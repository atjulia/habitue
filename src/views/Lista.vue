<template>
  <div class="h-screen grid grid-rows-pattern grid-cols-pattern justify-center gap-8">
    <Navigation class="col-span-full"/>
  
    <div class="col-span-full flex items-center">
      <div class="w-[550px]">
        <span class="text-4xl text-text font-semibold dark:text-background">Use our tools to find the best option for you.</span>
        <span class="flex mt-6 text-xl text-caption w-[320px] h-[24px] font-semibold dark:text-caption-dark">Select filter options:</span>
        <form>
          <label for="default" class="block pt-12 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose the Continent</label>
          <select v-model="data.continent" data-cy="continent" @change="changeCountry" id="small" class="block mt-2 p-2 w-full text-sm text-text bg-gray-50 rounded-lg border border-button focus:ring-button focus:border-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-button dark:focus:border-button" required>
            <option v-for="continent in continents" :key="continent.name" :value="continent.name">{{continent.name}}</option>
          </select>
          <label for="default" class="block pt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Countries with more than one language</label>
          <select v-model="data.countries" data-cy="countries" @change="changeCountry" :disabled="!data.continent" id="small" class="block mt-2 p-2 w-full text-sm text-text bg-gray-50 rounded-lg border border-button focus:ring-button focus:border-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-button dark:focus:border-button">
            <option v-for="countries in countries" :key="countries.name" :value="countries.name">{{countries.name}}</option>
          </select>
          <label for="default" class="block pt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Language</label>
          <select v-model="data.language" :disabled="!data.countries" id="small" class="block mt-2 p-2 w-full text-sm text-text bg-gray-50 rounded-lg border border-button focus:ring-button focus:border-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-button dark:focus:border-button">
            <option v-for="languages in languages" :key="languages.name" :value="languages.name">{{languages.name}}</option>
          </select>
          <div class="slotBtn">
            <button @click="submit" :disabled="!data.language" type="button" class="w-40 h-10 justify-center bg-button rounded-lg font-medium px-5 py-2.5 text-center inline-flex items-center text-sm text-text hover:bg-buttonHover">
              Search
              <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
            </button>
          </div>
        </form>
      </div>
      <div class="pl-[110px]">
        <a href="#" class="w-[557px] max-w-xl h-[136px] block bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div v-if="submitList" class="text-center self-center pt-12">
            <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-button" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
          <div v-else>
            <div>
              <h5 class="mt-4 ml-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{data.countries}} - {{data.continent}}</h5>
              <p class="mt-1 ml-6 font-[12px] text-gray-700 dark:text-gray-400">capital: {{data.capital || 'not specified'}}</p>
              <p class="mt-5 ml-6 mb-4 font-[12px] text-gray-700 dark:text-gray-400">language: {{data.language}}</p>
            </div>
          </div>
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

import list from '../services/list'

export default {
  name: "Lista",
  components: {
    Navigation,
    Footer,
  },
  data (){
    return {
      continents: [],
      countries: [],
      languages: [],
      data: {
        capital: ''
      },
      submitList: true
    }
  },
  methods: {
    changeCountry (){
      const th = this
      var continent = th.continents
      var listCountrys = continent.find(item => item.name === th.data.continent)

      var twoLanguagesCountry = listCountrys.countries.filter(item => item.languages.length >= 2)
      th.countries = twoLanguagesCountry
      
      if(twoLanguagesCountry){
        var capitalSelected =  twoLanguagesCountry.filter(item => item.name === th.data.countries).capital
        th.data.capital = capitalSelected
        var language = twoLanguagesCountry.find(item => item.name === th.data.countries).languages
        th.languages = language
      }
      
    },
    submit (){
      this.submitList = false
    }
  },
  async mounted() {
    const th = this
    await list().then(item => {
      th.continents = item.data.continents
    })

  }
};
</script>

<style>
.slotBtn {
  padding-top: 12px;
}
</style>