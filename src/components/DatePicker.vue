<template>
  <v-container>
    <v-row justify="center">
      Selected: {{ this.picker1[0] }} to {{ this.picker1[1] }}
      <span v-if="compare" class="pl-5">compared to: {{ this.picker2[0] }} to {{ this.picker2[1] }}</span>
    </v-row>

    <v-row justify="center">
      <v-checkbox v-model="compare" label="Display picker for comparison"></v-checkbox>
    </v-row>

    <v-row justify="center">
      <v-date-picker v-model="picker1" no-title first-day-of-week="1" range color="blue darken-2" :picker-date.sync="pickerDate11" class="picker1 pr-1" />
      <v-date-picker v-model="picker1" no-title first-day-of-week="1" range color="blue darken-2" :picker-date.sync="pickerDate12" class="picker2" header-color="orange darken-3" />
    </v-row>
    <v-row justify="center" class="picker-secondary" v-if="compare">
      <v-date-picker v-model="picker2" no-title show-current="false" first-day-of-week="1" range color="orange darken-4" :picker-date.sync="pickerDate11" class="picker1 pr-1" />
      <v-date-picker v-model="picker2" no-title show-current="false" first-day-of-week="1" range color="orange darken-4" :picker-date.sync="pickerDate12" class="picker2" header-color="orange darken-3" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DatePicker",

  props: {
    // foo: String,
  },

  data () {
    return {
      compare: false,

      picker1: [], // to use moment.js this has to be set in mounted()
      picker2: [], // to use moment.js this has to be set in mounted()
      pickerDate11: null,
      pickerDate12: null,
      pickerDate21: null,
      pickerDate22: null,
    }
  },

  mounted () {
    this.picker1 = [this.$moment().subtract(1, "week").format("YYYY-MM-DD"), this.$moment().format("YYYY-MM-DD")]
    this.picker2 = [this.$moment().subtract(3, "week").subtract(2, "day").format("YYYY-MM-DD"), this.$moment().subtract(2, "week").subtract(5, "day").format("YYYY-MM-DD")]
  },

  watch: {
    pickerDate11: function (val) {
      this.pickerDate12 = this.$moment(val).add(1, "month").format("YYYY-MM-DD")
    },
    pickerDate12: function (val) {
      this.pickerDate11 = this.$moment(val).subtract(1, "month").format("YYYY-MM-DD")
    },
    pickerDate21: function (val) {
      this.pickerDate22 = this.$moment(val).add(1, "month").format("YYYY-MM-DD")
    },
    pickerDate22: function (val) {
      this.pickerDate21 = this.$moment(val).subtract(1, "month").format("YYYY-MM-DD")
    },
  },
}
</script>


<style lang="scss">
@media (min-width: 760px) {
  .picker1 .v-date-picker-header > button:nth-of-type(2) {
    display: none;
  }

  .picker2 .v-date-picker-header > button:nth-of-type(1) {
    display: none;
  }

  .picker-secondary {
    transform: translateY(-100%);
    // opacity: 0.75;

    .v-date-picker-header {
      opacity: 0;
    }

    .v-date-picker-table {
      thead {
        opacity: 0;
      }

      button:not(.orange) {
        color: transparent;
      }
    }

    > .v-picker {
      background-color: transparent !important;
      > .v-picker__body {
        background-color: transparent !important;
      }
    }
  }
}
</style>
