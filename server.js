const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// Прокси для запросов к API
app.use('/api', createProxyMiddleware({
  target: 'http://69.197.164.80:8000', // Ваш внешний API-сервер
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    '^/api': '', // Убираем префикс /api при проксировании
  },
}));

// Статические файлы
app.use(express.static(__dirname + '/dist/materuak'));

// Обработка маршрутов Angular
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/materuak/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
