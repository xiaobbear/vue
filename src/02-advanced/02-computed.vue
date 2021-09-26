<template>
  <div>
    computed--{{computedname}}
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  setup () {
    const myname = ref('kerwin')
    const computedname = computed(() => myname.value.substring(0, 1).toUpperCase() + myname.value.substring(1))

    const handleChange = () => {
      myname.value = 'xiaoming'
    }
    return {
      myname,
      computedname,
      handleChange
    }
  }
}
</script>
