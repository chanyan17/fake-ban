<template>
    <div>
        <div class="search-bar">
            <input type="search" placeholder="搜索">
        </div>
        <film-block :title="'正在上映'" :more="'xxxx'"></film-block>
        <film-block :title="'即将上映'" :more="'xxxx'"></film-block>
        <film-block :title="'热门电影'" :more="'xxxx'"></film-block>
        <film-block :title="'北美票房榜'" :more="'xxxx'"></film-block>
    </div>
</template>
<script>
    import FilmBlock from '@/components/FilmBlock'
    export default {
        name: 'Film',
        data() {
            return {
            }
        },
        components: {
            FilmBlock
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
</style>

