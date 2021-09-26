<template>
  <div>
    child-hooks-{{mytitle}}-{{mytext}}
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  props: ['mytitle'],
  setup (props) {
    // console.log(props.mytitle)
    const mytext = ref(props.mytitle + '11111111111111111')

    return {
      mytext
    }
  }
}
</script>
