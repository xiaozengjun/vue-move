<!-- 首页  -->
<template>
	<div class='index'>
		<TOP class="top" :isshow='isshow' name="会员中心首页"></TOP>
		<MAIN :class="!isshow?'mianS':''"></MAIN>
		<BOTTOM class="bottom" :index = 0></BOTTOM>
	</div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import main from '../components/indexMain.vue';
export default {
	components: {
		TOP:top,
		BOTTOM:bottom,
		MAIN:main,
	},
	data () {
		return {
			isshow: this.$store.state.browsers=='微信浏览器'
		};
	},
}
</script>

<style lang='less' scoped>
	.index {
		position: relative;
		background: #f6f6f6;
		.mianS {
			margin-top: 46px;
		}
	}
</style>
