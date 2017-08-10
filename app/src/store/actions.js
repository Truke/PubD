import api from '../api'
import * as types from './mutation-types'

export default {
  getUserLogin ( {commit}, opts){
    opts = opts || "";
    return new Promise((resolve, reject) => {
      api.getUserLogin(opts).then(function (res) {
        if (res.data.state) {
          commit(types.USER_LOGIN, res.data)
          commit(types.LOGIN_JUDGE, true)
          resolve();
        }else {
          commit(types.LOGIN_JUDGE, false)
          reject(res.data.msg)
        }
      }).catch(function(e){
         commit(types.LOGIN_JUDGE, false)
      })
    })
  },
  userLogin ({ commit }, opts) {
    api.userLogin(opts).then(function (res) {
      commit(types.SHOW_MSG, res.data)
      if (res.data.state) {
        // cookies.set('token', res.data.token, { expires: 7 })
        //登录状态更新
        commit(types.LOGIN_JUDGE, true)
        //登录控件显示关闭
        commit(types.POP_LOGIN, false)
        //用户登录信息更新
        commit(types.USER_LOGIN, res.data)
        //存储token
        localStorage.token = res.data.token
      } else {
        commit(types.LOGIN_JUDGE, false)
        commit(types.POP_LOGIN, true)
      }
    })
  },
  userLogout ({ commit }, opts) {
    api.userLogout(opts).then(function (res) {
      commit(types.SHOW_MSG, res.data)
      if (res.data.state) {
        commit(types.LOGIN_JUDGE, false)
        localStorage.removeItem('token')
      } else {
        commit(types.LOGIN_JUDGE, true)
      }
    })
  },
  userRegister ({commit}, opts) {
    api.userRegister(opts).then(function (res) {
      commit(types.SHOW_MSG, res.data)
      if (res.data.state) {
        commit(types.LOGIN_JUDGE, true)
        commit(types.POP_LOGIN, false)
        commit(types.USER_LOGIN, res.data)
        //存储token
        localStorage.token = res.data.token;
      } else {
        commit(types.LOGIN_JUDGE, false)
        commit(types.POP_LOGIN, true)
      }

    }).catch(function(e){
      console.log(e);
    })
  },
  createArticle ({commit}, opts) {
    api.createArticle(opts).then(function (res) {
      commit(types.SHOW_MSG, res.data)
      setTimeout(function(){
        location.href = "/#/index";
      },800)
    }).catch(function(e){
      console.log(e);
    })
  },
  editArticle ({commit}, opts) {
    api.editArticle(opts).then(function (res) {
      commit(types.SHOW_MSG, res.data)
    }).then(function (){
      setTimeout(function(){
        location.href = "/#/index";
      },800)
    }).catch(function(e){
      console.log(e);
    })
  },
  deleteArticle ({commit}, id) {
    return new Promise((resolve, reject) => {
      api.deleteArticle(id).then(function (res) {
        commit(types.SHOW_MSG, res.data)
        resolve();
      }).catch(function(e){
        resolve(e);
      })
    })
  },
  getALLArticle({ commit }, opts) {
  	api.getALLArticle(opts).then(function (res) {
      commit(types.GET_ARTICLES, res.data.articles)
  	})
  },
  getArticleById({ commit }, id) {
    return new Promise((resolve, reject) => {
      api.getArticleById(id).then(function (res) {
        if (res.data.state) {
          commit(types.GET_ARTICLE, res.data.article)
          resolve();
        }else {
          reject(res)
        }
      }).catch(function(e){
         reject(e.data.msg)
      })
    })
  },
  getArticlesByUser({ commit }, id) {
    api.getArticlesByUser(id).then(function (res) {
      if (res.data.state) {
        if (res.data.article.length !== 0) {
          commit(types.GET_USER_ARTICLES, res.data.article)
        }else {
          commit(types.GET_USER_ARTICLES, [{
              articleTitle: "",
              articleIntro: "",
              mainTag: "",
              subTags: [],
              sourceArticle: "",
              markedArticle: "",
              coverImg: "",
              timeStamp : "",
              articleImgs: [],
              thisUser : {
                _id : "",
                userName : "",
                userNickName : "",
                userImg : "",
              }
            }]
          )
        }
      }else {
        commit(types.SHOW_MSG, res.data)
        setTimeout(function(){
          location.href = "/#/index";
        },800)
      }
    })
  }
};


