<script setup>
import Articles from './Articles.vue';

const toast = useToast();

const showBottomLeft = () => {

    if (!navigator.geolocation){
        console.log("Geolocation is not supported by your browser");
        return;
    }
    function geo_success(position) {
        toast.add({ severity: 'success', summary: 'Вы вышли на работу', detail: position.coords.latitude + ' ' + position.coords.longitude, life: 30000 });
    }
    function geo_error() {
        toast.add({ severity: 'error', summary: 'Ошибка', detail: 'У Вас отключена геолокация', life: 30000 });
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