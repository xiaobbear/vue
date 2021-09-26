<template>
  <div>
    <navbar @kerwinevent="handleChange"/>
    <!-- <button @click="state.isShow=!state.isShow">parent-click</button> -->
    <sidebar v-if="state.isShow"/>
  </div>
</template>

<script>
import { reactive } from 'vue'
import navbar from '../01-base/components/Navbar'
import sidebar from '../01-base/components/Sidebar'
export default {
  components: {
    navbar,
    sidebar
  },
  setup () {
    const state = reactive({
      isShow: false
    })

    const handleChange = () => {
      state.isShow = !state.isShow
    }
    return {
      state,
      handleChange
    }
  }
}
</script>
