<template>
  <b-sidebar :fullheight="true" :right="true" v-model="open" class="b-sidebar">
    <div class="sidebar p-5" style="height: 100%">
      <ShiftForm />
    </div>
  </b-sidebar>
</template>

<script>
import { mapGetters } from 'vuex'
import ShiftForm from '@/components/ShiftForm'
export default {
  name: 'SideBar',
  components: {
    ShiftForm,
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapGetters({
      isSideBarOpen: 'sideBarStatus',
    }),
  },
  watch: {
    isSideBarOpen(val) {
      this.open = val
    },
    open(val) {
      this.$store.dispatch('setSideBarStatus', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.b-sidebar {
  ::v-deep {
    .sidebar-content {
      background-color: #ffffff !important;
      width: 500px !important;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
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
  }
}
</style>