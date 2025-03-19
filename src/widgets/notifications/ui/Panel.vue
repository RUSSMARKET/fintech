<script setup>
const NotificationShow = ref(false)

const Notifications = ref([
    {
        severity: 'success',
        summary: 'Вы вышли на работу',
        detail: 'Детальная информация'
    },
    {
        severity: 'error',
        summary: 'Вы не вышли на работу',
        detail: 'Детальная информация'
    }
])

</script>

<template>
    <div class="notification-drawer-content">
        <i class="pi pi-bell" @click="NotificationShow=true"></i>
        <Drawer v-model:visible="NotificationShow" header="Оповещения" position="right" class="notification-drawer">
            <Divider />
            <div class="notification-wrapper">
                <div :class="'notification notification-' + item.severity" v-for="(item, key) in Notifications">
                    <div class="notification-header">

                        <i v-if="item.severity=='success'" class="pi pi-check" style="color: green"></i>
                        <i v-else-if="item.severity=='error'" class="pi pi-times-circle" style="color: red"></i>

                        <div class="notification-title" v-html="item.summary"></div>
                        <i class="pi pi-times remove_icon"></i>
                    </div>
                    <div class="notification-content" v-html="item.detail"></div>
                </div>
            </div>
        </Drawer>
    </div>
</template>

<style>
.notification-drawer{
    width: 30rem !important;
}
.notification-wrapper .notification{
    margin-bottom: 15px;
    border-radius: 10px;
    padding: 15px;
}
.notification-error{
    background-color: #dc262633;
}
.notification-success{
    background-color: var(--p-toast-success-border-color);
}
.notification-header{
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}
.remove_icon{
    cursor: pointer;
}
.notification-title{
    flex: 1;
}
</style>