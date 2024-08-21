import React from "react";
import { Link } from "react-router-dom";

const AddContactView = () => {
    return (
        <div className="mx-5 pt-5"> 
            <h1 style={{ textAlign: "center" }}>Añadir un nuevo contacto</h1>
            <label className="form-label">Nombre Completo</label>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Nombre y Apellido" />
            </div>

            <label className="form-label">Email</label>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="correo@ejemplo.com" />
            </div>

            <label className="form-label">Teléfono</label>
            <div className="mb-3">
                <div className="input-group">
                    <input type="tel" className="form-control" placeholder="Teléfono" />
                </div>
            </div>

            <label className="form-label">Dirección</label>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Dirección" />
            </div>

            <div className="d-flex justify-content-center">
				<button className="btn btn-primary"  style={{ width: "1200px" }}>Guardar</button>
				</div>
<footer className="mx-2"> 
<Link to="/">
			Volver a la lista de contactos
			</Link>
            </footer>
        </div>
        
    );
}

export default AddContactView;
