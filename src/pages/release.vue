<!-- 下单页 -->
<template>
    <div class='release'>
		<TOP class="top" :isshow='isshow' name="发布订单"></TOP>
        <div>下单页</div>
		<BOTTOM class="bottom" :index = 1></BOTTOM>
    </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
export default {
	components: {
		TOP:top,
		BOTTOM:bottom,
	},
    props: {},
    data () {
        return {
            
        };
    },
    created() {
        
    },
    methods: {
        
    },
    watch: {},
    computed: {},
}
</script>

<style lang='less' scoped>
    
</style>