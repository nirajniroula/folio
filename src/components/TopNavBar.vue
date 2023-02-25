<template>
  <v-app-bar class="px-4 px-md-8">
    <v-app-bar-title>Namaste</v-app-bar-title>

    <v-spacer></v-spacer>
    <div class="d-none d-md-block">
      <div class="d-flex flex-row">
        <router-link
          v-for="item in menu"
          :key="item.title"
          v-slot="{ isActive, isExactActive }"
          :to="item.route"
          class="menu-wrapper mx-2"
          ><button
            :class="[
              'w-100',
              'glow-on-hover',
              isActive && 'router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
            text
            w-100
          >
            {{ item.title }}
          </button></router-link
        >
      </div>
    </div>

    <div class="d-md-none">
      <v-btn
        class="text-white"
        icon="mdi-menu"
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="d-md-none nav"
  >
    <v-sheet class="h-100 nav">
      <div class="d-flex flex-column elevation-8">
        <router-link
          v-for="item in menu"
          :key="item.title"
          v-slot="{ isActive, isExactActive }"
          :to="item.route"
          class="menu-wrapper ma-2"
          ><button
            :class="[
              'w-100',
              'glow-on-hover',
              isActive && 'router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
            text
            w-100
          >
            {{ item.title }}
          </button></router-link
        >
      </div>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts">
  export default {
    data: () => ({
      drawer: false,
      group: null,
      menu: [
        {
          title: 'Home',
          route: '/folio/',
        },
        {
          title: 'About',
          route: '/folio/about',
        },
        {
          title: 'Projects',
          route: '/folio/projects',
        },
        {
          title: 'Contact',
          route: '/folio/contact',
        },
      ],
    }),

    watch: {
      group() {
        this.drawer = false
      },
    },
  }
</script>

<style scoped lang="scss">
  .nav {
    border-left: 1px solid rgb(49, 49, 49);
  }
  .router-link-active {
    border: 1px solid #fff;
    border-radius: 2px;
  }

  //animation for button
  .glow-on-hover {
    padding: 4px 12px;
    outline: none;
    color: white;
    background: black;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 2px;
  }

  .glow-on-hover:before {
    content: '';
    background: linear-gradient(
      90deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 2px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 2px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
