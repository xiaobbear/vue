<template>
  <div>
    <input type="text" v-model="mytext"/>

    <ul>
      <li v-for="data in computedlist" :key="data">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
export default {
  setup () {
    const mytext = ref('')
    const list = ref([])

    const computedlist = computed(() => {
      const newlist = list.value.filter(item => item.includes(mytext.value))
      return newlist
    })
    onMounted(() => {
      fetch('/test.json')
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          list.value = res.list
        })
    })
    return {
      mytext,
      computedlist
    }
  }
}
</script>
