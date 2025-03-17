<template>
    <DataTable :value="data" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column field="view" header="Вид инвентаря"></Column>
        <Column field="product" header="Продукт"></Column>
        <Column field="type" header="Тип"></Column>
        <Column field="name" header="Наименования инвентаря"></Column>
        <Column field="count" header="У сотрудников (ед.)"></Column>
        <Column field="have" header="У меня (ед.)"></Column>
    </DataTable>

    <Button label="Запросить инвентарь" class="mt-30" />
</template>

<script setup>
const data = [
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
    {
        view: '1',
        product: "ВТБ кредит",
        type: '',
        name: '',
        count: 12,
        have: 3
    },
]
</script>