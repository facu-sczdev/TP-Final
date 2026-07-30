// src/screens/ChatScreen.jsx
import { useChat } from '../context/ChatContext';
import Chat from '../components/Chat';
import '../styles/ChatScreen.css'

export default function ChatScreen({ selectedContact }) {
  const { handleSendMessage } = useChat();

  if (!selectedContact) {
    return (
      <div className="chat-screen-empty">
        <h3>Selecciona un contacto para empezar a chatear</h3>
      </div>
    );
  }

  return (
    <div className="chat-screen">
      <div className="chat-screen-header">
        <h3>{selectedContact.name}</h3>
      </div>
      <hr />
      <Chat contact={selectedContact} onSendMessage={handleSendMessage} />
    </div>
  );
}