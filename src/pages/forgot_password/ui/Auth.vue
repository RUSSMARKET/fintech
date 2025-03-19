<script setup>
import { Form } from '@primevue/forms';

const code = ref()
const phone = ref()
const email = ref()
const sended_code = ref(false)

const onFormSubmit = () => {
    sended_code.value = true
    var interval = setInterval(() => {
        if(seconds_last.value > 0){
            seconds_last.value = seconds_last.value - 1
        } else {
            clearInterval(interval)
        }
    }, 1000)
}

const ConfirmPhomeChange = (target) => {
    if(target.value.length == 6){
        navigateTo({
            path: '/auth',
        });
    }
}

</script>

<template>
    <div class="auth-page">
        <div class="auth-header">
            <img class="logo" src="@/assets/img/logo.png" />
            <NuxtLink to="/auth">
                Авторизация
            </NuxtLink>
        </div>

        <div class="auth-form-container" v-if="!sended_code">
            <h1>Восстановление пароля</h1>

            <Tabs value="0">
                <TabList>
                    <Tab value="0">Номер телефона</Tab>
                    <Tab value="1">Email</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <Form @submit="onFormSubmit">
                            <InputText name="phone" v-model="phone" type="text" placeholder="+7 (___)___-__-__" fluid />
                            <Button type="submit" class="login_btn" label="Войти" />
                        </Form>
                    </TabPanel>
                    <TabPanel value="1">
                        <Form @submit="onFormSubmit">
                            <InputText name="email" v-model="email" type="text" placeholder="example@mail.ru" fluid />
                            <Button type="submit" class="login_btn" label="Войти" />
                        </Form>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
            <p class="policy">Нажимая продолжить, вы соглашаетесь с Правилами пользования и Политикой конфиденциальности</p>
        </div>
        <div class="auth-form-container" v-else>
            <div class="reg-form-container confirm-phone">
                <h1>Регистрация</h1>
                <p class="confirm-phone-info">Мы отправили СМС с кодом вам на номер +7(912)250-02-93</p>
                <Form>
                    <InputOtp @change="ConfirmCode" v-model="confirm_code" :length="6" integerOnly />
                </Form>
                <p class="timer">Повторно получить СМС с кодом можно через <span v-html="seconds_last"></span> секунд</p>
                <p class="bask_btn" @click="Reset">Вернуться назад</p>
            </div>
        </div>


    </div>    
</template>

<style>
.auth-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.auth-header .logo{
    width: 300px;
}
.auth-form-container{
    width: 400px;
    margin: 0 auto;
    margin-top: 150px;
}
.auth-form-container h1{
    text-align: center;
    margin: 0;
    margin-bottom: 50px;
    font-size: 32px;
    font-weight: 700;
}
.auth-form-container .p-form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.auth-form-container .policy{
    padding-left: 50px;
    padding-right: 50px;
    font-size: 16px;
    text-align: center;
    color: #787878;
    margin-top: 30px;
}
.auth-form-container .p-form {
    margin-bottom: 30px;
}
.forgot_password_link_wrapper{
    display: flex;
    justify-content: flex-end;
}
.forgot_password_link{
    color: #787878;
    text-align: right;
    text-decoration: unset;
}
.auth-form-container .p-inputtext,
.auth-form-container .p-button{
    padding: 20px;
}
.login_btn{
    width: 100%;
    display: block;
    background-color: #213E89;
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
.auth-form-container .p-tab{
    flex: 1;
}
</style>