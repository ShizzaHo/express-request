// Внешние зависимости
const express = require('express')
// Локальные зависимости
const requestService = require('./services/requests')
// Конфигурация сервера Express
const app = express()
const port = 3000

// Загружаем GET запросы
requestService.get.load(app);
// Загружаем POST запросы
requestService.post.load(app);

// Запуск сервера
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})