<script setup>
const route = useRoute()

var menu = ref()

const items = [
    {
        label: 'Options',
        items: [
            {
                label: 'Профиль',
                icon: 'pi pi-user-edit'
            },
            {
                label: 'Настройки',
                icon: 'pi pi-spin pi-cog'
            },
            {
                label: 'Выход',
                icon: 'pi pi-sign-out',
                command: () => {
                    navigateTo({
                        path: '/auth',
                    });
                }
            }
        ]
    }
];

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <div class="header-wrapper">
        <div class="page_name">{{ route.meta.title }}</div>

        <div class="header-wrapper-menu">
            <div class="menu_icons">
                <i class="pi pi-phone"></i>
                <i class="pi pi-send"></i>
                <i class="pi pi-question-circle"></i>
                <i class="pi pi-bell"></i>
            </div>

            <div class="personal" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
                <i class="pi pi-user"></i>
                Андрей Андреич
            </div>
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />

        </div>
    </div>
</template>

<style>
.header-wrapper{
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
}
.page_name{
    font-size: 20px;
    font-weight: 600;
}
.header-wrapper-menu{
    display: flex;
    gap: 20px;
    align-items: center;
}
.menu_icons{
    display: flex;
    gap: 10px;
    align-items: center;
}
.menu_icons i{
    cursor: pointer;
}
.personal{
    display: flex;
    align-items: center;
    gap: 10px;
}
#overlay_menu{
    margin-top: 30px !important;
}
</style>