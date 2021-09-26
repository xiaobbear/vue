<template>
  <div>
    <input ref="mytext"/>
    <button @click="handleAdd">add</button>

    <ul>
      <li v-for="(data,index) in state.datalist" :key="data">
        {{data}}-<button @click="handleDel(index)">del</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  setup () {
    const state = reactive({
      datalist: ['1111', '222', '3333']
    })

    const mytext = ref('')

    const handleAdd = () => {
      console.log(mytext.value.value)
      state.datalist.push(mytext.value.value)
      // console.log(state.mytext)

      mytext.value.value = ''
    }

    const handleDel = (index) => {
      console.log(index)
      state.datalist.splice(index, 1)
    }
    return {
      mytext,
      state,
      handleAdd,
      handleDel
    }
  }
}
</script>
