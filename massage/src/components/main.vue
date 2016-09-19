<template>
  <div class="container">
    <h1 class="title">vue留言本</h1>
    <add-massage></add-massage>
    <list></list>
  </div>
</template>
<script>
  import addMassage from './add-massage'
  import list from './list'
  import store from '../vuex/store'
  export default {
    components: {
      addMassage,
      list
    },
    store
  }
</script>

<style scoped>
  .title{
    padding: 10px 0;
    text-align: center;
  }
</style>
