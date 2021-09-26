<template>
  <div>
    <input v-model="state.mytext"/>
    <button @click="handleAdd">add</button>

    <ul>
      <li v-for="(data,index) in state.datalist" :key="data">
        {{data}}-<button @click="handleDel(index)">del</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      mytext: '',
      datalist: ['1111', '222', '3333']
    })

    const handleAdd = () => {
      console.log(state.mytext)
      state.datalist.push(state.mytext)

      state.mytext = ''
    }

    const handleDel = (index) => {
      console.log(index)
      state.datalist.splice(index, 1)
    }
    return {
      state,
      handleAdd,
      handleDel
    }
  }
}
</script>
