<template>
  <div>
    <input type="text" v-model="mytext"/>

    <ul>
      <li v-for="data in list" :key="data">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, ref, watch } from 'vue'
export default {
  setup () {
    const mytext = ref('')
    const list = ref([])

    const state = reactive({
      myname: 'kerwin'
    })

    var cachedList = []
    watch(mytext, () => {
      console.log(mytext.value)
      state.myname = mytext.value
      list.value = cachedList.filter(item => item.includes(mytext.value))
    })

    watch(() => state.myname, () => {
      console.log('myname-----', state.myname)
    })

    onMounted(() => {
      fetch('/test.json')
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          list.value = res.list
          cachedList = res.list
        })
    })
    return {
      mytext,
      list
    }
  }
}
</script>
