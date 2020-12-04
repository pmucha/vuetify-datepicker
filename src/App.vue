<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <date-picker v-if="!this.$vuetify.breakpoint.mobile" />
        <date-picker-mobile v-else />
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import DatePicker from "./components/DatePicker.vue"
import DatePickerMobile from "./components/DatePickerMobile.vue"

export default {
  name: "App",
  components: {
    DatePicker,
    DatePickerMobile,
  },

  mounted () {
    console.log(this.$vuetify.break)
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
