import { createContext, useState, useContext } from "react";
import { contacts as initialContacts } from "../data/ContactsData";

const ChatContext = createContext();

export function ChatProvider ({children}){
    const [contacts, setContacts] = useState(initialContacts);
    const [selectedContactId, setSelectedContactId] = useState(null);

    const handleSendMessage = (contactId, newMessageContent) =>{
        setContacts((prevContacts)=>
        prevContacts.map((contact) =>{
            if (String(contact.id)=== String(contactId)){
                const newMessage = {
                    id:Date.now(),
                    sendByMe:true,
                    content:newMessageContent
                }
                return {
                    ...contact,
                    lastMessage: newMessageContent,
                    messages: [...contact.messages, newMessage]
                }
            }
            return contact;
        })
        );
    };

    const handleAddContact = (contactName) => {
        const newContact = {
            id: String(Date.now()),
            name: contactName,
            lastMessage: 'Sin mensajes',
            messages: []
        };
        setContacts((prevContacts) => [...prevContacts, newContact]);
        return newContact.id;
    };

    return (
        <ChatContext.Provider value={{contacts, handleSendMessage, selectedContactId, setSelectedContactId, handleAddContact}}>
            {children}
        </ChatContext.Provider>
    )
}
    export function useChat(){
        return useContext(ChatContext)
    }




