/**
 * @file
 * @author 何文林
 * @date 16/9/18
 */
<template>
  <div class="container">
    <h2>评论详情</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list | ss">
        <h4>{{item.username}}</h4>
        <p>{{item.massage}}</p>
      </li>
    </ul>
  </div>
</template>
<style>

</style>
<script>
  import store from '../vuex/store'
  import {getList} from '../vuex/getters'
  export default{
    store,
    ready () {
      this.$watch('list', (data) => {
        console.log(data)
      }, {deep: true})
    },
    filters: {
      ss (value) {
        const id = this.$route.params.id
        const arr = value.filter((item, index) => {
          return (item.id + '') === id
        })
        return arr
      }
    },
    vuex: {
      getters: {
        list: getList
      }
    }
  }
</script>
