<script setup>
/*
import { LMStudioClient, Chat } from "@lmstudio/sdk";
const client = new LMStudioClient();
const model = await client.llm.model("gemma-3-12b-it"); //llama-3.2-3b-instruct
*/

const input_text = ref('')
const button_load = ref(false)
const last_bot_message = ref('')
const messages = ref([
    {
        role: 'system',
        content: 'Привет! Я Ваш ассистент и я готов ответить на ваш вопрос.'
    },
])

const sendMessage = async () => {
    if(input_text.value.length > 0){

        console.log('start')

        var value = input_text.value
        button_load.value = true
        messages.value.push({
            role: 'user',
            content: value
        })
        input_text.value = ''
        button_load.value = false

        /*
        const chat = Chat.from(messages.value);
        const prediction = model.respond(chat);

        for await (const { content } of prediction) {
            console.log(content, new Date()) 
            last_bot_message.value += content
        }*/

        messages.value.push({
            role: 'system',
            content: value
        })
        
        last_bot_message.value = ''
    }
}

</script>

<template>
    <div class="assistent-chat">

        <div class="assistent-messages">
            <div v-for="message in messages" :class=" message.role + '_msg' + ' msg'">
                <div class="msg-wrapper">
                    <div class="message_title" v-if="message.role=='system'">Робот Анатолий</div>
                    <div class="message_title" v-else>Уважаемый пользователь (Вы)</div>

                    <div class="message-content" v-html="message.content"></div>
                </div>
            </div>

            <div v-if="last_bot_message.length" class="system_msg msg">
                <div class="msg-wrapper">
                    <div class="message_title">Робот Анатолий</div>
                    <div class="message-content" v-html="last_bot_message"></div>
                </div>
            </div>
        </div>

        <div class="chat-input">
            <InputText v-model="input_text" />
            <Button v-if="button_load == false" icon="pi pi-arrow-right" @click="sendMessage" />
            <Button v-else icon="pi pi-spin pi-spinner" disabled />
        </div>

    </div>
</template>

<style>
.assistent-messages{
    width: 700px;
    margin: 0 auto;
    overflow: auto;
}
.msg .msg-wrapper{
    padding: 20px;
    border: 1px black solid;
    border-radius: 10px;
    margin-bottom: 30px;
    background-color: #fff;
    width: fit-content;
    max-width: 400px;
}
.msg .message_title{
    font-weight: 700;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px black solid;
    width: fit-content;
}
.assistent-chat{
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.chat-input{
    width: 560px;
    margin: 0 auto;
    background: #fff;
    padding: 10px 30px;
    border-radius: 80px;
    display: flex;
    align-items: center;
    gap: 20px
}
.chat-input .p-inputtext{
    width: 100%;
}

</style>

