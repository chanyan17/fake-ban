<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.slider {
    width: 100%;
    overflow: hidden;
}
.slider-group {
    width: 2000px;
}
</style>
