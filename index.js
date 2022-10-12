const TelegramAPI = require('node-telegram-bot-api')

const token = '5610218790:AAFDXA530oBofiYKO5BvFJdE5s8zHT3dbog'

const bot = new TelegramAPI(token, {
    polling: true
})

bot.on("message", msg => {
    const text = msg.text
    const chatId = msg.chat.id
    bot.sendMessage(chatId, `Your text: "${text}"`)
    console.log(msg)
})