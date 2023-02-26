import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../../components/DeleteButton";
import Card from "../../components/Card";

const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [recargar, setRecargar] = useState(false);
    ///////////////Este para cargar todos los datos cuando se carga la pagina
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/proyectos`
            );
            setProyectos(respuesta.data);
        };
        getData();
        setRecargar(false);
    }, [recargar]);

    const quitarProyecto = (proyectoID) => {
        setProyectos(
            proyectos.filter((proyecto) => proyecto._id !== proyectoID)
        );
    };
    const actualizar = async (text, id) => {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/proyectos/${text}/${id}`,
            { estado: true }
        );
        setRecargar(true);
        console.log(res);
    };
    return (
        <div>
            <div className="contenedor">
                <div className="col">
                    <h1 className="start">Backlog</h1>
                    <div className="columna">
                        {proyectos
                            .filter((pro) => pro.porgreso === false)
                            .map((p, idx) => (
                                <Card
                                    key={idx}
                                    id={p._id}
                                    name={p.project}
                                    date={p.date}
                                    text={"progreso"}
                                    button={"Start Proyect"}
                                    operacion={actualizar}
                                />
                            ))}
                    </div>
                </div>
                <div className="col">
                    <h1 className="progres">In Progress</h1>
                    <div className="columna">
                        {proyectos
                            .filter(
                                (pro) =>
                                    pro.porgreso === true &&
                                    pro.complete === false
                            )
                            .map((p, idx) => (
                                <Card
                                    key={idx}
                                    id={p._id}
                                    name={p.project}
                                    date={p.date}
                                    text={"complete"}
                                    button={"Move to Complete"}
                                    operacion={actualizar}
                                />
                            ))}
                    </div>
                </div>
                <div className="col">
                    <h1 className="complete">Completed</h1>
                    <div className="columna">
                        {proyectos
                            .filter(
                                (pro) =>
                                    pro.porgreso === true &&
                                    pro.complete === true
                            )
                            .map((p, idx) => (
                                <div key={idx} className="carta">
                                    <h3>{p.project}</h3>
                                    <h6>Due: {p.date}</h6>
                                    <DeleteButton
                                        id_Proyecto={p._id}
                                        successCallback={quitarProyecto}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="botonera">
                <Link to="/proyectos/agregar" className="btn btn-primary">
                    Agregar Proyecto
                </Link>
            </div>
        </div>
    );
};

export default Proyectos;
