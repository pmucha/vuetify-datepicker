<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <date-picker />
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import DatePicker from "./components/DatePicker.vue"

export default {
  name: "App",
  components: {
    DatePicker,
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
