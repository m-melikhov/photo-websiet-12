import React, { useState } from 'react';
import '../styles/Contact.css';

interface ContactForm {
  name: string;
  phone: string;
  telegram: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    telegram: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form with data:', form);

    try {
      const response = await fetch(
        '/api/send-message', // Оновлений URL для API
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      // Debugging response status and body
      console.log('Response status:', response.status);
      const responseBody = await response.json();
      console.log('Response body:', responseBody);

      if (response.ok) {
        alert('Message sent!');
        setForm({ name: '', phone: '', telegram: '', message: '' });
      } else {
        alert(
          `Failed to send message: ${responseBody.error || response.statusText}`
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Не вдалося надіслати повідомлення');
    }
  };

  return (
    <section
      id="contact"
      className="contact"
    >
      <h2>Надіслати запит</h2>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Ваше імʼя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш номер телефону"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telegram"
          placeholder="Ваш Telegram"
          value={form.telegram}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Повідомлення"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Надіслати повідомлення</button>
      </form>
    </section>
  );
};

export default Contact;
