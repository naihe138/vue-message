/**
 * @file
 * @author 何文林
 * @date 16/9/18
 */
<template>
    <div id="list" class="col-xs-6">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in list">
          <h4>{{item.username}}</h4>
          <p>{{item.massage}}</p>
          <a v-link="'/detail/' + item.id">详细>></a>
        </li>
      </ul>
    </div>
</template>
<style>
  #list li{
    overflow: hidden;
  }
  .list-group{
    padding-top: 24px;
  }
  #list a{
    float: right;
  }
</style>
<script>
  import {getList} from '../vuex/getters'
  export default{
    ready () {
      console.log(this.list)
      this.$watch('list', function (data) {
        console.log(data)
      }, {deep: true})
    },
    vuex: {
      getters: {
        // 注意在这里你需要 `getList` 函数本身而不是它的执行结果 'getList()'
        list: getList
      }
    }
  }
</script>
