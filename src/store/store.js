import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
    state: {
        browsers: '其他浏览器', // 浏览器
        openid: ''
    },
    mutations: {
        browser(state, res) {
            state.browsers = res;
        },
        openid(state, res) {
            state.openid = res;
        }
    }
})
