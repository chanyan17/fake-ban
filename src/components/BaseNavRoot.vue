<template>
    <div class="nav-root">
        <router-link
            v-for="(nav_link, index) in nav_links" :key="index"
            class="nav-link"
            tag="a"
            :to="{path:'/' + nav_link.path}">
            <i class="fa nav-link-ico" :class=" 'fa-' + nav_link.icon"></i>
            <span class="nav-link-text">{{nav_link.text}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'BaseNavRoot',
    data() {
        return {
            nav_links: [
                {
                    path: 'film',
                    icon: 'film',
                    text: '电影'
                },
                {
                    path: 'user',
                    icon: 'user',
                    text: '我的'
                }
            ]
        }
    }
}
</script>

<style lang="less" scope>
.nav-root {
    position: fixed;
    z-index: 50;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100px;
    display: flex;
    border-top: 1px solid #ccc;
    background:#f5f5f5;
    align-items:center;

    .nav-link {
        display: block;
        -webkit-box-flex: 1.0;
        flex: auto;
        line-height: 1;
        color: #666;
    }
    .router-link-active {
        color: #1abc9c;
    }
    .nav-link-ico {
        display: block;
        margin-bottom: 10px;
        font-size: 42px;
    }
    .nav-link-text {
        font-size: 24px;
    }
}
</style>
