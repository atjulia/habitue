<template>
  <nav class="col-span-full flex items-center justify-between">
    <div class="branding">
      <img src="../assets/imgs/LogoHabitue.png" alt="" />
    </div>
        <ul class="flex gap-4 divide-x">
          <li class="cursor-pointer transition duration-300 ease-in-out focus:outline-none focus:text-gray-500 hover:text-gray-500">Contato</li>
          <li class="pl-4 cursor-pointer transition duration-300 ease-in-out focus:outline-none focus:text-gray-500 hover:text-gray-500">Login</li>
        </ul>
  </nav>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: "Navigation",
  components: {
    Logo,
  },
  data () {
    return {
      scrollPosition: null,
      mobile: false,
      mobileNav: null,
      windowWidth: null,
    }
  }
};
</script>

<style lang="scss">
  header{
    background-color: #FFFEFC;
    z-index: 99;
    padding: 0px 64px;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #111111;
    display: block;

    nav: {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      transition: .5s ease all;
      width: 90%;
      margin: 0 auto;
      // @media (min-width: 1140px) {
      //   max-width: 1140px;
      // }
    } 

    ul, .link {
      font-weight: 500;
      color: #111111;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 8px;
      font-size: 14px;
    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transition;
    }

    &:hover {
      color: green;
      border-color: orangered;
    }
    
    // .branding {
    //   display: flex;
    //   margin-top: 32px;
    //   align-items: center;

    //   img {
    //     width: 50 px;
    //     transition: .5s ease all;
    //   }
    // }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: .5s ease all;
      }
    }

    .icon-active{
      transform: rotate(90deg);
    }
  }
</style>
