<template>
		<div class="tab">
			<router-link class="tab-item" tag="div" to="/recommend">
				<span class="tab-link">推荐</span>
			</router-link>
			<router-link class="tab-item" tag="div" to="/singer">
				<span class="tab-link">歌手</span>
			</router-link>
			<router-link class="tab-item" tag="div" to="/rank">
				<span class="tab-link">排行</span>
			</router-link>
			<router-link class="tab-item" tag="div" to="/search">
				<span class="tab-link">搜索</span>
			</router-link>
		</div>
</template>

<script>
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../common/stylus/variable"
	.tab
		display:flex
		justify-content:space-around
		.tab-item
			color:$color-text-l
			font-size:16px
			font-weight:700
			height:30px
			line-height:30px
		.router-link-active
			border-bottom:2px solid $color-theme
			color:$color-theme

</style>