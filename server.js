const express = require("express");
const path = require("path");
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// Прокси для запросов к API, перенаправляющий их на ваш API-сервер
app.use('/api', createProxyMiddleware({
  target: 'http://69.197.164.80:8000', // URL вашего API-сервера
  changeOrigin: true,
  secure: false
}));

// Настройка для раздачи статических файлов
app.use(express.static(__dirname + '/dist/materuak'));

// Обработка всех маршрутов
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/materuak/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
