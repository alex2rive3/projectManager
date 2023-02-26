import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ProyectoErrores = Yup.object().shape({
    project: Yup.string()
        .min(3, "El Proyecto debe tener como minimo 3 caracteres")
        .required("Requerido"),
    date: Yup.string().required("El date es requerido."),
});

const ProyectoForm = ({ initialValues, onSubmit }) => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ProyectoErrores}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field
                        name="project"
                        className="form-control"
                        placeholder="Proyecto"
                    />
                    {touched.project && errors.project && (
                        <div className="ms-3 mt-1 text-danger">
                            {errors.project}
                        </div>
                    )}
                    <Field
                        type="date"
                        name="date"
                        className="form-control mt-2"
                        placeholder="Date"
                    />
                    {touched.date && errors.date && (
                        <div className="ms-3 mt-1 text-danger">
                            {errors.date}
                        </div>
                    )}
                    <Link className="btn btn-primary m-2 " to="/">
                        Volver
                    </Link>

                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        disabled={!(isValid && dirty)}
                    >
                        Plan Project
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ProyectoForm;
