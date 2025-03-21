<script setup>
import Articles from './Articles.vue';
import NotificationsClass from '@/entities/notification'

const showBottomLeft = () => {

    if (!navigator.geolocation){
        NotificationsClass.send('error', 'Ошибка', 'Ваш браузер не поддерживает геолокацию')
        return;
    }
    function geo_success(position) {
        NotificationsClass.send('success', 'Вы вышли на работу', position.coords.latitude + ' ' + position.coords.longitude)
    }
    function geo_error() {
        NotificationsClass.send('error', 'Ошибка', 'У Вас отключена геолокация')
    }
    navigator.geolocation.getCurrentPosition(geo_success, geo_error);
};

</script>

<template>
    <div class="home-page">
        <div class="home-page-toppanel">
            <Button label="Выйти на смену" @click="showBottomLeft" />
        </div>

        <Articles />
    </div>
</template>