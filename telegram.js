// Код для работы с Telegram Web App
window.Telegram.WebApp.ready(); // Убедись, что WebApp готово

// Получение данных о пользователе
const user = Telegram.WebApp.initDataUnsafe;
console.log(user);

// Пример отправки данных в Telegram
document.getElementById("sendDataBtn").addEventListener("click", function() {
  Telegram.WebApp.sendData("Hello, Telegram!");
});
