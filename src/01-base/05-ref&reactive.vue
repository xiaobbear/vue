<template>
  <div>
    <button @click="handleMinus">-</button>
      {{state.count}}
    <button @click="handleAdd">+</button>

    <child></child>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useCount } from './hooks/useCount'
import child from './components/Child'
export default {
  components: {
    child
  },
  setup () {
    const { count, handleMinus, handleAdd } = useCount()

    const state = reactive({
      name: 'aaaa',
      age: 100,
      count
    })
    return {
      state,
      handleMinus,
      handleAdd
    }
  }
}
</script>
