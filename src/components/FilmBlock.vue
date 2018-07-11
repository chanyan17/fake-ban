<template>
    <div class="film-block">
        <div class="top">
            <div class="title">
                <span class="color-block"></span>
                <span>{{title}}</span>
            </div>
            <div class="more">
                更多
                <span class="fa fa-angle-double-right"></span>
            </div>
        </div>
        <div class="slider-container">
            <div class="slider-content">
                <film-item></film-item>
            </div>
        </div>
    </div>
</template>

<script>
import FilmItem from '@/components/FilmItem'
export default {
    name: 'FilmBlock',
    props: ['title', 'more'],
    data() {
        return {}
    },
    components: {
        FilmItem
    }
}
</script>

<style lang="less" scoped>
.film-block {
    padding-bottom: 40px;

    &:first-child {
        padding-top: 40px;
    }

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
.slider-container {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    .slider-content {
        width: 1542px;
        margin: 20px 0px 20px 20px;
        height: 364px;
        text-align: left;
        overflow: hidden;
    }
}
</style>
