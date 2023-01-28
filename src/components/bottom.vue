<!-- 底部tab -->
<template>
    <div class='botton'>
        <router-view />
        <van-tabbar route>
            <van-tabbar-item
                v-for="(item, i) in tabs" 
                :key="i" replace 
                :to="tabs[i].src" 
                :style="index==i?'color: #fe6d0d;':'color: #ccc;'"
                :icon="index==i? imgSrc[i].unselected : imgSrc[i].pitch">
            {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import common from '../commons/common.js'
export default {
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            tabs: common.tab,
            imgSrc: [
                {
                    pitch: require('../assets/img/homePage.png'),
                    unselected: require('../assets/img/homePage1.png')
                },
                {
                    pitch: require('../assets/img/classify.png'),
                    unselected: require('../assets/img/classify1.png')
                },
                {
                    pitch: require('../assets/img/report.png'),
                    unselected: require('../assets/img/report1.png')
                }
            ]
        }
    },
    methods: {
        tabClick(i) {
            if(i!==this.index) {
                this.$router.push({name:common.tab[i].src})
            }
        }
    },
}
</script>