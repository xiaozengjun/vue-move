<!-- 头部导航 -->
<template>
    <div v-if="!isshow" class='top'>
        <van-nav-bar
            :title="name"
            :left-arrow = "goShow"
            :fixed = true
            @click-left="onClickLeft"
            />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '易过论文'
        },
        goShow: {
            type: Boolean,
            default: false
        },
        isshow: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
        };
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);//返回上一层
        }
    },
}
</script>
