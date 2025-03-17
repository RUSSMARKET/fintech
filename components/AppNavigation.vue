<script setup>

</script>

<template>
    <div class="app-navigation">
        <div class="app-header">
            <img src="@/assets/img/logo.png" alt="Логотип" style="width: 100%;" />
        </div>
        <div class="navigation-items">
            <NuxtLink to="/">
                <i class="pi pi-home"></i>
                Рабочий стол
            </NuxtLink>
            <NuxtLink to="/products/">
                <i class="pi pi-briefcase"></i>
                Продукты
            </NuxtLink>
            <NuxtLink to="/requests/">
                <i class="pi pi-list-check"></i>
                Заявки
            </NuxtLink>
            <NuxtLink to="/tasks/">
                <i class="pi pi-check-circle"></i>
                Задачи
            </NuxtLink>
            <NuxtLink to="/income/">
                <i class="pi pi-credit-card"></i>
                Доход
            </NuxtLink>
            <NuxtLink to="/agents/">
                <i class="pi pi-users"></i>
                Агенты
            </NuxtLink>
            <NuxtLink to="/inventory/">
                <i class="pi pi-box"></i>
                Инвентарь
            </NuxtLink>
            <NuxtLink to="/education/">
                <i class="pi pi-graduation-cap"></i>
                Обучения
            </NuxtLink>
            <NuxtLink to="/rating/">
                <i class="pi pi-chart-bar"></i>
                Рейтинг
            </NuxtLink>
            <NuxtLink to="/chats/">
                <i class="pi pi-comments"></i>
                Чаты
            </NuxtLink>
            <NuxtLink to="/kpi/">
                <i class="pi pi-calculator"></i>
                Планы и KPI
            </NuxtLink>
            <NuxtLink to="/assistant/">
                <i class="pi pi-info-circle"></i>
                Помощник
            </NuxtLink>
            <NuxtLink to="/documents/">
                <i class="pi pi-file"></i>
                Мои документы
            </NuxtLink>
        </div>
    </div>
</template>

<style>
.app-navigation{
    width: 200px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(66, 66, 66, 0.25);
    padding: 10px;
    box-sizing: border-box;
    position: relative;
}
.navigation-items a{
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    padding-left: 14px;
    text-decoration: none;
    color: #000;
    border-radius: 5px;
}
.navigation-items a.router-link-active{
    background-color: #E7EEFF;
}
.navigation-items a i{
    color: #213E89;
}
</style>