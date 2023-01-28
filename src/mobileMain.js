import Vue from 'vue'
import App from './App'
import router from './mobileRouter'
import less from 'less'
import './assets/api'
import 'lib-flexible/flexible.js'
import store from './store/store';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.use(less)
// vant组件按需引入
import { 
    Button,
    Toast, 
    Tab, 
    Tabs, 
    Search, 
    Popup, 
    Dialog, 
    NavBar,
    Tabbar, 
    TabbarItem,
    Swipe,
    SwipeItem,
    Form,
    Field,
    DatetimePicker,
    Uploader,
    NoticeBar,
    Icon,
    RadioGroup, Radio,
    Cell, CellGroup ,
    CountDown,
    Progress,
    Empty    
} from 'vant';
Vue.use(Button)
   .use(Toast)
   .use(Tab)
   .use(Tabs)
   .use(Search)
   .use(Popup)
   .use(Dialog)
   .use(NavBar)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)
   .use(Form)
   .use(Field)
   .use(DatetimePicker)
   .use(Uploader)
   .use(NoticeBar)
   .use(Icon)
   .use(RadioGroup)
   .use(Radio)
   .use(Cell)
   .use(CellGroup)
   .use(CountDown)
   .use(Progress)
   .use(Empty)
    

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  less,
  store,
  components: { App },
  template: '<App/>'
})
