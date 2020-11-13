<template>
  <div class="content mx-2 px-3 my-2">
    <div class="text-center my-3 text-h6 font-weight-bold">
      Generate Your Ultimate Index Now 😜
    </div>
    <div class="columns is-multiline is-centered">
      <div class="column is-half my-2">
        <form>
          <v-card elevation="10" class="pa-4 my-2">
            <div class="text-center text-h6 ma-3">Basic Details</div>
            <div class="columns is-desktop is-multiline is-centered">
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-form-textbox"
                  dense
                  autocomplete="off"
                  type="text"
                  v-model="name"
                  :persistent-hint="true"
                  :success="validations.name(name)"
                  hint="Enter the Website's Name of Your Choice "
                  label="Enter Site Name"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half">
                <v-select
                  prepend-icon="mdi-water-plus-outline"
                  dense
                  v-model="selTheme"
                  autocomplete="off"
                  :persistent-hint="true"
                  :success="validations.selTheme(selTheme)"
                  :items="themes"
                  item-text="value"
                  item-value="value"
                  label="Select Your Theme"
                  hint="Please See the Screenshots for Theme's Look."
                  outlined
                ></v-select>
              </div>
              <div class="column is-half">
                <v-select
                  prepend-icon="mdi-shape"
                  dense
                  v-model="variant"
                  autocomplete="off"
                  :persistent-hint="true"
                  :success="validations.selTheme(variant)"
                  :items="variants"
                  item-text="value"
                  item-value="value"
                  label="Select Your Theme Variant"
                  hint="Please See the Screenshots for Look."
                  outlined
                ></v-select>
              </div>
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-web"
                  dense
                  v-model="fronturl"
                  autocomplete="off"
                  type="url"
                  :persistent-hint="true"
                  :success="validations.fronturl(fronturl)"
                  hint="Enter the Frontend Website URL to which it will be Deployed. Do Not Put / at the End."
                  label="Frontend URL"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-webhook"
                  dense
                  v-model="version"
                  autocomplete="off"
                  :persistent-hint="true"
                  :success="validations.version()"
                  hint="Latest Version will be Served. Not Fillable"
                  :disabled="true"
                  label="Version"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-web"
                  dense
                  v-model="backurl"
                  type="url"
                  autocomplete="off"
                  :persistent-hint="true"
                  :success="validations.backurl(backurl)"
                  hint="If You have not Deployed the Backend. Please see the Docs."
                  label="Backend URL"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-lock-question"
                  dense
                  v-model="hybridpass"
                  autocomplete="off"
                  type="password"
                  :persistent-hint="true"
                  :success="validations.hybridpass(hybridpass)"
                  hint="If You have Deployed the Backend and Generated Put Here or Leave it Blank"
                  label="Hybrid Password"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half text-center">
                <v-btn small color="primary" @click="openAuthWindow">
                  Get Authorization Code
                </v-btn>
              </div>
              <div class="column is-full">
                <v-text-field
                  prepend-icon="mdi-passport"
                  dense
                  v-model="authCode"
                  type="password"
                  :persistent-hint="true"
                  autocomplete="off"
                  :success="validations.authCode(authCode)"
                  hint="Enter the Auth Code that You Generated with the Above Button"
                  label="Authorization Code / Refresh Token"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-card-account-details-outline"
                  dense
                  v-model="clientId"
                  type="password"
                  :persistent-hint="true"
                  autocomplete="off"
                  :success="validations.name(clientId)"
                  hint="Enter Your Client ID that was given in Google developer Console"
                  label="Client ID"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-half">
                <v-text-field
                  prepend-icon="mdi-card-account-details"
                  dense
                  v-model="clientSec"
                  type="password"
                  :persistent-hint="true"
                  autocomplete="off"
                  :success="validations.name(clientSec)"
                  hint="Enter Your Client Secret that was given in Google developer Console"
                  label="Client Secret"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </div>
              <div class="column is-full">
                <div class="text-subtitle-1 font-weight-bold">
                  <v-icon>mdi-square-root-box</v-icon> Roots
                </div>
                <v-card shaped outlined class="py-2 px-2">
                  <div
                    v-if="roots.length < 1"
                    class="text-center text-subtitle-2"
                  >
                    Enter Roots Information with the Below Button
                  </div>
                  <v-row v-for="(root, index) in roots" v-bind:key="index">
                    <v-col
                      v-if="roots.length > 0"
                      cols="1"
                      justify="center"
                      class="text-subtitle-2"
                    >
                      {{ index + 1 }}
                    </v-col>
                    <v-col
                      v-if="roots.length > 0"
                      :cols="ismobile ? 8 : 4"
                      justify="center"
                      class="text-subtitle-2"
                    >
                      {{ root.name }}
                    </v-col>
                    <v-col
                      v-if="roots.length > 0 && !ismobile"
                      cols="4"
                      justify="center"
                      class="text-subtitle-2"
                    >
                      Protect File Link:
                      {{ root.protect_file_link ? 'On' : 'Off' }}
                    </v-col>
                    <v-col
                      v-if="roots.length > 0"
                      cols="3"
                      justify="center"
                      class="text-center text-subtitle-2"
                    >
                      <v-btn small icon color="primary"
                        ><v-icon>mdi-circle-edit-outline</v-icon></v-btn
                      >
                      <v-btn small icon color="primary"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                    </v-col>
                  </v-row>
                  <div class="text-center text-subtitle-2">
                    <v-btn color="primary"
                      ><v-icon>mdi-plus</v-icon> Add Root</v-btn
                    >
                  </div>
                </v-card>
              </div>
            </div>
          </v-card>
          <v-card elevation="10" class="pa-4 my-2">
            <div class="text-center text-h6 ma-3">Other Options</div>
          </v-card>
        </form>
      </div>
      <div class="column is-half">
        <v-container fluid>
          <v-row>
            <v-col cols="12" :class="ismobile ? 'text-center' : 'text-right'">
              <v-btn color="primary" @click="summa"
                >Copy <v-icon>mdi-content-copy</v-icon></v-btn
              >
            </v-col>
            <v-col cols="12">
              <v-textarea
                class="is-maximum"
                no-resize
                height="100%"
                :full-width="true"
                :persistent-hint="true"
                readonly
                autocomplete="off"
                :disabled="true"
                label="Your Template Goes Here"
                :filled="true"
                :outlined="true"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import { mobileChecker } from '../plugins/helpers';
