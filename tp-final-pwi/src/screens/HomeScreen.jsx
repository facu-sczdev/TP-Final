import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useChat } from '../context/ChatContext';
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import '../styles/ContactList.css'
import ChatScreen from "./ChatScreen";
import '../styles/HomeScreen.css'

export default function HomeScreen(){
    const { contacts, selectedContactId, setSelectedContactId } = useChat();
    const selectedContact = contacts.find(c => c.id === selectedContactId);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 900 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelectContact = (contactId) => {
        setSelectedContactId(contactId);

        if (isMobile) {
            navigate(`/chat/${contactId}`);
        }
    };

    return(
        <div className={`home-container ${isMobile ? 'home-container-mobile' : ''}`}>
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
                    <ContactList onSelectContact={handleSelectContact}/>
                </div>
            </aside>
            {!isMobile && (
                <main className="chat-container">
                    <ChatScreen selectedContact={selectedContact}/>
                </main>
            )}
        </div>
    )
}