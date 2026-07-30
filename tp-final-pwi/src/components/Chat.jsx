// src/components/Chat.jsx
import { useState } from 'react';
import Message from './Message';
import '../styles/Chat.css';

export default function Chat({ contact, onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const messagesList = contact?.messages || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    onSendMessage(contact.id, inputText);
    setInputText('');
  };

  return (
    <div className='chat-panel'>
      <div className='messages-container'>
        {messagesList.map((msg, index) => (
          <Message key={msg.id || index} message={msg} />
        ))}
      </div>

      <form className='chat-form' onSubmit={handleSubmit}>
        <input
          className='chat-input'
          type="text"
          placeholder="Escribe un mensaje..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className='chat-button' type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}