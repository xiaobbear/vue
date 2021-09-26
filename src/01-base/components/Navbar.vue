<template>
  <div>
    navbar-<button @click="handleClick">navbar-click</button>
  </div>
</template>
<script>
export default {
  setup (props, { emit }) {
    // console.log(emit)
    const handleClick = () => {
      emit('kerwinevent')
    }

    return {
      handleClick
    }
  }
}
</script>
