<template>
  <div class="content mx-2 my-2">
    <h5 class="has-text-centered subtitle">Generate Your Template Now</h5>
    <div class="columns is-multiline is-centered">
      <div class="column is-half my-2">
        <form autocomplete="off">
          <div class="columns is-desktop is-multiline is-centered">
            <div class="column is-half">
              <v-text-field
                prepend-icon="mdi-form-textbox"
                dense
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
              <v-text-field
                prepend-icon="mdi-web"
                dense
                v-model="fronturl"
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
                :persistent-hint="true"
                :success="validations.version()"
                hint="Latest Version will be Served"
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
                :persistent-hint="true"
                :success="validations.hybridpass(hybridpass)"
                hint="If You have Deployed the Backend and Generated Put Here or Leave it Blank"
                label="Hybrid Password"
                hide-details="auto"
                outlined
              ></v-text-field>
            </div>
            <div class="column is-full">
              <div class="columns is-multiline is-centered is-vcentered">
                <div
                  :class="
                    ismobile
                      ? 'column is-one-third has-text-centered'
                      : 'column is-one-third'
                  "
                >
                  <v-btn small color="info" @click="openAuthWindow">
                    Get Authorization Code
                  </v-btn>
                </div>
                <div class="column is-two-thirds">
                  <v-text-field
                    prepend-icon="mdi-passport"
                    dense
                    v-model="authCode"
                    type="password"
                    :persistent-hint="true"
                    :success="validations.authCode(authCode)"
                    hint="Enter the Auth Code that You Generated with the Button"
                    label="Authorization Code"
                    :hide-details="true"
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <v-text-field
                prepend-icon="mdi-card-account-details-outline"
                dense
                v-model="clientId"
                :persistent-hint="true"
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
                :persistent-hint="true"
                :success="validations.name(clientSec)"
                hint="Enter Your Client Secret that was given in Google developer Console"
                label="Client Secret"
                hide-details="auto"
                outlined
              ></v-text-field>
            </div>
          </div>
        </form>
      </div>
      <div class="column is-half">
        <v-container fluid>
          <div class="has-text-right">
            <v-btn text class="has-text-right" @click="summa"
              >Copy <v-icon>mdi-content-copy</v-icon></v-btn
            >
          </div>
          <v-textarea
            class="is-maximum"
            no-resize
            height="100%"
            :full-width="true"
            :persistent-hint="true"
            readonly
            :disabled="true"
            label="Your Template Goes Here"
            :filled="true"
            :outlined="true"
          ></v-textarea>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
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
      name: '',
      selTheme: '',
      fronturl: '',
      version: 'latest',
      backurl: '',
      hybridpass: '',
      authCode: '',
      clientId: '',
      clientSec: '',
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
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 966) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
