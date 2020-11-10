<template>
  <div>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-full">
            <div class="container">
              <div class="text text-overline">
                Zyndex is the Ultimate Destination for Google Drive Index which
                is Easily Deployable and has More Reliable Security Which can be
                Trusted.
              </div>
              <p>
                <v-btn color="primary" @click="$vuetify.goTo('#scroll-target')">
                  <v-icon>mdi-book-open-outline</v-icon>
                  Read More
                </v-btn>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <v-card elevation="20" class="ma-4">
      <section
        :class="
          'hero ' + ($vuetify.theme.dark ? ' ' : 'gradient-hero') + ' is-small'
        "
      >
        <div class="hero-body">
          <div
            v-if="currHerosrc"
            class="columns is-multiline is-centered is-vcentered"
          >
            <transition name="slide-fade" mode="out-in">
              <div v-bind:key="herokey" class="column grad-text is-half">
                <div class="container">
                  <div
                    :class="
                      (ismobile ? 'text-center' : 'text-right') +
                      ' my-2' +
                      (ismobile ? ' text-h5' : ' text-h2') +
                      ' break-only-word font-weight-bold'
                    "
                  >
                    {{ currHerosrc.title }}
                  </div>
                  <div
                    :class="
                      (ismobile ? 'text-center' : 'text-right') +
                      ' my-1 text-subtitle font-weight-black'
                    "
                  >
                    {{ currHerosrc.subtitle }}
                  </div>
                </div>
              </div>
            </transition>
            <div class="column is-half">
              <v-avatar color="red" :size="ismobile ? 300 : 500">
                <v-img
                  src="https://media.giphy.com/media/RKprmbDQXHFVy4DFyq/giphy-downsized.gif"
                ></v-img>
              </v-avatar>
            </div>
          </div>
        </div>
      </section>
    </v-card>
    <v-container>
      <v-row align="center" justify="center">
        <v-col :cols="ismobile ? 12 : 6">
          <v-card shaped outlined>
            <v-col
              align="center"
              cols="12"
              :class="
                ismobile ? 'text-body-2' : 'text-overline' + ' font-weight-bold'
              "
            >
              Deploy it Right Now by Clicking the Following Button and Get
              Started with the Instructions. Let's Get You Started
            </v-col>
            <v-col cols="12" align="center" justify="center">
              <v-btn
                class="back-gif text text--black"
                color="primary"
                large
                @click="$router.push('/generate')"
              >
                <v-icon>mdi-check-all</v-icon> Generate Now
              </v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="container" id="scroll-target">
      <div class="text text-h6 my-2 font-weight-bold">
        Get to Know About the Project
      </div>
      <div
        :class="
          ismobile
            ? 'columns is-multiline is-mobile is-centered is-vcentered has-text-centered'
            : 'columns is-multiline is-mobile is-centered is-vcentered'
        "
      >
        <div
          v-for="(btn, index) in abtBtns"
          v-bind:key="index"
          :class="
            ismobile
              ? index == abtBtns.length - 1
                ? 'column is-full'
                : 'column is-half'
              : 'column is-2'
          "
        >
          <v-btn color="primary">
            <v-icon>{{ btn.icon }}</v-icon> {{ btn.btnTxt }}
          </v-btn>
        </div>
      </div>
    </div>
    <v-container class="container mt-3">
      <div class="content">
        <div class="text text-h6 my-2 font-weight-bold">Overview</div>
        <div class="text-body-2">
          Zyndex is a Google Drive Index Combining the power of Cloudflare
          Workers and Google Drive which allows you to index your files on the
          browser through Cloudflare Workers. Zyndex Gives you Unmatched Amount
          of Customizations that no One Can Give. With Security as the Main
          Focus, This Gives You Every Thing You need to Manage Users. Complete
          Role Based Authentication and Authorization. Tokenized Download Links
          & Secured Playback can be one of the Prominent Features of this Index.
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mobileChecker } from '../plugins/helpers';
import { shuffle } from 'lodash';
export default {
  data: function () {
    return {
      heroSrc: [
        {
          title: 'Zyndex',
          subtitle: 'Designed for Style! Engineered to Last!',
        },
        {
          title: 'Built with Overloaded Features',
          subtitle: 'Ultimaterific !!',
        },
        {
          title: 'Loaded with Super Cool Admin Features.',
          subtitle: 'When the Going Gets Tough, The Tough Gets Ultimate.',
        },
        {
          title: 'Massive Customizations',
          subtitle: 'You will get Massive theming Options to Customize',
        },
      ],
      abtBtns: [
        {
          icon: 'mdi-head-lightbulb-outline',
          btnTxt: 'Features',
        },
        {
          icon: 'mdi-wan',
          btnTxt: 'Docs',
        },
        {
          icon: 'mdi-key-chain-variant',
          btnTxt: 'Pre-reqs',
        },
        {
          icon: 'mdi-google-photos',
          btnTxt: 'Shots',
        },
        {
          icon: 'mdi-lightbulb-outline',
          btnTxt: " FAQ's",
        },
      ],
      currHerosrc: {},
      herokey: 0,
    };
  },
  methods: {},
  computed: {
    ismobile() {
      return mobileChecker();
    },
  },
  mounted() {
    this.currHerosrc = this.heroSrc[0];
    var shuffled = shuffle(this.heroSrc);
    setInterval(() => {
      this.currHerosrc = shuffled[this.herokey];
      if (this.herokey == shuffled.length - 1) {
        this.herokey = 0;
      } else {
        this.herokey++;
      }
    }, 7500);
  },
};
</script>
