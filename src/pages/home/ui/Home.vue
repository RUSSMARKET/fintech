<script setup>
import Articles from './Articles.vue';

const toast = useToast();

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

</script>

<template>
    <div class="home-page">
        <div class="home-page-toppanel">
            <Button label="Войти на смену" @click="showBottomLeft" />
        </div>

        <Articles />
    </div>
</template>