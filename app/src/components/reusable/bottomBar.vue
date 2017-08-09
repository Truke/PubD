<template>
<div class="bottom_bar">
    <div class="wrap clearfix">
        <ul class="contact pr clearfix fr">
            <li><img src="../../images/icon_qq.png"></li>
            <li><img src="../../images/icon_weibo.png"></li>
            <li class="pr">
                <img class="weixin" src="../../images/icon_wechat.png">
                <div class="code pa">
                    <div class="code_img">
                        <img src="../../images/code.png">
                        <p>扫一扫添加微信反馈</p>
                    </div>
                    <div><i></i></div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

</script>
<style lang="sass">
.bottom_bar {
    width: 100%;
    height: 110px;
    background: #333;
    font-size: 0;
    .version {
        color: #999;
    }
    .contact {
        padding-top: 40px;
        li {
            float: left;
            transition: all ease-out 0.3s;
            margin-left: 15px;
            img {
                opacity: 0.6;
            }
            img:hover {
                opacity: 1;
            }
        }
        .pr:hover {
            .code {
            opacity : 1;
            z-index: 1;
            }
        }
    }
    .code {
        // width: 160px;
        // height: 200px;
        text-align: center;
        transition: all ease-out 0.3s;
        left: -65px;
        top: -200px;
        opacity : 0;
        z-index: -1;
         box-shadow: 0 4px 40px 0 rgba(0,0,0,.1);
        -webkit-box-shadow: 0 4px 40px 0 rgba(0,0,0,.1);
        .code_img {
            background: #fff;
            padding-bottom: 10px;
            img {
                opacity: 1;
            }
        }
        img {
            margin: 20px 20px 0 20px;
        }
        i {
            display: inline-block;
            width: 16px;
            height: 10px;
            background: url(../../images/spot_arrow.png) no-repeat center;
        }
        p{
            font-size: 12px;
            color: #999;
            margin:10px 0 0 0;
        }
    }
}

</style>