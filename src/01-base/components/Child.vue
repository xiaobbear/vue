<template>
  <div>
    child--{{count}}--{{mytitle}}
  </div>
</template>

<script>
import { useCount } from '../hooks/useCount'
export default {
  props: ['mytitle'],
  setup () {
    const { count } = useCount()

    return {
      count
    }
  }
}
</script>
