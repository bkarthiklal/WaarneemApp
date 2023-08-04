<template>
  <section class="section pb-1" :class="open ? 'sidebar-open' : ''">
    <FilterBlock></FilterBlock>
    <SideBar v-model="open"></SideBar>
  </section>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import FilterBlock from '@/components/pageComponents/index/FilterBlock.vue'
export default {
  name: 'IndexPage',
  components: {
    SideBar,
    FilterSection,
  },
  data() {
    return {
      open: false,
    }
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