<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <h1 class="font-weight-light mb-10">Vuetify Date Picker</h1>
      </v-row>

      <v-row justify="center">
        <date-picker
          :config="config"
          @change="datePickerChanged"
        />
      </v-row>

      <v-row justify="center" class="mt-7">
        <date-picker
          :config="secondConfig"
          icon-color="white"
          class="primary white--text elevation-3"
          @change="datePickerChanged"
        />
      </v-row>

      <v-row justify="center" class="mt-7">
        <date-picker
          :config="thirdConfig"
          icon-color="white"
          class="orange darken-3 white--text elevation-0"
          @change="datePickerChanged"
        />
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import DatePicker from "./components/DatePicker.vue"

export default {
  components: { DatePicker },
  name: "App",

  data: () => ({
    config: {
      dateStart: "2020-01-05",
      dateUntil: "2020-01-07",
      compareStart: "2019-01-01",
      compareUntil: "2019-01-07",
      compare: true,
    },
    secondConfig: {
      dateStart: "2009-02-20",
      dateUntil: "2009-02-28",
      compareStart: "2009-02-01",
      compareUntil: "2009-02-07",
      compare: true,
    },
    thirdConfig: {
      dateStart: "2020-12-03",
      dateUntil: "2020-12-07",
      compareStart: "2020-11-26",
      compareUntil: "2020-11-27",
      compare: true,
    },
  }),

  methods: {
    datePickerChanged (val) {
      console.log("[App @datePickerChanged] val:", JSON.stringify(val, null, 2))
    },
  },
} // export
</script>


<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} // #app
</style>
