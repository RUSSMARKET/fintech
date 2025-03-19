<script setup>

const toast = useToast();

var actual_step = ref(1)
var confirm_code = ref(null)
var seconds_last = ref(60)
var geo_checked = ref(false)
var message_checked = ref(false)
var show_error = ref('')
var password = ref('')
var confirm_password = ref('')

const Reset = () => {
    actual_step.value = 1
}

const nextStep = () => {
    actual_step.value = actual_step.value + 1
    show_error.value = ''
    
    if(actual_step.value == 2){
        var interval = setInterval(() => {
            if(seconds_last.value > 0){
                seconds_last.value = seconds_last.value - 1
            } else {
                clearInterval(interval)
            }
        }, 1000)
    }
}

const ConfirmPhomeChange = (target) => {
    if(target.value.length == 6){
        nextStep()
    }
}

const getGeolocation = () => {
    if(geo_checked.value) {
        geo_checked.value = false
        return
    }
    if (!navigator.geolocation){
        console.log("Geolocation is not supported by your browser");
        return;
    }
    function geo_success(position) {
        //var latitude  = position.coords.latitude;
        //var longitude = position.coords.longitude;
        geo_checked.value = true
    }
    function geo_error() {
        console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(geo_success, geo_error);
}

const getMessages = () => {
    if(message_checked.value) {
        message_checked.value = false
        return
    }
    if(!("Notification" in window)){
        throw new Error("Your browser does not support push notification");
    }

    if (Notification.permission !== 'denied') {
        message_checked.value = true
    }
}

const AccessSubmit = () => {
    if(!geo_checked.value || !message_checked.value){
        show_error.value = 'Доступа нет'
        return
    }
    nextStep()
}

const PasswordSubmit = () => {
    if(password.value.length >= 8){
        if(password.value == confirm_password.value){
            if(!('!@#$&_-~.*').split('').some(need => password.value.includes(need))){
                show_error.value = 'Пароль должен содержать хотя бы один спец символ'
                return
            }
            if(!('0123456789').split('').some(need => password.value.includes(need))){
                show_error.value = 'Пароль должен содержать хотя бы одну цифру'
                return
            }
            if(!('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').some(need => password.value.includes(need))){
                show_error.value = 'Пароль должен содержать хотя бы одну заглавную букву'
                return
            }
            if(!('abcdefghijklmnopqrstuvwxyz').split('').some(need => password.value.includes(need))){
                show_error.value = 'Пароль должен содержать хотя бы одну строчную букву'
                return
            }
            
            toast.add({ severity: 'success', summary: 'Успешно', detail: 'Вы успешно зарегистрировались в системе', life: 3000 });
            navigateTo({
                path: '/profile',
            });
        } else {
            show_error.value = 'Пароли не совпадают'
        }
    } else {
        show_error.value = 'Минимальная длина пароля - 8 символов'
    }
}

const generatePassword = () => {
    password.value = ''
    var length = 8,
	charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&_-~.*";
	for (var i = 0, n = charset.length; i < length; ++i) {
		password.value += charset.charAt(Math.floor(Math.random() * n));
	}
    if(!('!@#$&_-~.*').split('').some(need => password.value.includes(need))){
        password.value += ('!@#$&_-~.*').charAt(Math.floor(Math.random() * ('!@#$&_-~.*').length))
    }
    if(!('0123456789').split('').some(need => password.value.includes(need))){
        password.value += ('0123456789').charAt(Math.floor(Math.random() * ('0123456789').length))
    }
    if(!('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').some(need => password.value.includes(need))){
        password.value += ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').charAt(Math.floor(Math.random() * ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').length))
    }
    if(!('abcdefghijklmnopqrstuvwxyz').split('').some(need => password.value.includes(need))){
        password.value += ('abcdefghijklmnopqrstuvwxyz').charAt(Math.floor(Math.random() * ('abcdefghijklmnopqrstuvwxyz').length))
    }    
    confirm_password.value = password.value
}
</script>

