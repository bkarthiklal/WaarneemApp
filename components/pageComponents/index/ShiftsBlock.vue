<template>
  <div>
    <div class="columns">
      <div class="column">
        <h2 class="is-size-2"><b> Shifts </b></h2>
      </div>
      <div class="column is-right has-text-right">
        <b-button type="is-dark" @click="openSideBar" class="is-clickable"
          >Add Shift</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShiftsSections',
  methods: {
    openSideBar() {
      this.$store.dispatch('setSideBarStatus', true)
    },
  },
}
</script>
