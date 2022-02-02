import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { api } from '../../services/api';



export const Alterar = () => {

    const [a, setA] = useState();
    const [b, setB] = useState();
    const [c, setC] = useState();
    const [d, setD] = useState();
    const [e, setE] = useState();
    const [f, setF] = useState();
    const [g, setG] = useState();


    const handleAlterar = async () => {
        try {

            await api.put(`/alterar/` + a, {
                nome: b,
                data_de_nascimento: c,
                cpf: d,
                sexo: e,
                endereco: f,
                status: g
            }).then(() => {
                window.location.reload();
            });
        } catch(err) { console.log('Error: ' + err) }
    }

    return (
        <div className='formulario'>
            <fieldset>
                <legend>
                    <h2>Alterar dados do paciente</h2>
                </legend>
                <Formik
                    initialValues={{}}
                    onSubmit={handleAlterar}
                >
                    <Form className="form">
                    <div className="form-group">
                        <label>
                            <h4>Id</h4>
                            <Field 
                                name="id_pacientes" 
                                value={a}
                                onChange={(e)=> setA(e.target.value)}
                                className="field"
                                placeholder="Id" />
                        </label>

                        <ErrorMessage
                            component="span"
                            name="id_pacientes"
                            className="form-error" />
                    </div>
                    <div className="form-group">
                        <label>
                            <h4>Nome</h4>
                            <Field 
                                name="nome" 
                                value={b}
                                onChange={(e)=> setB(e.target.value)}
                                className="field"
                                placeholder="nome" />
                        </label>

                        <ErrorMessage
                            component="span"
                            name="nome"
                            className="form-error" />
                    </div>
                    <div className='form-group'>
                        <label>
                            <h4>Data de Nascimento</h4>
                            <Field 
                                name="data_de_nascimento"
                                value={c} 
                                onChange={(e)=> setC(e.target.value)}
                                className="field"
                                placeholder="data_de_nascimento" />

                        </label>
                        <ErrorMessage
                            component="span"
                            name="data_de_nascimento"
                            className="form-error" />
                    </div>
                    <div className='form-group'>
                        <label>
                            <h4>CPF</h4>
                            <Field 
                                name="cpf" 
                                value={d}
                                onChange={(e)=> setD(e.target.value)}
                                className="field"
                                placeholder="cpf"
                            />
                        </label>
                        <ErrorMessage
                            component="span"
                            name="cpf"
                            className="form-error" />
                    </div>
                    <div className='form-group'>
                        <label>
                            <h4>Sexo</h4>
                            <Field 
                                name="sexo" 
                                value={e}
                                onChange={(e)=> setE(e.target.value)}
                                className="field"
                                placeholder="sexo" />
                        </label>
                        <ErrorMessage
                            component="span"
                            name="sexo"
                            className="form-error" />
                    </div>
                    <div className='form-group'>
                        <label>
                            <h4>Endereço</h4>
                            <Field 
                                name="endereco" 
                                value={f}
                                onChange={(e)=> setF(e.target.value)}
                                className="field"
                                placeholder="endereco" />
                        </label>
                        <ErrorMessage
                            component="span"
                            name="endereco"
                            className="form-error" />
                    </div>
                    <div className='form-group'>
                        <label>
                            <h4>Status</h4>
                            <Field 
                                name="status"
                                value={g}
                                onChange={(e)=> setG(e.target.value)}
                                className="field"
                                placeholder="status" />
                        </label>
                        <ErrorMessage
                            component="span"
                            name="status"
                            className="form-error" />
                    </div>
                    <button className="button" type='submit'>
                        Alterar
                    </button>
                    </Form>
            </Formik>
            </fieldset>
        </div>
    )
}