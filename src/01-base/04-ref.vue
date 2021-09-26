<template>
  <div>
    ref-{{myname}}-{{myage}}

    <button @click="handleChange">change</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const myname = ref('kerwin')
    const myage = ref(100)

    const handleChange = () => {
      // console.log(myname)
      myname.value = 'xiaoming'
      myage.value = 18
    }
    return {
      myage,
      myname,
      handleChange
    }
  }
}
</script>
