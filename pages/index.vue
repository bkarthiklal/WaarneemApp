<template>
  <section class="section pb-1" :class="open ? 'sidebar-open' : ''">
    <FilterSection></FilterSection>
    <SideBar v-model="open"></SideBar>
  </section>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import FilterSection from '@/components/pageComponents/index/FilterSection.vue'
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