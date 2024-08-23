const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            contactToEdit: null,
        },
        actions: {
            contactoAEditar: (contact) => {
                setStore({ contactToEdit: contact });
            },
            clearContactToEdit: () => {
                setStore({ contactToEdit: null });
            },

            chequearOCrearAgenda: async () => {
                try {
                    const res = await fetch("https://playground.4geeks.com/contact/agendas/amanda");
                    if (res.ok) {
                        console.log("¡Esta agenda ya existe!"); 
                    } else if (res.status === 404) {
                        console.log("Agenda no encontrada. Creando agenda...");
                        await getActions().crearAgenda();
                    } else {
                        throw new Error("Error al verificar la agenda: " + res.status);
                    }
                } catch (error) {
                    console.error("Error en la verificación o creación de la agenda.", error);
                }
            },

            crearAgenda: async () => {
                try {
                    const res = await fetch("https://playground.4geeks.com/contact/agendas/amanda", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify([])
                    });
                    if (res.ok) {
                        getActions().cargarContactos();
                    } else {
                        console.error("Error al crear la agenda");
                    }
                } catch (error) {
                    console.error("Error al crear la agenda", error);
                }
            },

            cargarContactos: async () => {
                try {
                    const res = await fetch("https://playground.4geeks.com/contact/agendas/amanda/contacts", {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    });
                    if (!res.ok) {
                        throw new Error("Agenda no encontrada");
                    }
                    const data = await res.json();
                    if (data.contacts) {
                        setStore({ contacts: data.contacts });
                    } else {
                        throw new Error("No se encontraron contactos");
                    }
                } catch (error) {
                    console.error("Error al cargar la lista de contactos", error);
                    getActions().crearAgenda();
                }
            },

            addContacto: async (nuevoContacto) => {
                try {
                    const res = await fetch("https://playground.4geeks.com/contact/agendas/amanda/contacts", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(nuevoContacto)
                    });
                    if (res.ok) {
                        getActions().cargarContactos();
                    } else {
                        console.error("Error al crear contacto");
                    }
                } catch (error) {
                    console.error("Error al crear contacto", error);
                }
            },

            editarContacto: async (id, contact) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/amanda/contacts/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: contact.name,
                            phone: contact.phone,
                            email: contact.email,
                            address: contact.address
                    })
                    });
                    if (res.ok) {
                        getActions().cargarContactos();
                    } else {
                        console.error("Editado exitosamente!");
                    }
                } catch (error) {
                    console.error("Error al editar el contacto", error);
                }
            },

            eliminarContacto: async (id) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/amanda/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (res.ok) {
                        getActions().cargarContactos();
                    } else {
                        console.error("Error al eliminar el contacto");
                    }
                } catch (error) {
                    console.error("Error al eliminar el contacto", error);
                }
            }
        }
    };
};

export default getState;
