<template>
  <v-navigation-drawer
    app
    temporary
    v-model="$state.store.navbar.active"
    class="$state.store.botSettings.navBlur ? 'back-blur' : undefined"
  >
    <v-container>
      <v-list-item class="px-2">
        <v-list-item-content>
          <v-list-item-title
            @click="$router.push('/about')"
            class="text-center point-cursor non-touch text-h4 font-weight-black"
          >
            Z Y N D E X
          </v-list-item-title>
          <v-list-item-subtitle
            class="text-center non-touch text-caption font-weight-light"
          >
            The Ultimate Google Drive Index
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="text text-center text-body-2 my-2 font-weight-light">
        Developed by
      </div>
      <v-row align="center" justify="center">
        <v-avatar
          @click="$router.push('/about')"
          class="point-cursor non-touch"
          size="125"
        >
          <v-img :src="avatar"></v-img>
        </v-avatar>
      </v-row>
      <v-list-item three-line class="px-2">
        <v-list-item-content>
          <v-list-item-title
            @click="$router.push('/about')"
            class="text-center point-cursor non-touch font-weight-medium"
          >
            Sudharshan TK
          </v-list-item-title>
          <v-list-item-subtitle
            class="text-center non-touch font-weight-italic"
          >
            (aka Shan.tk)
          </v-list-item-subtitle>
          <v-list-item-subtitle class="text-center non-touch font-weight-light">
            Web Developer / Aspiring Chartered Accountant
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item-group>
          <div class="text-center text-subtitle-2">Settings</div>
          <v-divider class="ma-1"> </v-divider>
          <v-list-item @click="changeTheme">
            <v-list-item-icon>
              <v-icon>
                {{ $vuetify.theme.dark ? 'mdi-water' : 'mdi-water-off' }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Dark Mode </v-list-item-title>
              <v-list-item-subtitle>
                {{
                  $vuetify.theme.dark
                    ? 'Turn off Dark Mode'
                    : 'Turn on Dark Mode'
                }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="colorDiag = true">
            <v-list-item-icon>
              <v-icon>mdi-palette</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Change Accent Color </v-list-item-title>
              <v-list-item-subtitle>
                Set Your Preferred Accent Color
              </v-list-item-subtitle>
              <v-dialog v-model="colorDiag" max-width="350">
                <v-card>
                  <v-card-title class="headline">
                    Choose Accent Color
                  </v-card-title>
                  <v-card-text>
                    <v-color-picker
                      show-swatches
                      hide-inputs
                      v-model="accent"
                    ></v-color-picker>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-col>
                      <v-btn
                        class="subtitle text-bold"
                        color="primary"
                        @click="changeAccent()"
                        outlined
                      >
                        Accept
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn
                        @click="colorDiag = !colorDiag"
                        class="subtitle text-bold"
                        color="primary"
                      >
                        Close
                      </v-btn>
                    </v-col>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ma-1"> </v-divider>
        </v-list-item-group>
      </v-list>
      <v-list class="text-left">
        <v-list-item-group>
          <v-list-item
            v-for="(nav, index) in navPaths"
            v-bind:key="index"
            @click="$router.push(nav.link)"
          >
            <v-list-item-icon>
              <v-icon> {{ nav.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ nav.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Nav-Drawer',
  data: function () {
    return {
      avatar:
        'https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg',
      accent: null,
      colorDiag: false,
      navPaths: [
        {
          icon: 'mdi-home',
          title: 'Home',
          subtitle: 'Home',
          link: '/',
        },
        {
          icon: 'mdi-information-variant',
          title: 'About',
          subtitle: 'About Zyndex and this Website',
          link: '/about',
        },
        {
          icon: 'mdi-file-document',
          title: 'Documentation',
          subtitle: 'Read the Docs',
          link: '/docs',
        },
        {
          icon: 'mdi-page-next',
          title: 'Generate Yours',
          subtitle: 'Generate Your Template',
          link: '/generate',
        },
      ],
    };
  },
  methods: {
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
    changeAccent() {
      this.$vuetify.theme.themes.light.primary = this.accent.hex;
      this.$vuetify.theme.themes.dark.primary = this.accent.hex;
      localStorage.setItem(
        'themecache',
        JSON.stringify({
          dark: this.$vuetify.theme.dark,
          blur: this.$state.store.botSettings.navBlur,
          theme: {
            accent: this.accent.hex,
          },
        }),
      );
    },
  },
  mounted() {
    var themecache = JSON.parse(localStorage.getItem('themecache'));
    if (themecache && themecache != null) {
      this.$state.store.botSettings.darkmode = themecache.dark;
      this.$state.store.botSettings.navBlur = themecache.blur;
      this.$vuetify.theme.dark = themecache.dark;
      this.$vuetify.theme.themes.light.primary = themecache.theme.accent;
      this.$vuetify.theme.themes.dark.primary = themecache.theme.accent;
    }
  },
};
</script>

<style></style>
