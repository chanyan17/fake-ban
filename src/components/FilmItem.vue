<template>
    <div class="film-item">
        <div class="film-cover">
            <img :src="require('../assets/post.jpg')" alt="">
        </div>
        <div class="film-name">我不是药神</div>
        <div class="film-star">
            <span class="text">暂无评分</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilmItem',
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>
