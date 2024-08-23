// ConfirmDeleteModal.js
import React from "react";
import PropTypes from "prop-types";

export const ConfirmDeleteModal = ({ show, onConfirm, onCancel }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirma para eliminar</h5>
                    </div>
                    <div className="modal-body">
                        <p>¿Estás seguro de que quieres eliminar este contacto?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ConfirmDeleteModal.propTypes = {
    show: PropTypes.bool.isRequired,
    contactName: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};
