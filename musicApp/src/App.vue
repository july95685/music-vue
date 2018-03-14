<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header'
import Tab from './components/tab'
export default {
  name: 'App',
  components:{
  	Header,Tab
  }
}
</script>

<style>
@import "common/stylus/icon.styl"
</style>
