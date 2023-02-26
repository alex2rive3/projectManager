import React from "react";
import ProyectoForm from "../../components/ProyectoForm";
import axios from "axios";
import Swal from "sweetalert2";

const ProyectoAdd = () => {
    const initialValues = {
        project: "",
        date: "",
    };

    const crearProyecto = async (values, actions) => {
        try {
            const respuesta = await axios.post(
                `${process.env.REACT_APP_API_URL}/proyectos`,
                values
            );
            console.log(respuesta);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha agregado ${respuesta.data.project} perfectamente!`,
                });

                actions.resetForm(initialValues);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Ops que mal!!!",
                text: `Error: ${
                    error?.response?.data?.message || error.message
                }`,
            });
        }
    };

    return (
        <>
            <h1>Plan a New Project</h1>
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <ProyectoForm
                        initialValues={initialValues}
                        botonTexto="Agregar"
                        onSubmit={crearProyecto}
                    />
                </div>
            </div>
        </>
    );
};

export default ProyectoAdd;
