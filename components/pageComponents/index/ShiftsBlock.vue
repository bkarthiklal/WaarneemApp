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
    <div class="column scrollHeight customScrollBar">
      <template v-if="(shifts || []).length > 0">
        <ShiftCard v-for="shift in shifts" :key="shift.id" :shift="shift" />
      </template>
      <template v-else>
        <div class="columns">
          <div
            class="column mb-3 is-flex is-justify-content-space-around has-text-danger"
          >
            No Shifts Added
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShiftCard from '~/components/ShiftCard.vue'
export default {
  name: 'ShiftsSections',
  components: {
    ShiftCard,
  },
  computed: {
    ...mapGetters({
      shifts: 'getShifts',
    }),
  },
  methods: {
    openSideBar() {
      this.$store.dispatch('setSideBarStatus', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.scrollHeight {
  max-height: 73vh;
}
.customScrollBar {
  width: 100%;
  height: auto;
  float: left;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
}
</style>