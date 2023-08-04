<template>
  <div class="columns">
    <div class="column">
      <h2 class="is-size-2"><b> Filter </b></h2>
      <div class="columns">
        <div class="column">
          <b-field>
            <b-slider v-model="numbers" :min="1" :max="15" :step="0.5" ticks>
            </b-slider>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSection',
  data() {
    return {
      numbers: [2, 5],
    }
  },
}
</script>
