<template>
  <div id="nav" v-show="$store.state.isShow">
      <ul>
        <router-link to="/film" active-class="active">film</router-link>
        <router-link to="/cinema" active-class="active">cinema</router-link>
        <router-link to="/center" active-class="active">center</router-link>
      </ul>
  </div>
  <router-view/>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
  .active{
    color:red;
  }
</style>
