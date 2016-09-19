<template>
  <div class="hello col-xs-6">
    <form role="form">
      <div class="form-group">
        <label>姓名</label>
        <input v-model="username" type="text" class="form-control" placeholder="请填写姓名">
      </div>
      <div class="form-group">
        <label>留言</label>
        <textarea v-model="massage" class="form-control" rows="3" placeholder="请填写评论"></textarea>
      </div>
      <div class="btn btn-success" @click="addItem">提交</div>
    </form>
  </div>
</template>

<script>
  import {increment} from '../vuex/action'
  console.log(increment)
  export default {
    data () {
      return {
        username: '',
        massage: ''
      }
    },
    methods: {
      addItem () {
        const self = this
        const obj = {
          username: self.username,
          massage: self.massage,
          id: parseInt(Math.random() * 100)
        }
        this.increment(obj)
      }
    },
    vuex: {
      actions: {
        increment
      }
    }
  }
</script>
<style scoped>

</style>
