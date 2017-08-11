<template>
    <div class="index">
        <div class="sooptions">
            <div class="automw wrap">
              df
            </div>
        </div>
        
        <div class="index_list">
            <cards :articleList="articles"></cards>
        </div>
    </div>
</template>

<script>
import cards from "./reusable/cards";
import banner from "../images/banner.jpg";
export default {
    name : "index",
    // replace: false,
    data () {
        return {
        }
    },
    components : {
        cards
    },
    computed : {
        articles(){
            return this.$store.state.articles
        },
        articleList(){
            return this.$store.state.articles.slice(1)
        },
        coverText(){
            return $(this.$store.state.articles[0].markedArticle).text()
        }
    },
    mounted(){
        this.$store.dispatch('getALLArticle');
    },
    methods : {
    }
}
</script>
<style lang="sass">
.sooptions {
  position: fixed;
  width:100%;
  top:50px;
  height: 40px;
  padding: 10px 0;
  background-color: #f7f8f8;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  z-index: 3;
}
.index_list {
  margin-top:100px;
    padding: 60px 0;
}
//common sass
.kkk {
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
}
.wrap {
    width: 1100px;
    margin: 0 auto;
}
.yellow {
    color : #ffe400;
}
.yellow_bg {
    background: #ffe400;
}
.black_bg {
    color: #333;
}
.black1 {
    color : #333;
}
.black2 {
    color : #666;
}
.black3 {
    color : #999;
}
.cover_bg {
    width: 100%;
    height: 294px;
}
.cover_fixed {
    margin-top: -100px;
    h1 {
            font-size: 40px;
    font-weight: normal;
    margin-top: 27px;
    padding-bottom: 15px;
    border-bottom: 6px solid #ffe400;
    max-width: 720px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
}
.spot_line {
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 16px;
    background: #cacaca;
}
.article_page, .my_articles {
    .user {
        font-size: 0;
        width: 280px;
        text-align: center;
        background: #f6f6f5;
        margin-top: 40px;
        padding: 30px 0 20px 0;
        img, span {
            display: inline-block;
            vertical-align: middle;
        }
        img {
            width: 80px;
            height: 80px;
            border-radius: 80px;
            background : #ffe400;
        }
        span {
            margin-left: 15px;
        }
        .user_name {
            font-size: 24px;
            color: #333;
            margin: 10px auto 20px auto;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .line {
            vertical-align: 1px;
            margin: 0 10px;
        }
        .time, .tag {
            font-size: 12px;
            color: #999;
        }
        .tag {
            font-size: 14px;
            margin: 10px 0 20px 0;
        }
        .sub_tags {
            padding: 0 5px;
            span {
                font-size:12px;
                padding: 3px 10px;
                margin:0 5px;
                background: #ffe400;
                color: #666;
                margin-bottom: 10px;
            }
        }
    }
}







.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-out;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.markdown_body, .article_detail {
  h1, h2, h3, h4, strong {
    font-weight: 600;
    color: #333;
  }
  p {
    margin: 0 0 20px 0;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    border-radius: 2px;
  }
  a {
    color: #08c;
    // font-weight: 600;
  }
  code, pre {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 14px;
    background-color: #f8f8f8;
    -webkit-font-smoothing: initial;
  }
  pre {
    box-shadow: 0 0 2px #ccc;
    margin-bottom: 20px;
  }
  code {
    position: relative;
    box-sizing: border-box;
    padding: 17.5px;
    max-height: 500px;
    &:after {
      content: attr(data-language);
      position: absolute;
      top: 0;
      right: 0;
      color: #ccc;
      text-align: right;
      font-size: 14px;
      padding: 5px 10px 0;
      line-height: 15px;
      height: 15px;
      font-weight: 600;
    }
  }
  blockquote {
    text-indent: 0;
    padding: 10.5px 21px;
    background-color: #f5f5f5;
    border-left: 4px solid #ccc;
    color: #333;
    font-size: 17.5px;
    margin: 35px 0;
  }
  ul,ol {
    display: block;
    list-style-type: disc;
    padding-left: 25px;
  }
}
.hljs-comment,
.hljs-quote {
    color: #8e908c;
}

.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
    color: #c82829;
}

.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
    color: #f5871f;
}

.hljs-attribute {
    color: #eab700;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
    color: #718c00;
}

.hljs-title,
.hljs-section {
    color: #4271ae;
}

.hljs-keyword,
.hljs-selector-tag {
    color: #8959a8;
}

.hljs {
    display: block;
    overflow-x: auto;
    background: white;
    color: #4d4d4c;
    padding: 8.75px;
}

.hljs-emphasis {
    font-style: italic;
}

.hljs-strong {
    font-weight: bold;
}
</style>