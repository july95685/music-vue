<template>
	<div class="rec" v-if="recommends.length">
		推荐
		<silder >
			<div v-for="item in recommends">
				<a :href="item.linkUrl">
					<img :src="item.picUrl" />
				</a>
			</div>
		</silder>
	</div>
</template>

<script>
import {getRecommend} from '../../api/recommend'
import silder from '../slider'
export default {
	data(){
		return {
			recommends:[]
		}
	},
	created(){
		console.log('created');
		this._getRecommend();
	},
	methods:{
		_getRecommend(){
			getRecommend().then((res) => {
				console.log(res);
				if(res.code == 0){
					console.log(res.data.slider);
					this.recommends = res.data.slider
				}else{
					console.log('error')
				}
			})
		}
	},
	components:{
		silder
	}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.rec
		overflow:hidden
</style>