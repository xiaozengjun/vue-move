<!-- 订单页 -->
<template>
    <div class='indent'>
		<TOP class="top" :isshow='isshow' name="订单管理"></TOP>
        <div>订单管理</div>
		<BOTTOM class="bottom" :index = 2></BOTTOM>
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