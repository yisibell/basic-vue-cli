<template>
  <div class="box">
      {{msg}}
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
      return {
          msg: "这是我的第一个单文件组件的vue项目"
      }
  }
}
</script>

<style>
    .box{
        width: 100px;
        height: 100px;
        background-color: deeppink;
    }
</style>


