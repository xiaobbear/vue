<template>
  <div>
    setup
    <div>
      {{myname}} --{{myage}}

      <button @click="handleChange">change</button>
    </div>
  </div>

  <div>我可以有兄弟</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    // console.log('setup')
    const state = reactive({
      myname: 'kerwin',
      myage: 100
    })

    // const myname = reactive('kerwin')
    // const myage = reactive(100)

    const handleChange = () => {
      state.myname = 'xiaoming'
      state.myage = 18
    }

    return {
      ...toRefs(state),
      handleChange
    }
  }
}
</script>
