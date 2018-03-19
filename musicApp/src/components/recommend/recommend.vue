<template>
	<div class="rec" v-if="recommends.length">
		推荐
		<silder :loop="false">
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
import axios from 'axios'
export default {
	data(){
		return {
			recommends:[]
		}
	},
	created(){
		console.log('created');
		this._getRecommend();
		this.getDiscList();
	},
	methods:{
		_getRecommend(){
			getRecommend().then((res) => {
				console.log(1111);
				if(res.code == 0){
					this.recommends = res.data.slider
				}else{
					console.log('error')
				}
			})
		},
		getDiscList(){
			console.log('getDiscList')
			const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
			const data = Object.assign({}, {
				g_tk:5381,
				loginUin:0,
				hostUin:0,
				format:'jsonp',
				inCharset:'utf8',
				outCharset:'utf-8',
				notice:0,
				platform:'yqq',
				needNewCode:0,
				data:'{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"music.web_album_library","method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":40,"click_albumid":0}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}'
			})


		    axios.get(url, data).then(function (response) {
		        // response.data中获取ResponseData实体
		        console.log(response)
		    }).catch(function (error) {
		        // 发生错误
		    });
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