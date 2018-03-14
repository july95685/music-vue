<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot>
			</slot>
		</div>
		<div class="dots">
			<span class="dota" v-for="(item,index) in dots" :class="{active:currentPageIndex === index}"></span>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from '../common/js/dom'

export default {
	data(){
		return {
			dots:[],
			currentPageIndex: 0
		}
	},
	props:{
		loop:{
			type:Boolean,
			default:true
		},
		autoPlay:{
			type:Boolean,
			default:true
		},
		interval:{
			type:Number,
			default:4000
		}
	},
	mounted(){
		setTimeout(()=>{
			this._setSliderWidth();
			this.initDots()
			this._initSlider();

			if(this.autoPlay){
				console.log(112);
	        	this._play()
			}
		},20)
	},
	methods:{
		_setSliderWidth(){
			this.children = this.$refs.sliderGroup.children
			let width = 0;
			let sliderWidth = this.$refs.slider.clientWidth
			for(let i = 0;i<this.children.length;i++){
				let child = this.children[i];
				addClass(child,'slider-item');
				child.style.width = sliderWidth + 'px';
				width += sliderWidth;
			}

			if(this.loop){
				width += 2*sliderWidth
			}
			this.$refs.sliderGroup.style.width = width + 'px'
		},
		initDots(){
			this.dots = new Array(this.children.length);

		},
		_initSlider(){
			this.slider = new BScroll(this.$refs.slider, {
	          scrollX: true,      // 横向滚动
	          scrollY: false,
	          momentum: false,
	          snap: true,
	          snapLoop: this.loop,
	          snapThreshold: 0.3,
	          snapSpeed: 400
	        })

	        this.slider.on('scrollEnd', () => {
	        	let pageIndex = this.slider.getCurrentPage().pageX
	        	if(this.loop){
	        		if(pageIndex == 5){
	        			this.slider.goToPage(0)
	        		}
	        	}
	        	this.currentPageIndex = pageIndex

	        	if(this.autoPlay){
	        		console.log(112);
	        		this._play()
	        	}
	        })

	        this.slider.on('beforeScrollStart',() => {
	        	if(this.autoPlay){
	        		clearTimeout(this.timer)
	        	}
	        })
		},
		_play(){
			let pageIndex = this.currentPageIndex + 1
		
			console.log(this.interval)
			this.timer = setTimeout(() => {
				this.slider.goToPage(pageIndex,0,400)
			},this.interval)
		}

	}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../common/stylus/variable"


	.slider
	    min-height: 1px
	    position: relative
	    .slider-group
	      position: relative
	      overflow: hidden
	      white-space: nowrap
	      .slider-item
	        float: left
	        box-sizing: border-box
	        overflow: hidden
	        text-align: center
	        a
	          display: block
	          width: 100%
	          overflow: hidden
	          text-decoration: none
	        img
	          display: block
	          width: 100%
		.dots
			position: absolute
			left:0
			width:100%
			bottom:12px
			text-align:center
			.dota
				display:inline-block
				margin: 0 4px
				width:8px
				height:8px
				border-radius:50%
				background-color:rgba(255,255,255,0.5)
				&.active
					width:20px
					border-radius:5px
					background: $color-text-ll
</style>