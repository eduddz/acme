import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '../../services/api';

import * as yup from 'yup';

import './styles.scss';

export const Registrar = () => {

    const handleClickRegister = (values) => {
        api.post('/registrar', {
        nome: values.nome,
        data_de_nascimento: values.data_de_nascimento,
        cpf: values.cpf,
        sexo: values.sexo,
        endereco: values.endereco,
        status: values.status
        }).then(() => {
            window.location.reload();
        })
    }

    const validationRegister = yup.object().shape({
        nome: yup.string().required('Este campo é obrigatório'),
        data_de_nascimento: yup.string().required('Este campo é obrigatório'),
        cpf: yup.string().min(11).max(11).required('Este campo é obrigatório'),
        sexo: yup.string().min(1).max(1).required('Este campo é obrigatório'),
        endereco: yup.string(),
        status: yup.string().required('Este campo é obrigatório')
    })

    return (
        <div className="formulario">
            <fieldset>
                <legend>
                    <h2>Registrar Paciente</h2>
                </legend>
                <Formik
                    initialValues={{}}
                    onSubmit={handleClickRegister}
                    validationSchema={validationRegister}
                >
                    <Form className="form">
                    <div className="form-group">
                        <label>
                            <h4>Nome</h4>
                            <Field 
                                name="nome" 
                                className="field"
                                placeholder="Nome" />
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
                                className="field"
                                placeholder="2022-01-29" />

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
                                className="field"
                                placeholder="CPF" />
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
                                className="field"
                                placeholder="Sexo" />
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
                                className="field"
                                placeholder="Endereço" />
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
                                className="field"
                                placeholder="Status" />
                        </label>
                        <ErrorMessage
                            component="span"
                            name="status"
                            className="form-error" />
                    </div>
                    <button className="button" type="submit">
                        Registrar
                    </button>
                    </Form>
                </Formik>
            </fieldset>
        </div>
    )
};