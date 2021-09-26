<template>
  <div>
    film

    <ul>
      <li v-for="data in state.list" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster"/>
        <div>{{data.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup () {
    const state = reactive({
      list: []
    })
    const { ctx } = getCurrentInstance()
    console.log(ctx) // ctx.$router 就是 路由对象的实例

    const router = useRouter()

    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=101035',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        state.list = res.data.data.films
      })
    })

    const handleClick = (id) => {
      // console.log(id, this)

      // console.log(ctx)
      // ctx.$router.push(`/detail/${id}`)
      router.push(`/detail/${id}`)
    }

    return {
      state,
      handleClick
    }
  }
}
</script>
<style lang="scss" scoped>
  li{
    overflow: hidden;
    padding:10px;
    img{
      width:100px;
      float:left
    }
  }
</style>
