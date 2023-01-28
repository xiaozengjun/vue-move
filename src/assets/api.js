import Vue from 'vue'
import axios from 'axios'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? 'dev' : window.location.protocol + '//http://beihexianhua.report'
  // baseURL: process.env.NODE_ENV === "development" ? 'dev' : 'http://b1.s1.natapp.cc/app_dev.php'
});
// const dev_php = process.env.NODE_ENV === "development" ? '/app_dev.php' : ''
const dev_php = process.env.NODE_ENV === "development" ? '' : ''

Vue.prototype.Api = {
  getSystems() {
        return instance.get(dev_php + "/rs/checksystems")
  },
  checkrecord(parmis) {
    return instance.get(dev_php + '/rs/checkrecord?tid=' + parmis)
  },
  //删除订单
  deletePp(pid) {
      return instance.delete(dev_php + '/rs/checkrecord/' + pid)
  },
  // openid获取
  openid(code) {
    return instance.get(window.location.protocol + "//" + window.location.host + "/mobile/code2token?code=" + code)
  },
  // 上传
  uploadFile(data) {
      return instance.post('/call/upload/paper-upload-handler.php', data, {
        headers: {
            "content-type": 'multipart/form-data'
        }
      })
  },
  // 生成订单
  payTask(formData) {
      return instance.post(dev_php + '/rs/checkpaper/paytask', formData, {
        headers: {
            "content-type": 'multipart/form-data'
        }
    })
  },
  // 轮询订单
  payInfo(oid) {
      return instance.get(dev_php + '/rs/payinfo/' + oid + '/status?' + new Date().getTime(), {
          cancelToken: source.token
      })
  }
}
