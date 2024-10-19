import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, telegram, message } = req.body;

    // Формуємо текст повідомлення для Telegram
    const text = `Ім'я: ${name}\nТелефон: ${phone}\nTelegram: ${telegram}\nПовідомлення: ${message}`;

    // Ваш Telegram Bot Token і Chat ID
    const TELEGRAM_TOKEN = '7768657820:AAH0u708NfYv2oFxmGd8tQvjTw0Jqte75PQ';
    const CHAT_ID = '-4585764361';

    try {
      // Надсилаємо POST-запит до Telegram API
      const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text,
      });

      // Перевіряємо успіх відправки повідомлення
      if (response.data.ok) {
        res.status(200).json({ message: 'Message sent successfully!' });
      } else {
        res.status(500).json({ error: 'Failed to send message to Telegram' });
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
