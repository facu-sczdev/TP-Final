// src/screens/ChatScreen.jsx
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useChat } from '../context/ChatContext';
import Chat from '../components/Chat';
import '../styles/ChatScreen.css'

export default function ChatScreen({ selectedContact }) {
  const { handleSendMessage, contacts, selectedContactId, setSelectedContactId } = useChat();
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (contactId) {
      setSelectedContactId(contactId);
    }
  }, [contactId, setSelectedContactId]);

  const activeContact = selectedContact || contacts.find((contact) => contact.id === contactId) || contacts.find((contact) => contact.id === selectedContactId);

  if (!activeContact) {
    return (
      <div className="chat-screen-empty">
        <h3>Selecciona un contacto para empezar a chatear</h3>
      </div>
    );
  }

  return (
    <div className="chat-screen">
      <div className="chat-screen-header">
        <button className="chat-screen-back" onClick={() => navigate('/')} title="Volver a la lista">
          ←
        </button>
        <h3>{activeContact.name}</h3>
      </div>
      <hr />
      <Chat contact={activeContact} onSendMessage={handleSendMessage} />
    </div>
  );
}