const express = require("express");
const path = require("path");

const app = express();

// Отключаем принудительный редирект на HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    return res.redirect('http://' + req.headers.host + req.url);
  }
  next();
});

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
