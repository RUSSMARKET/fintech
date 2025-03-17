<script setup>
import { A11y, EffectCards, Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const modules = [A11y, EffectCards, Pagination, Autoplay];
var show_modal = ref(false)
const show_modal_func = () => {
    show_modal.value = true
}
</script>

<template>
    <section class="articles">
        <div class="articles_header">
            <h2>Полезные статьи</h2>
            <Button label="Перейти в каталог"/>
        </div>
        
        <swiper
            :modules="modules"
            slides-per-view="auto"
            space-between="10"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }">

            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide> 
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
            <swiper-slide style="width: 180px" @click="show_modal_func">
                <div class="article-info">Как не упустить выгодные предложения?</div>
                <img src="@/assets/img/default.png"/>
            </swiper-slide>
        </swiper>
        
        <div class="article-modal" @click.self="show_modal=false" v-if="show_modal">
            <swiper
            :modules="modules"
            slides-per-view="1"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
            }"
            navigation
            :effect="'cards'"
            :grabCursor="true"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }">
                <swiper-slide style="width: 400px;">
                    <div class="article-info">Больше текста!</div>
                    <img src="@/assets/img/articles/1.jpg"/>
                </swiper-slide>
                <swiper-slide style="width: 400px;">
                    <div class="article-info">Бооооооооооооооооольше текста!</div>
                    <img src="@/assets/img/articles/2.jpg"/>
                </swiper-slide>
                <swiper-slide style="width: 400px;">
                    <div class="article-info">Сильно Боооооо оооооооооооо ооооооо ооооооооооооо оооооо оооооооооооо оооооооооооольше текста!</div>
                    <img src="@/assets/img/articles/3.jpg"/>
                </swiper-slide>
            </swiper>
        </div>

    </section>
</template>

<style>
.articles_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.articles .swiper{
    max-width: 100%;;
}
.articles .swiper-slide{
    background-color: #fff;
    padding: 25px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    border-radius: 10px;
    cursor: pointer;
    border-radius: 0;
}
.article-modal{
    background-color: #000000cc;

    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}
.article-modal .swiper-slide{
    position: relative;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
}
.article-modal .swiper-slide:after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
    z-index: 2;
}
.article-modal .swiper-slide img{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
}
.article-modal .swiper-slide .article-info{
    z-index: 3;
    color: #fff;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}

.article-modal .swiper{
    width: 400px;
    height: 680px;
}
.article-modal .swiper-pagination{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 10px;
}
.article-modal .swiper-pagination-bullet {
    padding: 2px;
    border: 1px solid #fff;
    z-index: 3;
    position: relative;
    display: block;
    flex: 1;
    border-radius: 5px;
}
.swiper-pagination-bullet-active{
    background: #fff;
}
</style>