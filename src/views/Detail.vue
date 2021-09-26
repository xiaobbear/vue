<template>
  <div>
    detail
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    // 获取列表页面传来的id,利用此id进行数据请求
    const route = useRoute()
    const store = useStore()
    onMounted(() => {
      console.log(route.params.id)

      store.commit('hide')
    })

    onUnmounted(() => {
      store.commit('show')
    })
  }
}
</script>
