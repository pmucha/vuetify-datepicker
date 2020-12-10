<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <date-picker-desktop v-if="this.$vuetify.breakpoint.mdAndUp" />
        <date-picker-tablet v-else-if="this.$vuetify.breakpoint.smAndUp" />
        <date-picker-mobile v-else />
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import DatePickerDesktop from "./components/DatePickerDesktop.vue"
import DatePickerTablet from "./components/DatePickerTablet.vue"
import DatePickerMobile from "./components/DatePickerMobile.vue"

export default {
  name: "App",
  components: {
    DatePickerDesktop,
    DatePickerTablet,
    DatePickerMobile,
  },

  mounted () {
    console.log(this.$vuetify.breakpoint)
  },
}
</script>


<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
