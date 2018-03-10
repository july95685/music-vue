<template>
	<div class="m-header">
		<div class="icon"></div>
		<h1 class="text">Chicken Music</h1>
	</div>
</template>

<script>
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../common/stylus/variable"

	.m-header
		width:100%
		text-align:center
		height:44px
		.icon
			background-size:100% 100%
			display:inline-block
			width:30px;
			height:32px;
			margin-top:6px
			margin-right:9px
			background-image:url('../common/image/default.png')
		.text
			vertical-align:top
			line-height:44px
			display:inline-block
			color:$color-theme
			font-size:18px
</style>