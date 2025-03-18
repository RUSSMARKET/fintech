<script setup>
    
</script>

<template>
    <div class="education_page">
        <div class="education_wrapper">
            <div class="education-section">
                <h2>Альфа кредит</h2>
                <div class="education">
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                </div>
            </div>
            <div class="education-section">
                <h2>Яндекс</h2>
                <div class="education">
                    <a href="#"><i class="pi pi-file"></i> Авторизация</a>
                    <a href="#"><i class="pi pi-file"></i> Переключение браузера</a>
                </div>
            </div>
            <div class="education-section">
                <h2>ВТБ кредит</h2>
                <div class="education">
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                </div>
            </div>
            <div class="education-section">
                <h2>Яндекс</h2>
                <div class="education">
                    <a href="#"><i class="pi pi-file"></i> Авторизация</a>
                    <a href="#"><i class="pi pi-file"></i> Переключение браузера</a>
                </div>
            </div>
            <div class="education-section">
                <h2>ВТБ кредит</h2>
                <div class="education">
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                    <a href="#"><i class="pi pi-file"></i> Выдача карт</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .education_wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
    }
    .education-section{
        padding: 30px;
        background-color: #fff;
        box-shadow: 0px 2px 10px rgba(66, 66, 66, 0.25);
    }
    .education-section h2{
        margin: 0;
        margin-bottom: 30px;
    }
    .education{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .education a{
        color: #000;
        text-decoration: none;
    }
</style>