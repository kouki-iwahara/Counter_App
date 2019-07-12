<template>
  <div>
    <p>カウントが共有される{{ commonCount }}</p>
    <button @click="multiply">×2</button><br>
    --------<br>
    <p>カウントが独立している{{ count }}</p>
    <button @click="increment">1up</button>
</div>
</template>

<script>
export default {
  name: 'UpCounterForm',
  data() {
    return {
      count: 10
    }
  },
  computed: {
    commonCount() {
      // storeから参照
      return this.$store.state.commonCount
    }
  },
  methods: {
    multiply() {
      // storeから参照
      this.$store.commit('multiply')
    },
    increment() {
      this.count++
    }
  }
}
</script>

