<script setup>
import { Form } from '@primevue/forms';

const onFormSubmit = () => {
    navigateTo({
        path: '/',
    });
}

const password = ref()
const forgot_password = ref(false)

</script>

<template>
    <div class="auth-page">
        <div class="auth-header">
            <img class="logo" src="@/assets/img/logo.png" />
            <NuxtLink to="/registration">
                Регистрация
            </NuxtLink>
        </div>

        <div class="auth-form-container" v-if="!forgot_password">
            <h1>Войти</h1>

            <Tabs value="0">
                <TabList>
                    <Tab value="0">Вход по СМС</Tab>
                    <Tab value="1">Вход по логину</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <Form @submit="onFormSubmit">
                            <InputText name="phone" type="text" placeholder="+7 (___)___-__-__" fluid />
                            <Button type="submit" class="login_btn" label="Войти" />
                        </Form>
                        <div class="forgot_password_link_wrapper" v-if="0">
                            <div class="forgot_password_link" @click="forgot_password=true">
                                Забыли пароль?
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <Form @submit="onFormSubmit" class="auth_with_password">
                            <InputText name="phone" type="text" placeholder="+7 (___)___-__-__" fluid />
                            <Password v-model="password" class="password" placeholder="Пароль" toggleMask />
                            <Button type="submit" class="login_btn" label="Войти" />
                        </Form>
                        <div class="forgot_password_link_wrapper" v-if="0">
                            <div class="forgot_password_link" @click="forgot_password=true">
                                Забыли пароль?
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
            <p class="policy">Нажимая продолжить, вы соглашаетесь с Правилами пользования и Политикой конфиденциальности</p>
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