import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos de FontAwesome
import { Context } from '../store/appContext';

const ContactCard = ({ contact, onEdit, onDelete }) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
        <div className="contact-card d-flex align-items-center p-3  border">
            <img
                src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/618c56196f064349952317.jpg"
                alt=""
                className="rounded-circle me-3"
                style={{ width: '90px', height: '90px' }}
            />
            <div className="flex-grow-1">
                <h5 className="mb-1">{contact.name}</h5>
                <p className="mb-1"><i className="bi bi-geo-alt"></i> {contact.address}</p>
                <p className="mb-1"><i className="bi bi-telephone"></i> {contact.phone}</p>
                <p className="mb-1"><i className="bi bi-envelope"></i> {contact.email}</p>
            </div>
            <div className="ms-3">
                <FontAwesomeIcon icon={faEdit} className="me-2 text-primary" onClick={() => onEdit(contact.id)} />
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" onClick={() => onDelete(contact.id)} />
            </div>
        </div>
        <div className="contact-card d-flex align-items-center p-3 border">
            <img
                src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/618c56196f064349952317.jpg"
                alt=""
                className="rounded-circle me-3"
                style={{ width: '90px', height: '90px' }}
            />
            <div className="flex-grow-1">
                <h5 className="mb-1">{contact.name}</h5>
                <p className="mb-1"><i className="bi bi-geo-alt"></i> {contact.address}</p>
                <p className="mb-1"><i className="bi bi-telephone"></i> {contact.phone}</p>
                <p className="mb-1"><i className="bi bi-envelope"></i> {contact.email}</p>
            </div>
            <div className="ms-3">
                <FontAwesomeIcon icon={faEdit} className="me-2 text-primary" onClick={() => onEdit(contact.id)} />
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" onClick={() => onDelete(contact.id)} />
            </div>
        </div>
        <div className="contact-card d-flex align-items-center p-3 border">
            <img
                src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/618c56196f064349952317.jpg"
                alt=""
                className="rounded-circle me-3"
                style={{ width: '90px', height: '90px' }}
            />
            <div className="flex-grow-1">
                <h5 className="mb-1">{contact.name}</h5>
                <p className="mb-1"><i className="bi bi-geo-alt"></i> {contact.address}</p>
                <p className="mb-1"><i className="bi bi-telephone"></i> {contact.phone}</p>
                <p className="mb-1"><i className="bi bi-envelope"></i> {contact.email}</p>
            </div>
            <div className="ms-3">
                <FontAwesomeIcon icon={faEdit} className="me-2 text-primary" onClick={() => onEdit(contact.id)} />
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" onClick={() => onDelete(contact.id)} />
            </div>
        </div>
        <div className="contact-card d-flex align-items-center p-3 border">
            <img
                src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/618c56196f064349952317.jpg"
                alt=""
                className="rounded-circle me-3"
                style={{ width: '90px', height: '90px' }}
            />
            <div className="flex-grow-1">
                <h5 className="mb-1">{contact.name}</h5>
                <p className="mb-1"><i className="bi bi-geo-alt"></i> {contact.address}</p>
                <p className="mb-1"><i className="bi bi-telephone"></i> {contact.phone}</p>
                <p className="mb-1"><i className="bi bi-envelope"></i> {contact.email}</p>
            </div>
            <div className="ms-3">
                <FontAwesomeIcon icon={faEdit} className="me-2 text-primary" onClick={() => onEdit(contact.id)} />
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" onClick={() => onDelete(contact.id)} />
            </div>
        </div>
        </div>
    );
};

export default ContactCard;
