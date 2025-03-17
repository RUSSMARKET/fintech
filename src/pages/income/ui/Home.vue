<script setup>

const stat_filter = ref()
const used_dates = ref('весь период')
const selected_date = ref()

const toggleFilter = (event) => {
    stat_filter.value.toggle(event);
}
const DateSelect = () => {
    console.log(selected_date)
}

</script>

<template>
    <div class="income-page">

        <div class="statistics-filter">Статистика на <span @click="toggleFilter" v-html="used_dates"></span></div>
        <Popover ref="stat_filter">
            <DatePicker v-model="selected_date" @value-change="DateSelect" inline selectionMode="range" :manualInput="false" />
        </Popover>

        <div class="statistics-wrapper">
            <Card class="statistic">
                <template #title>До </template>
                <template #content>
                    <div class="total">2000 ₽</div>
                </template>
            </Card>
            <Card class="statistic">
                <template #title>После</template>
                <template #content>
                    <div class="total">2000 ₽</div>
                </template>
            </Card>
            <Card class="statistic">
                <template #title>Выплачено</template>
                <template #content>
                    <div class="total">2000 ₽</div>
                </template>
            </Card>
        </div>
    </div>
</template>

<style>
.income-page .statistics-wrapper{
    display: flex;
    gap: 20px;
}
.income-page .p-card.p-component.statistic {
    flex: 1;
}
.statistic .p-card-body{
    gap: 20px;
}
.statistic .p-card-title {
    text-align: center;
    padding: 5px;
    border-radius: 15px;
    background: #55dd55;
}
.statistic .total{
    text-align: center;
    font-size: 18px;
}
.statistics-filter{
    margin-bottom: 20px;
}
</style>