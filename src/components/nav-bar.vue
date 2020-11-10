<template>
  <v-app-bar app collapse-on-scroll>
    <v-app-bar-nav-icon @click="navClick()"></v-app-bar-nav-icon>
    <v-avatar
      @click="$router.push('/')"
      size="38"
      color="primary"
      class="mx-2 non-touch point-cursor"
    >
      <v-img :src="avatar"></v-img>
    </v-avatar>
    <v-toolbar-title
      @click="$router.push('/')"
      class="font-weight-black text-h5 non-touch point-cursor"
      v-ripple
    >
      {{ ismobile ? 'ZYNDEX' : 'Z Y N D E X' }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip bottom transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="primary"
          icon
          @click="changeTheme()"
        >
          <v-icon>
            {{ $vuetify.theme.dark ? 'mdi-water' : 'mdi-water-off' }}
          </v-icon>
        </v-btn>
      </template>
      <span> Change Dark Mode </span>
    </v-tooltip>
    <v-tooltip bottom transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          icon
          @click="windowClick(github.link)"
        >
          <v-icon>
            {{ github.icon }}
          </v-icon>
        </v-btn>
      </template>
      <span> {{ github.title }} </span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { mobileChecker } from '../plugins/helpers';
export default {
  name: 'Nav-Bar',
  data: function () {
    return {
      github: {
        link: 'https://github.com/tks18',
        icon: 'mdi-github',
        title: "Shan.tk's Github Profile",
      },
      avatar:
        'https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg',
    };
  },
  methods: {
    navClick() {
      this.$state.store.navbar.active = true;
    },
    windowClick(url) {
      window.open(url);
      return;
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        'themecache',
        JSON.stringify({
          dark: this.$vuetify.theme.dark,
          blur: this.$state.store.botSettings.navBlur,
          theme: {
            accent: this.$vuetify.theme.themes.light.primary,
          },
        }),
      );
      this.$state.store.botSettings.darkmode = this.$vuetify.theme.dark;
    },
  },
  computed: {
    ismobile() {
      return mobileChecker();
    },
  },
};
</script>

<style></style>
