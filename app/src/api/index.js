import Vue from 'vue'
import axios from 'axios'
import store from '../store'

const API_ROOT = 'http://127.0.0.1:3030/'

axios.defaults.baseURL = API_ROOT;
axios.defaults.headers.common['token'] = localStorage.token || '';
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    console.log('error',error)
    // Do something with request error
    return Promise.reject(error);
  });
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    //在响应之后传给then之前对response进行修改和逻辑判断
    console.log(error.response.status == 401)
    if (error.response.status == 401) {
      console.log("401 : " + JSON.stringify(error.response.data))
      store.state.loginJudge = false;
      localStorage.removeItem('token');
      //文章创建token判断弹窗提示
      if (error.response.url.indexOf('article') > -1) {
        store.commit('SHOW_MSG', error.response.data)
      }
    }
    return Promise.reject(error);
  });

export default {
  getArticleById (id) {
    return axios.get('article/'+id)
  },
  getArticlesByUser (id) {
    return axios.get('article/user?userId='+id)
  },
  getALLArticle (opts) {
    return axios.get('article/getAll')
  },
  getUserLogin (opts){
    return axios.get('users/checkOut')
  },
  userLogin (opts) {
    return axios.post('users/login', opts)
  },
  userRegister (opts) {
    return axios.post('users/register',opts)
  },
  createArticle (opts) {
    return axios.post('article/create',opts)
  },
  editArticle (opts) {
    return axios.post('article/edit',opts)
  },
  deleteArticle (id) {
    return axios.get('article/delete?deleteId='+id)
  }
}
