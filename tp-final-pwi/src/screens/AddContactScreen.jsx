import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useChat } from '../context/ChatContext';
import '../styles/AddContactScreen.css';

export default function AddContactScreen() {
    const [contactName, setContactName] = useState('');
    const { handleAddContact } = useChat();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!contactName.trim()) {
            alert('Por favor ingresa un nombre');
            return;
        }

        // Crear el nuevo contacto
        const newContactId = handleAddContact(contactName);
        
        // Limpiar el input
        setContactName('');
        
        // Navegar de vuelta a home
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="add-contact-container">
            <div className="add-contact-card">
                <h2>Agregar Nuevo Contacto</h2>
                
                <form onSubmit={handleSubmit} className="add-contact-form">
                    <div className="form-group">
                        <label htmlFor="contactName">Nombre del Contacto</label>
                        <input
                            id="contactName"
                            type="text"
                            placeholder="Ej: Juan, María, etc..."
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="form-input"
                            autoFocus
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">
                            Agregar Contacto
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
