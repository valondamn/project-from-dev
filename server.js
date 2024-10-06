const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// Прокси для запросов к API, удаляющий префикс /api
app.use('/api', createProxyMiddleware({
  target: 'http://69.197.164.80:8000', // Ваш внешний API-сервер
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    '^/api': '', // Убираем /api из запросов
  },
}));

// Статические файлы
app.use(express.static(__dirname + '/dist/materuak'));
// Перенаправляем все запросы на Angular приложение
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/materuak/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
