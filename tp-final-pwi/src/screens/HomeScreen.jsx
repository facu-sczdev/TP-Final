import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useChat } from '../context/ChatContext';
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import '../styles/ContactList.css'
import ChatScreen from "./ChatScreen";
import '../styles/HomeScreen.css'

export default function HomeScreen(){
    const { contacts } = useChat();
    const [selectedContactId, setSelectedContactId] = useState(null);
    const selectedContact = contacts.find(c => c.id === selectedContactId);
    const navigate = useNavigate();

    return(
        <div className="home-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2 className="sidebar-title">Mis Chats</h2>
                    <button 
                        className="btn-add-contact"
                        onClick={() => navigate('/add-contact')}
                        title="Agregar nuevo contacto"
                    >
                        +
                    </button>
                </div>
                <SearchBar/>
                <div className="contacts-container">
                    <ContactList onSelectContact={setSelectedContactId}/>
                </div>
            </aside>
            <main className="chat-container">
                <ChatScreen selectedContact={selectedContact}/>
            </main>
        </div>
    )
}