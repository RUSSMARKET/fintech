<script setup>
import InputMask from 'primevue/inputmask';

const phone = ref('')
const oldpassword = ref('')
const password = ref('')
const confirm_password = ref('')

</script>

<template>
    <div class="options-page">
        <Form class="options-form">
            <Card class="login-card card">  
                <template #title>Логин</template>
                <template #content>
                    <label for="phone" class="font-bold block mb-2">Мобильный телефон</label>
                    <InputMask id="phone" v-model="phone" mask="+7 999 999 99 99" placeholder="+7 999 999 99 99" fluid />
                </template>  
            </Card>

            <Card class="password-card card">
                <template #title>Пароль</template>
                <template #content>
                    <Password placeholder="Текущий пароль" v-model="oldpassword" toggleMask />
                    <Password placeholder="Новый пароль" v-model="password" toggleMask />

                    <div class="password-rules">
                        <div class="password-rules-title">Требования к паролю:</div>
                        <p>Не менее 8 символов</p>
                        <p>Латинские заглавные и строчные символы</p>
                        <p>Не менее 1 цифры и специального символа</p>
                    </div>

                    <Password placeholder="Повторите новый пароль" v-model="confirm_password" toggleMask />

                    <Button label="Сохранить" />
                </template>  
            </Card>

            <Card class="login-card card">  
                <template #title>Удаление аккаунта</template>
                <template #content>
                    <div class=""><i class="pi pi-exclamation-triangle" style="color: #f00;"></i> Ваш аккаунт и все данные будут удалены</div>
                    <Button label="Удалить аккаунт" severity="danger"  />
                </template>  
            </Card>
        </Form>
    </div>
</template>

<style>
.options-page{
    max-width: 590px;
}
.options-form{
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.options-form .p-card-body{
    padding: 20px 25px;
    gap: 20px;
    
}
.options-form .p-card-content{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.options-form .p-card-title{
    font-size: 18px;
    font-weight: 700;
    color: #000;
}
.options-form .p-inputtext{
    border: 0;
    border-bottom: 1px solid rgba(66, 66, 66, 0.25);
    border-radius: 0;
    padding-left: 0 !important;
    padding-top: 0;
    width: 100%;
}
.password-rules .p-password-input{
    padding-bottom: 6px;
}
.password-rules-title{
    color: #000;
}
.password-rules{
    color: #787878;
}
.password-rules p{
    margin: 0;
}
.options-page .p-button{
    width: 200px;
    padding: 16px;
}
</style>