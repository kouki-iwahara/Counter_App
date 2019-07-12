<template>
  <div>
    <p>カウントが共有される{{ commonCount }}</p>
    <button @click="divide">÷2</button><br>
    --------<br>
    <p>カウントが独立している{{ count }}</p>
    <button @click="decrement">1down</button>
</div>
</template>

<script>
export default {
  name: 'DownCounterForm',
  data() {
    return {
      count: 10
    }
  },
  computed: {
    commonCount() {
      return this.$store.state.commonCount
    }
  },
  methods: {
    divide() {
      this.$store.commit('divide')
    },
    decrement() {
      this.count--
    }
  }
}
</script>

