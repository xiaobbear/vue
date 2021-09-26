<template>
  <div>
    lifecycel-{{myname}}
    <button @click="handleClick()">click</button>
  </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
export default {
  setup () {
    // 状态，

    // 注册回调
    onMounted(() => {
      // new Swiper
      console.log('onMounted')
    })

    onUpdated(() => {
      console.log('onupdated')
    })

    onUnmounted(() => {
      console.log('onUnmounted', '销毁定时器，取消订阅')
    })

    const myname = ref('kerwin')
    const handleClick = () => {
      myname.value = 'xiaoming'
    }

    return {
      myname,
      handleClick
    }
  }
}
</script>
