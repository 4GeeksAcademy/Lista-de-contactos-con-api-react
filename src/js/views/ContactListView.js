import React, { useState } from 'react';
import ContactCard from '../component/ContactCard';

const ContactListView = () => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'Chloe',
            address: 'Calle Perruna',
            phone: '777 777 777',
            email: 'chloe@amanda.auau',
        },
        // agregar más contactos aquí
    ]);

    const handleEdit = (id) => {
        // Lógica para editar el contacto con el id dado
        console.log(`Edit contact with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Lógica para eliminar el contacto con el id dado
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div className="container mt-5">
            {contacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default ContactListView;
