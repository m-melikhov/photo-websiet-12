import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Налаштування CORS
app.use(cors({
  origin: 'https://photo-websiet.vercel.app', // Вкажіть URL вашого фронтенда
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

const TELEGRAM_TOKEN = '7768657820:AAH0u708NfYv2oFxmGd8tQvjTw0Jqte75PQ';
const CHAT_ID = '-4585764361';  // ID чату, який ви отримали раніше

app.post('/api/send-message', async (req, res) => {
  console.log('Received request:', req.body); // Логування запиту
  const { name, phone, telegram, message } = req.body;

  const text = `Ім'я: ${name}\nТелефон: ${phone}\nTelegram: ${telegram}\nПовідомлення: ${message}`;

  try {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text,
    });

    if (response.data.ok) {
      res.status(200).send({ message: 'Message sent successfully!' });
    } else {
      res.status(500).send({ error: 'Failed to send message to Telegram' });
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error.response ? error.response.data : error.message);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
