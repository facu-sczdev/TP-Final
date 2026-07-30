import '../styles/ContactItem.css';

export default function Contactitem({ contact, onSelectContact }) {
    return (
        <div
            className='contact-item-link'
            onClick={() => onSelectContact(contact.id)}
        >
            <div className='contact-item'>
                <div className='contact-avatar'>{contact.name.charAt(0).toUpperCase()}</div>
                <div className='contact-meta'>
                    <h4>{contact.name}</h4>
                    <p>{contact.lastMessage}</p>
                </div>
            </div>
        </div>
    );
}