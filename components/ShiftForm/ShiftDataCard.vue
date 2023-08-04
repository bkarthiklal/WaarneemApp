<template>
  <div class="container mt-6 mb-3">
    <div class="is-flex is-justify-content-space-between">
      <div>
        <h4 class="is-4">
          <b> {{ shiftData.date }} </b>
        </h4>
      </div>
      <div>
        <b>
          <b-icon
            icon="close"
            size="is-default"
            class="is-clickable"
            @click.native="deleteShift"
          ></b-icon>
        </b>
      </div>
    </div>
    <div class="bg-black mt-5 px-3">
      <div class="columns">
        <div class="column is-4">
          <b-field label="Start Time">
            <b-timepicker
              v-model="shiftData.startTime"
              class="has-text-white"
              placeholder=""
              icon-right="clock"
              :incrementMinutes="minutesGranularity"
              :incrementHours="hoursGranularity"
              :hour-format="'24'"
              required
              validation-message="Is required"
            >
            </b-timepicker>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="End Time">
            <b-timepicker
              v-model="shiftData.endTime"
              class="has-text-white"
              placeholder=""
              icon-right="clock"
              :incrementMinutes="minutesGranularity"
              :incrementHours="hoursGranularity"
              :hour-format="'24'"
              required
              validation-message="Is required"
            >
            </b-timepicker>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="Price">
            <b-input
              v-model="shiftData.price"
              icon-right="currency-eur"
              placeholder=""
              type="number"
              required
              validation-message="Is required"
            >
            </b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column mb-3">
          <b-field label="Type">
            <b-select placeholder="" expanded v-model="shiftData.type">
              <option value="Consultant">Consultant</option>
              <option value="Telephone">Telephone</option>
              <option value="Driver">Driver</option>
            </b-select>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      shiftData: {
        id: '',
        date: '',
        startTime: '',
        endTime: '',
        price: '',
        type: '',
      },
      minutesGranularity: 15,
      hoursGranularity: 1,
    }
  },
  watch: {
    value: {
      handler(newValue) {
        if (newValue) {
          this.shiftData = newValue
        }
      },
      immediate: true,
    },
    shiftData: {
      handler(newValue) {
        this.$emit('input', newValue)
      },
      deep: true,
    },
  },
  methods: {
    deleteShift() {
      this.$emit('delete', this.shiftData.date)
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .dropdown-trigger {
    .control {
      right: 0 !important;
    }
    .icon {
      right: 0 !important;
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
}
</style>