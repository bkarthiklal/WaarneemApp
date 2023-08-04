<template>
  <div class="shift-card mb-2">
    <!-- Shift Card  -->
    <div class="columns pb-4 pr-4">
      <div class="column box">
        <div class="columns is-vcentered px-4">
          <div class="column is-11 is-size-3">{{ shift.title }}</div>
          <div class="column is-1 is-clickable has-text-right">
            <b-icon icon="pencil" @click.native="initEditShift"> </b-icon>
          </div>
        </div>
        <div class="columns px-4">
          <div class="column is-12">
            <div class="columns">
              <div class="column">
                <h3 class="is-size-4">{{ shift.description }}</h3>
              </div>
            </div>
            <!-- list block  -->
            <template v-for="(shiftInfo, ix) in shiftList">
              <div class="columns px-4 pb-2" :key="`${shift.id}_${ix}`">
                <div class="column">
                  <div class="columns is-vcentered bg-black">
                    <div class="column is-12">
                      <div class="columns is-dark is-text-white">
                        <div class="column is-3">{{ shiftInfo.date }}</div>
                        <div class="column is-2">{{ shiftInfo.startTime }}</div>
                        <div class="column is-2">{{ shiftInfo.endTime }}</div>
                        <div class="column is-3">{{ shiftInfo.type }}</div>
                        <div class="column is-2 has-text-right">
                          € {{ shiftInfo.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="columns" style="min-height: 30px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShiftCard',
  props: {
    shift: {
      type: Object,
      default: () => {
        return {
          id: '1',
          title: 'Title',
          description: 'Description',
          shifts: [
            {
              date: '12 Dec 2022',
              startTime: '00:25',
              endTime: '16:30',
              type: 'Driver',
              price: '75',
            },
            {
              date: '13 Dec 2022',
              startTime: '00:45',
              endTime: '16:45',
              type: 'Consultant',
              price: '175',
            },
            {
              date: '12 Dec 2022',
              startTime: '00:25',
              endTime: '16:30',
              type: 'Driver',
              price: '75',
            },
            {
              date: '13 Dec 2022',
              startTime: '00:45',
              endTime: '16:45',
              type: 'Consultant',
              price: '175',
            },
          ],
        }
      },
    },
  },
  computed: {
    shiftList() {
      return Object.values(this.shift.shifts).map((shift) => {
        function startTime(startTime) {
          const hours = new Date(startTime).getHours()
          const minutes = new Date(startTime).getMinutes()
          return `${hours}:${minutes}`
        }
        function endTime(endTime) {
          const hours = new Date(endTime).getHours()
          const minutes = new Date(endTime).getMinutes()
          return `${hours}:${minutes}`
        }
        return {
          ...shift,
          startTime: startTime(shift.startTime),
          endTime: endTime(shift.endTime),
        }
      })
    },
  },
  methods: {
    initEditShift() {
      this.$store.dispatch('setSideBarStatus', true)
    },
  },
}
</script>

<style lang="scss">
.bg-black {
  background-color: #494948;
  color: white;
  border-radius: 10px;
  .label {
    color: white;
  }
}
</style>