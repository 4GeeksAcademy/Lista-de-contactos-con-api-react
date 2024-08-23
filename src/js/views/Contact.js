import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactCard from '../component/ContactCard';

const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link to="/">
                </Link>
                <div className="ml-auto">
                    <Link to="/agregar">
                        <button className="btn btn-success">Añadir nuevo contacto</button>
                    </Link>
                </div>
            </nav>
            <div className="container mt-5">
                {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            contact={contact}
                            onDelete={actions.eliminarContacto}
                        />
                    ))
                ) : (
                    <p>No hay contactos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Contact;
