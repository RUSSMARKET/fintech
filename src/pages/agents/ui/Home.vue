<template>
    <DataTable :value="data" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column field="fio" header="ФИО"></Column>
        <Column field="phone" header="Телефон"></Column>
        <Column field="email" header="E-mail"></Column>
        <Column field="organization" header="Организация"></Column>
        <Column field="role" header="Роль"></Column>
    </DataTable>
</template>

<script setup>
const data = [
    {
        fio: 'Иванов Иван Иванович',
        phone: '8 800 000 00 00',
        email: 'test@mail.ru',
        organization: 'Руссмаркет',
        role: 'Агент'
    },
]
</script>