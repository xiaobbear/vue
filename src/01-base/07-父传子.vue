<template>
  <div>
    parent

    <childhooks mytitle="首页"></childhooks>
  </div>
</template>
<script>
import childhooks from '../01-base/components/ChildHooks'
export default {
  components: {
    childhooks
  }
}
</script>
