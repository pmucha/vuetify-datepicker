<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="font-weight-light">Vuetify Date Picker</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-btn x-small class="ma-2 primary">X-small</v-btn>
        <v-btn small class="ma-2 primary">Small</v-btn>
        <v-btn class="ma-2 secondary">Normal</v-btn>
        <v-btn large class="ma-2 success">Large</v-btn>
        <sub-component class="white elevation-0" />
        <v-btn x-large class="ma-2 success">X-large</v-btn>
      </v-row>

      <v-row>
        <v-btn class="ma-2 secondary">Normal</v-btn>
        <sub-component />
        <v-btn large class="ma-2 success">Large</v-btn>
        <v-btn x-large class="ma-2 success">X-large</v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import SubComponent from "./components/SubComponent.vue"
export default {
  components: { SubComponent },
  name: "App",
} // export
</script>


<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} // #app
</style>
