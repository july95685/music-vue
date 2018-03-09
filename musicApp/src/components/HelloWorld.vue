<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <i class="icon-back"></i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../common/stylus/variable"
@import "../common/stylus/mixin"

.hello
  background: $f7f7f7;
  h2
    color:red;
  .icon-back
    display: block
    padding: 10px
    font-size: $font-size-large-x
    color: $color-theme
</style>