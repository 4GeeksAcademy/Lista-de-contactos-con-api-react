// ContactCard.js
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { ConfirmDeleteModal } from './confirmDeleteModal';

const ContactCard = ({ contact, onDelete }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(contact.id);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <div className='contact-card'>
            <div className="contact-card-image d-flex align-items-center p-3 border">
                <img
                    src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/618c56196f064349952317.jpg"
                    alt="contact"
                    className="rounded-circle me-3"
                    style={{ width: '90px', height: '90px' }}
                />
                <div className="contacto-individual flex-grow-1">
                    <h5 className="mb-1">{contact.name}</h5>
                    <p className="mb-1"><i className="bi bi-geo-alt"></i> {contact.address}</p>
                    <p className="mb-1"><i className="bi bi-telephone"></i> {contact.phone}</p>
                    <p className="mb-1"><i className="bi bi-envelope"></i> {contact.email}</p>
                </div>
                <div className='button-group'>
                    <button
                        className='editarContacto'
                        onClick={() => navigate(`/AddContactView/${contact.id}`)}
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className='borrador'
                        onClick={handleDeleteClick}>
                        <i className='fas fa-trash'></i>
                    </button>
                </div>
                <ConfirmDeleteModal
                    show={showModal}
                    contactName={contact.name}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactCard;
