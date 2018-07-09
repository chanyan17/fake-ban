<template>
    <div>
        <div class="search-bar">
            <input type="search" placeholder="搜索">
        </div>
        <div class="recently-released">
            <div class="top">
                <div class="title">
                    <span class="color-block"></span>
                    <span>近期上映</span>
                </div>
                <div class="more">
                    更多
                    <span class="fa fa-angle-double-right"></span>
                </div>
            </div>
            <div class="film-block">
                <div class="film-item">
                    <div class="film-cover">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="film-name">我不是药神</div>
                    <div class="film-star">
                        <span class="text">暂无评分</span>
                    </div>
                </div>
                <div class="film-item">
                    <div class="film-cover">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="film-name">我不是药神</div>
                    <div class="film-star">
                        <span class="text">暂无评分</span>
                    </div>
                </div>
                <div class="film-item">
                    <div class="film-cover">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="film-name">我不是药神</div>
                    <div class="film-star">
                        <span class="text">暂无评分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Film',
        data() {
            return {}
        }
    }
</script>
<style lang="less" scope>
    .search-bar {
        padding: 30px;
        background-color: #1abc9c;

        input {
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            border: none;
            outline: none;
            text-align: center;
            font-size: 32px;
            border-radius: 10px;
            -webkit-appearance: none;
        }
    }
    .recently-released {
        padding-top: 40px;

        .top {
            padding: 0 40px 0 0;
            height: 60px;
            line-height: 60px;
            display: flex;
        }
        .title,
        .more {
            -webkit-box-flex: 1.0;
            flex: auto;
        }

        .title {
            text-align: left;
            color: #484848;
            font-weight: bolder;
            font-size: 32px;

            span {
                display: inline-block;
                vertical-align: middle;
            }
        }

        .color-block {
            display: inline-block;
            width: 10px;
            margin-right: 20px;
            height: 40px;
            background-color: #1abc9c;
        }

        .more {
            text-align: right;
            font-size: 28px;
            color: #1abc9c;
        }
    }
    .film-block {
        margin: 20px 0px 20px 20px;
        overflow: hidden;
        .film-item {
            float: left;
            margin-right: 20px;
            width: 200px;
            text-align: left;
            .film-cover {
                width: 200px;
                height: 276px;
                background: #c0c0c0;
                img {
                    width: 200px;
                    height: 276px;
                }
            }
            .film-name {
                color: #484848;
                font-weight: bolder;
                font-size: 32px;
                width: 100%;
                height: 50px;
                line-height: 50px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .film-star {
                .text {
                    font-size: 24px;
                    color: #c0c0c0;
                }
            }
        }
        
    }
</style>

