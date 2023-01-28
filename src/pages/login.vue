<!-- login登录 -->
<template>
    <div class='login'>
        <div class="hider">
            <h3>欢迎来到花点萌</h3>
            <p>全产业链服务平台</p>
        </div>
        <div class="loginMain">
            <p>账号密码登录</p>
            <i></i>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
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
    .login {
        background: url('~@/assets/img/loginBg.jpg') no-repeat;
        height: 100%;
        background-size: 100% 100%;
        padding: 0 .73rem;
    }
        
    .hider{
        padding-top: 1.47rem;
        color: #222;
        h3 {
            font-size: .96rem;
            font-weight: 400;
        }
        p {
            font-size: .48rem;
        }
    }
    .loginMain {
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0px 1px .39rem 0px 
            rgba(253, 79, 108, 0.1);
        border-radius: .13rem;
        margin-top: 1.12rem;
        padding: .73rem;
        box-sizing: border-box;
        p {
            font-size: .48rem;
            color: #000;
        }
        i {
            display: inline-block;
            width: .81rem;
            height: .11rem;
            background-color: #ff7f8c;
            border-radius: .05rem;
        }
    }
</style>