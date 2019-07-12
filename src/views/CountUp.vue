<template>
  <div>
    <h2>カウントアップ</h2>
    <up-counter-form/> <!-- コンポーネント'UpCounterForm' -->
    *********************<br>
    <up-counter-form/>
  </div>
</template>

<script>
// componentsの'UpCounterForm'を読み込む
import UpCounterForm from '@/components/UpCounterForm.vue'

export default {
  name: 'CountUp',
  components: {
    UpCounterForm
  }
}
</script>