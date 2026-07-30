import { useSearchParams } from "react-router";
import { useChat } from "../context/ChatContext";
import ContactItem from "./ContactItem";
import '../styles/ContactList.css';

export default function ContactList({ onSelectContact }) {
    const { contacts = [] } = useChat() || {};
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('search') || '';

    const filteredContacts = contacts.filter((contact) => (
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    ));

    return (
        <div className='contact-list'>
            {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} onSelectContact={onSelectContact} />
                ))
            ) : (
                <p className='contact-list-empty'>No se encontró este contacto</p>
            )}
        </div>
    );
}