export default {
  data: function () {
    return {
      themes: [
        {
          value: 'carnation',
        },
        {
          value: 'curious-blue',
        },
        {
          value: 'emerald',
        },
        {
          value: 'ice-cold',
        },
        {
          value: 'konifer',
        },
        {
          value: 'netflix-red',
        },
        {
          value: 'kournikova',
        },
        {
          value: 'mona-lisa',
        },
        {
          value: 'persian-rose',
        },
        {
          value: 'purple-heart',
        },
        {
          value: 'purple-mountains-majesty',
        },
        {
          value: 'salmon',
        },
        {
          value: 'selective-yellow',
        },
        {
          value: 'shamrock',
        },
        {
          value: 'witch-haze',
        },
      ],
      variants: [
        {
          value: 'gradient',
        },
        {
          value: 'black',
        },
      ],
      name: '',
      selTheme: '',
      fronturl: '',
      version: 'latest',
      backurl: '',
      hybridpass: '',
      roots: [
        {
          folder_id: '12askjdbaskdbakdb',
          name: 'Glory to Heaven',
          protect_file_link: true,
        },
        {
          folder_id: '12askjdbaskdbakdb',
          name: 'Glory to Heaven',
          protect_file_link: true,
        },
        {
          folder_id: '12askjdbaskdbakdb',
          name: 'Glory to Heaven',
          protect_file_link: true,
        },
      ],
      authCode: '',
      clientId: '',
      clientSec: '',
      variant: '',
      validations: {
        name: function (input) {
          if (input.length > 5) {
            return true;
          } else {
            return false;
          }
        },
        selTheme: function (theme) {
          if (theme.length > 2) {
            return true;
          } else {
            return false;
          }
        },
        fronturl: function (url) {
          const urlRegex = /^(https:\/\/|http:\/\/)(.+)[\S\s][^/]$/;
          if (urlRegex.test(url)) {
            return true;
          } else {
            return false;
          }
        },
        version: function () {
          return true;
        },
        backurl: function (url) {
          const urlRegex = /^(https:\/\/|http:\/\/)(.+)[\S\s][^/]$/;
          if (urlRegex.test(url)) {
            return true;
          } else {
            return false;
          }
        },
        hybridpass: function (hash) {
          if (hash.length > 7) {
            return true;
          } else {
            return false;
          }
        },
        authCode: function (code) {
          if (code.length > 20) {
            return true;
          } else {
            return false;
          }
        },
      },
    };
  },
  methods: {
    summa() {
      console.log(this.roots.length);
      console.log('pressed');
    },
    openAuthWindow() {
      window.open(
        'https://accounts.google.com/o/oauth2/auth?client_id=202264815644.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&approval_prompt=auto',
      );
      return;
    },
  },
  computed: {
    ismobile() {
      return mobileChecker();
    },
  },
};
</script>
