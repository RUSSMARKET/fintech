<template>
    <DataTable :value="data" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column field="created" header="Создана"></Column>
        <Column field="product" header="Продукт"></Column>
        <Column field="id" header="ID заявки"></Column>
        <Column field="client" header="Клиент"></Column>
        <Column field="phone" header="Телефон клиента"></Column>
        <Column field="creator" header="Создатель"></Column>
        <Column field="status" header="Статус"></Column>
    </DataTable>
</template>

<script setup>
const name = 'asd'
const data = [
    {
        created: '12.03.2025',
        product: 'Альфа',
        id: 'oijwqr-12341d-pokasd-k124hu',
        client: 'Иванов Иван',
        phone: '8 800 000 00 00',
        creator: 'admin',
        status: 'Выполнено'
    }
]
</script>