<template>
    <div class="reg-page">
        <div class="reg-header">
            <img class="logo" src="@/assets/img/logo.png" />
            <NuxtLink to="/auth">
                Войти
            </NuxtLink>
        </div>

        <div class="reg-form-container" v-if="actual_step == 1" >
            <h1>Регистрация</h1>

            <Form @submit="nextStep" class="first_step">
                <InputText name="username" type="text" placeholder="Имя" fluid />
                <InputText name="secondname" type="text" placeholder="Фамилия" fluid />
                <InputText name="phone" type="text" placeholder="Номер телефона" fluid />
                <Button type="submit" class="login_btn" label="Зарегистрироваться" />
            </Form>
            <p class="policy">Нажимая продолжить, вы соглашаетесь с Правилами пользования и Политикой конфиденциальности</p>
        </div>  

        <div class="reg-form-container confirm-phone" v-else-if="actual_step == 2" >
            <h1>Регистрация</h1>
            <p class="confirm-phone-info">Мы отправили СМС с кодом вам на номер +7(912)250-02-93</p>
            <Form @submit="">
                <InputOtp @change="ConfirmPhomeChange" v-model="confirm_code" :length="6" integerOnly />
            </Form>
            <p class="timer">Повторно получить СМС с кодом можно через <span v-html="seconds_last"></span> секунд</p>
            <p class="bask_btn" @click="Reset">Вернуться назад</p>
        </div>

        <div class="reg-form-container" v-else-if="actual_step == 3" >
            <h1>Для приложения требуется доступ</h1>

            <Form @submit="AccessSubmit">
                <div class="access_checkbox" @click="getGeolocation">
                    <Checkbox v-model="geo_checked" binary disabled  />
                    <div class="checkbox_card">
                        <h2>Геолокация</h2>
                        <p>Требуется для формировани подсказок, уведомлений, и безопасной работы приложения</p>
                    </div>
                </div>
                <div class="access_checkbox" @click="getMessages">
                    <Checkbox v-model="message_checked" binary disabled  />
                    <div class="checkbox_card">
                        <h2>Уведомления</h2>
                        <p>Требуется для получения информационных сообщений и предупреждений от сервиса</p>
                    </div>
                </div>
                
                <Button type="submit" class="login_btn" label="Продолжить" />
                <div v-if="show_error" class="error_msg">Доступа нет</div>
            </Form>
        </div> 

        <div class="reg-form-container step_four" v-else-if="actual_step == 4">
            <h1>Регистрация</h1>
            <p class="subtitle">Придумайте пароль или воспользуйтесь генератором паролей</p>

            <Form @submit="PasswordSubmit">
                <Password v-model="password" placeholder="Введите пароль" toggleMask />

                <div @click="generatePassword" class="generate_password">Сгенерировать пароль</div>

                <div class="password-rules">
                    <div class="password-rules-title">Требования к паролю:</div>
                    <p>Не менее 8 символов</p>
                    <p>Латинские заглавные и строчные символы</p>
                    <p>Не менее 1 цифры и специального символа</p>
                </div>

                <Password v-model="confirm_password" class="confirm_password" placeholder="Повторить пароль" toggleMask/>
                
                <Button type="submit" class="login_btn" label="Продолжить" />
                <div v-if="show_error.length" class="error_msg" v-html="show_error"></div>
            </Form>
        </div>
        
    </div>    
</template>

<style>
.reg-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.reg-header .logo{
    width: 300px;
}
.reg-form-container{
    width: 400px;
    margin: 0 auto;
}
.reg-form-container h1{
    text-align: center;
    margin: 0;
    margin-bottom: 50px;
    font-size: 32px;
    font-weight: 700;
}
.reg-form-container .p-form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.reg-form-container .policy{
    padding-left: 50px;
    padding-right: 50px;
    font-size: 16px;
    text-align: center;
    color: #787878;
    margin-top: 30px;
}
.reg-form-container .p-form {
    margin-bottom: 30px;
}
.reg-form-container .first_step > .p-inputtext,
.reg-form-container .p-button{
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
.reg-form-container.confirm-phone .p-form {
    margin-bottom: 0px;
}
.reg-form-container .p-inputotp{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 20px;
}
.reg-form-container .p-inputotp .p-inputtext{
    border: #787878 1px solid;
    border-radius: 5px;
    background-color: #F6F6F6;
}
.confirm-phone-info,
.timer{
    max-width: 276px;
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
}
.bask_btn{
    text-align: center;
    color: #213E89;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;
}
.reg-form-container .access_checkbox{
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}
.checkbox_card{
    padding: 20px;
    border: 1px #E9E9E9 solid;
    border-radius: 10px;
}
.checkbox_card h2{
    margin-top: 0;
    color: #213E89;
    font-size: 16px;
}
.checkbox_card p{
    margin: 0;
}
.error_msg{
    text-align: center;
    color: #D60000;
    font-size: 16px;
    margin-top: 30px;
    font-weight: 600;
}
.p-checkbox-checked + .checkbox_card{
    background-color: #E7EEFF;
}
.p-password-input{
    width: 100%;
    padding: 20px;
    font-size: 16px;
    padding-inline: 20px !important;
    padding-inline: 20px !important;
}
.generate_password{
    color: #213E89;
    margin-bottom: 30px;
    cursor: pointer;
    margin-top: 15px;
}
.password-rules{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
}
.password-rules p {
    margin: 0;
    color: #787878;
    font-size: 16px;
}
.password-rules-title{
    font-weight: 700;
    font-size: 16px;
}
.confirm_password{
    margin-bottom: 30px;
}
.step_four > .subtitle{
    text-align: center;
    max-width: 328px;
    margin: 0 auto;
    margin-bottom: 30px;
}
</style>