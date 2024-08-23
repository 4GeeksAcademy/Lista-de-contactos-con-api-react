import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContactView = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    const { id } = useParams();  // Obtiene el id desde la URL para saber si estamos editando
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const existingContact = store.contacts.find(c => c.id === id);
            if (existingContact) {
                setContact(existingContact); 
            }
        }
    }, [id, store.contacts]);

    const handleChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id) {
            actions.editarContacto(id, contact); // Acciona la función de editar
        } else {
            actions.addContacto(contact); // Acciona la función de agregar
        }
        navigate("/"); // Redirecciona a la lista de contactos
    };

    return (
        <div className="mx-5 pt-5">
            <h1 style={{ textAlign: "center" }}>{id ? "Editar contacto" : "Añadir un nuevo contacto"}</h1>

            <form onSubmit={handleSubmit}>
                <label className="form-label">Nombre Completo</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                        placeholder="Nombre Completo"
                    />
                </div>

                <label className="form-label">Email</label>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                    />
                </div>

                <label className="form-label">Teléfono</label>
                <div className="input-group mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                        placeholder="Teléfono"
                    />
                </div>

                <label className="form-label">Dirección</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                        required
                        placeholder="Dirección"
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" style={{ width: "300px" }}>
                        {id ? "Guardar contacto" : "Añadir contacto"}
                    </button>
                </div>
            </form>

            <footer className="mx-2 mt-3">
                <Link to="/">
                    Volver a la lista de contactos
                </Link>
            </footer>
        </div>
    );
};

export default AddContactView;
