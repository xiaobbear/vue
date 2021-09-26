import { ref } from 'vue'
function useCount () {
  const count = ref(0)
  const handleMinus = () => {
    count.value--
  }
  const handleAdd = () => {
    count.value++
  }
  return {
    count,
    handleMinus,
    handleAdd
  }
}
// 自定义hooks
export { useCount }
