<template>
  <section class="section pb-1" :class="isSideBarOpen ? 'sidebar-open' : ''">
    <FilterBlock></FilterBlock>
    <ShiftsBlock></ShiftsBlock>
    <SideBar></SideBar>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import SideBar from '@/components/SideBar.vue'
import FilterBlock from '@/components/pageComponents/index/FilterBlock.vue'
import ShiftsBlock from '~/components/pageComponents/index/ShiftsBlock.vue'
export default {
  name: 'IndexPage',
  components: {
    SideBar,
    FilterBlock,
    ShiftsBlock,
  },
  computed: {
    ...mapGetters({
      isSideBarOpen: 'sideBarStatus',
    }),
  },
}
</script>

<style lang="scss">
.sidebar-open {
  transition: margin-left 0.6s;
  position: relative;
  left: -200px;
}
</style>