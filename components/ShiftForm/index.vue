<template>
  <div class="shift-form">
    <!-- Header -->
    <section class="section py-3">
      <h3 class="title is-size-3"><b> Create / Edit </b></h3>
    </section>

    <!-- Content -->
    <section class="section">
      <b-field label="Title">
        <b-input
          v-model="title"
          type="text"
          placeholder="Enter title (max 100 characters)"
          maxlength="100"
          required
          validation-message="Title is required"
        ></b-input>
        <b-icon icon="calendar" size="is-small" slot="icon"></b-icon>
      </b-field>

      <b-field label="Description">
        <b-input
          v-model="description"
          type="textarea"
          placeholder="Enter description (max 500 characters)"
          maxlength="500"
        ></b-input>
      </b-field>

      <b-field label="Dates">
        <b-datepicker
          placeholder="Click to select..."
          v-model="dates"
          multiple
          :date-formatter="dateArrayFormatter"
          @input="dateModifier"
        >
        </b-datepicker>
      </b-field>
      <template v-for="date in Object.keys(shiftsDates)">
        <ShiftDataCard
          :key="date"
          v-model="shiftsDates[date]"
          @delete="removeDate"
        />
      </template>
    </section>

    <!-- Footer -->
    <section class="section py-3 fixed-bottom">
      <div class="columns">
        <div class="column is-flex is-justify-content-space-around">
          <b-button style="min-width: 145px" active class="is-dark is-outlined"
            >Delete</b-button
          >
        </div>
        <div class="column is-flex is-justify-content-space-around">
          <b-button style="min-width: 145px" class="is-dark">Save</b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ShiftDataCard from './ShiftDataCard.vue'
export default {
  name: 'ShiftForm',
  components: {
    ShiftDataCard,
  },
  data() {
    return {
      title: '',
      description: '',
      dates: [],
      shiftsDates: {},
    }
  },
  watch: {},
  methods: {
    dateModifier(dates) {
      const dateArray = dates.map((date) => this.dateFormatter(date))
      dateArray.forEach((formattedDate) => {
        if (!this.shiftsDates[formattedDate]) {
          this.$set(this.shiftsDates, formattedDate, {
            id: new Date().getTime(),
            date: formattedDate,
            startTime: '',
            endTime: '',
            price: '',
            type: '',
          })
        }
      })
      Object.keys(this.shiftsDates).forEach((key) => {
        if (!dateArray.includes(key)) {
          this.$delete(this.shiftsDates, key)
        }
      })
    },
    dateArrayFormatter(dateArray) {
      return dateArray.map((date) => this.dateFormatter(date))
    },
    dateFormatter(dateString) {
      const date = new Date(dateString)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}-${month}-${year}`
    },
    removeDate(date) {
      if (this.shiftsDates[date]) {
        // delete this.shiftsDates[date]
        this.$delete(this.shiftsDates, date)
      }
      const formattedDates = Object.keys(this.shiftsDates)
      const dateArray = this.dates
        .map((date) => {
          const formattedDate = this.dateFormatter(date)
          if (formattedDates.includes(formattedDate)) {
            return date
          }
          return false
        })
        .filter(Boolean)
      this.dates = dateArray
    },
  },
}
</script>
<style lang="scss" scoped>
.section {
  padding: 0.5rem 0rem;
}
</style>