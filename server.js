const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// Прокси для запросов к API, передаём их с префиксом /api
app.use('/api', createProxyMiddleware({
  target: 'http://69.197.164.80:8000', // Ваш внешний API-сервер
  changeOrigin: true,
  secure: false,  // Отключает проверку HTTPS
}));

// Настройка для раздачи статических файлов
app.use(express.static(__dirname + '/dist/materuak'));

// Перенаправляем все маршруты на Angular приложение
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/materuak/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
