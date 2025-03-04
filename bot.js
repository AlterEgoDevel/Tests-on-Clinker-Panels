require('dotenv').config();  // Этот код должен быть в начале файла


const { Telegraf } = require('telegraf');
require('dotenv').config(); // Подключаем поддержку .env

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Привет! Я твой Telegram-бот! 🚀'));

bot.launch();
console.log('Бот запущен!');

