<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components:{
  	Header
  }
}
</script>

<style>
@import "common/stylus/icon.styl"
</style>
