<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
      //判断是否是微信浏览器或手机qq浏览器打开
      var ua = navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i)=="micromessenger") {
          this.$store.commit('browser', '微信浏览器')
      } else if (ua.match(/QQ/i) == "qq") {
          this.$store.commit('browser', 'QQ浏览器')
      }else {
          this.$store.commit('browser', '其他浏览器')
      }
},
    mounted() {
        this.getcode()
    },
    methods: {
       GetQueryString(name) {
          let url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          let newUrl = window.location.search.substr(1).match(url);
          if (newUrl != null) {
              return unescape(newUrl[2]);
          } else {
              return false;
          }
      },

      isWeiXin() {
          var ua = window.navigator.userAgent.toLowerCase();
          //通过正则表达式匹配ua中是否含有MicroMessenger字符串
          if (ua.match(/MicroMessenger/i) == "micromessenger") {
              return true;
          }
          return false;
      },

  async getcode(){
      if (this.isWeiXin()) { // 是否微信浏览器
          let reqopenid = this.GetQueryString("openid");
          if (!reqopenid||reqopenid=="null"){
              let code = this.GetQueryString("code");
              if (!code) {
                  let currentUrl = encodeURIComponent(window.location.protocol + "//" + 'http://beihexianhua.report');
                  window.location.href =
                      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24f7478adc2e0b99&redirect_uri=" +
                      currentUrl +
                      "&response_type=code&scope=snsapi_base#wechat_redirect";
              } else {
                  try {
                      var res = await this.Api.openid(code); // 需要更改的api引入名字
                      if(res.data.data.errcode){
                          let currentUrl = encodeURIComponent(window.location.protocol + "//" + 'http://beihexianhua.report');
                          window.location.href =
                              "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24f7478adc2e0b99&redirect_uri=" +
                              currentUrl +
                              "&response_type=code&scope=snsapi_base#wechat_redirect";
                      }else {
                          this.$store.commit('openid', res.data.data.openid)
                      }
                  } catch (error) {
                  }
              }
          }else{
              this.$store.commit('openid', reqopenid)
          }
      }
  }

    }
}
</script>

<style lang='less'>
*{
	-webkit-touch-callout:none;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
}
html,body,#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
	.index {
		position: relative;
	}

[contenteditable="true"], input, textarea {
    -webkit-user-select: auto!important;
    -khtml-user-select: auto!important;
    -moz-user-select: auto!important;
    -ms-user-select: auto!important;
    -o-user-select: auto!important;
    user-select: auto!important;
}
h1 , h2, h3 ,h4 , p{
    margin: 0;
    padding: 0;
}
</style>
