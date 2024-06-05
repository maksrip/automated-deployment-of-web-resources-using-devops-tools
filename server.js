const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Папка для статичних файлів (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Обробка кореневого маршруту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Обробка помилки 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Обробка помилки сервера (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

