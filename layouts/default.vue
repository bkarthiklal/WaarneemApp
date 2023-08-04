<template>
  <div>
    <section class="main-content columns">
      <div class="container column is-9">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.main-content {
  background-color: #f8f8f8;
  min-height: 100vh;
}
</style>