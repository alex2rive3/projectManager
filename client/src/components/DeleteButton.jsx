import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DeleteButton = ({ id_Proyecto, successCallback }) => {
    const eliminarProyecto = async (proyectoId) => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/proyectos/${proyectoId}`
            );
            successCallback(proyectoId);
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
        <button
            className="btn btn-danger ms-2"
            onClick={() => {
                eliminarProyecto(id_Proyecto);
            }}
        >
            Remove Proyect
        </button>
    );
};

export default DeleteButton;
