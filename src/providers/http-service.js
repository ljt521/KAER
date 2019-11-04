import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../router'
import Vue from 'vue'

axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://mytest.karlstorz.com.cn:8088'
axios.defaults.baseURL = 'http://mywechat.karlstorz.com.cn:7777'
Vue.prototype.$baseURL = axios.defaults.baseURL
// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = Cookies.get('token') // 注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': config.headers['Content-Type'] || 'application/json',
      'Authorization': token,
      'device': 'wap'
    }
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use((response) => {
  let token = response.headers.Authorization
  if (token) {
    axios.defaults.headers.common['Authorization'] = token
  }
  return response
}, error => {
  if (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
  }
  return Promise.reject(error)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        resolve(response.data)
        Vue.prototype.$headers = response.headers
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装search方法
 * @param url
 * @param params 参数 为空时 传 {}
 * @param searchData 搜索字段 {a: 1, b: 2}
 * @returns {Promise}
 */

export function search (url, params = {}, searchData = {}) {
  let stringData = ''
  url = url + '?'
  if (params) {
    Object.keys(params).forEach(function (key) {
      stringData = stringData + `${key}=${params[key]}&`
    })
  }
  if (searchData) {
    Object.keys(searchData).forEach(function (key) {
      console.log(key);
      if (searchData[key] != 0 || key == 'personId') {
        stringData = stringData + `propertyNames=${key}&propertyValues=${searchData[key]}&`
      }
    })
  }
  return new Promise((resolve, reject) => {
    axios.get(url + stringData, {})
      .then(response => {
        resolve(response.data)
        Vue.prototype.$headers = response.headers
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data, header) {
  if (header) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装del请求
 * @param url
 * @param data
 * @returns {Promise}
 */


export function del (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function setCookies (name, data) {
  Cookies.set(name, data)
}

export function getCookies (name) {
  return Cookies.get(name)
}

export function sortData (request) {
  for (let i = 0; i < request.length; i++) {
    request[i]['product'] = [[], []]
    if (request[i].productInfo == '') {
      continue
    }
    let product = JSON.parse(request[i].productInfo)
    for (let j = 0; j < product.length; j++) {
      for (let key in product[j]) {
        request[i].product[0].push(key)
        request[i].product[1].push(product[j][key])
      }
    }
  }
  return request
}

export function datedifference (sDate1) {
  let dateSpan, sDate2
  let dateFormatter = (val) => {
    const value = new Date(val)
    const year = value.getFullYear()
    const month = value.getMonth() + 1
    const day = value.getDate()
    return year + '-' + month + '-' + day
  }
  sDate1 = dateFormatter(sDate1)
  sDate2 = dateFormatter(new Date())
  dateSpan = Date.parse(sDate2) - Date.parse(sDate1)
  dateSpan = Math.abs(dateSpan)
  return Math.floor(dateSpan / (24 * 3600 * 1000))
}
