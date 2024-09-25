const express = require("express");
const path = require("path");

const app = express();

// Указываем Express использовать статические файлы из папки dist
app.use(express.static(__dirname + '/dist/materuak'));

// Перенаправляем все запросы на index.html, чтобы Angular мог обрабатывать маршруты
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/materuak/index.html'));
});

// Указываем порт, который использует Heroku или локальный порт для разработки
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
