<template>
  <div>
    <h2>カウントダウン</h2>
    <down-counter-form/>
    *********************<br>
    <down-counter-form/>
  </div>
</template>

<script>
import DownCounterForm from '@/components/DownCounterForm.vue'

export default {
  name: 'CountDown',
  components: {
    DownCounterForm
  }
}
</script>

