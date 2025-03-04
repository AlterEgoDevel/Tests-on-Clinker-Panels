// Код для работы с Telegram Web App
window.Telegram.WebApp.ready(); // Убедитесь, что WebApp готово

// Разворачиваем приложение на весь экран
Telegram.WebApp.expand();

// Устанавливаем цвет фона
Telegram.WebApp.setBackgroundColor('#FFFFFF'); // Устанавливает белый фон для приложения

// Попробуем вручную адаптировать размер
Telegram.WebApp.adjust();

// Получение данных о пользователе
const user = Telegram.WebApp.initDataUnsafe;
console.log(user);

// Пример отправки данных в Telegram
document.getElementById("sendDataBtn").addEventListener("click", function() {
  Telegram.WebApp.sendData("Hello, Telegram!");
});
