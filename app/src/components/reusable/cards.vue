<template>
<div class="wrap">
  <ul class="cards_layer clearfix">
    <li class="cards citem" v-for="(item,index) in articleList">
      <div class="citemtop">
        <router-link :to="{ name: 'article', params: { articleId: item._id }}">
          <img :src="item.coverImg" width="280" height="180">
        </router-link>
        <div class="citemtxt">
          <router-link class="citemtitle" :to="{ name: 'article', params: { articleId: item._id }}">
            {{item.articleTitle}}
          </router-link>
        </div>
      </div>
      <div class="citemqt">
        <span class="yy-icon yy-view">view</span>
        <span class="yy-icon yy-comment">comment</span>
      </div>
      <div class="citemqt citemfoot">
        <div class="citemzl">
          <router-link class="citemfimg" :to="{ name: 'personal', params: { userId: item.thisUser._id }}">
            <img :src="item.thisUser.userImg" width="24" height="24">
            <span class="txtellipsis">{{item.thisUser.userNickName}}</span>
          </router-link>
        </div>
        <span class="fcfield">（{{item.mainTag}} {{timeHandle(item.timeStamp)}}）</span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import timeTransform from '../../dev/timeTransform'
export default {
    props : ["articleList"],
    methods : {
        timeHandle(timestamp){
            return timeTransform(timestamp);
        }
    }
}
</script>
<style lang="sass">
.cards_layer {
  margin: 0 -28px -28px 0;
}
.citem {
  transition: 0.2s box-shadow ease-out;
  width: 280px;
  height: 270px;
  float: left;
  margin: 0 20px 46px 0;
  font-size: 12px;
  background-color: #fff;
  .citemtop{
    width: 280px;
    height:180px;
    position: relative;
    display:block;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      background-color: #bfc1c2;
    }
  }
  .citemtxt{
    background-color: #fff;
    padding:10px 20px;
    position: absolute;
    width: 240px;
    height:20px;
    bottom:-60px;
    transition: bottom ease .3s;
  }
  .citemtitle {
    width: 240px;
    display: block;
    color: #3a3a3a;
    font-size: 16px;
    font-weight: 500;
    height: 22px;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  /* .citemtc{
    margin-top: 8px;
    height: 20px;
    line-height: 20px;
    .yy-time{
      width: auto;
      text-indent: 20px;
      margin-left: -4px;
      color: #a0a0a0
    }
    .ccolor{
      float: right;
      margin-top: 8px;
      a{
        width: 23px;
        display: block;
        height: 4px;
        border-style: solid;
        border-width: 1px;
        margin-left: 1px;
        float: left;
        transition: all ease .2s;
        &:hover{
          transform: scale(1.4)
        }
      }
    }
  } */
  .citemqt{
    width: auto;
    height: 22px;
    padding: 12px 20px 8px 20px;
  }
  .citemfoot {
    padding-bottom: 11px;
    border-top: #f2f2f2 1px solid;
    margin-top: 3px;
    a.citemfimg{
      color: #828282;
      line-height: 24px;
      img{
        margin-right: 8px;
        position: relative;
        top: -1px;
        float: left;
      }
      span{
        max-width: 50px;
        height: 24px;
        display: inline-block;
      }
    }
    span{
      margin-left: 10px;
      color: #C0C0C0
    }
    span.fcfield{
      vertical-align: top;
      line-height: 24px;
      height: 24px
    }
  }
  .citemzl{
    display: inline;
    position: relative;
  }
  &:hover{
    .citemtxt{
      bottom:0;
    }
  }
}

</style>