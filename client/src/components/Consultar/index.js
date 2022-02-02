import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './styles.scss';


export const Consultar = () => {
    const [users, setUsers] = useState([]);
    const [nome, setNome] = useState('');

    useEffect(() => {
        (async () => {
            const res = await api.get('/');
            setUsers(res.data)
        })();
    }, []);

    return (
        <div className='consultar'>
            <fieldset>
                <legend>
                    <h2>Pesquisar por nome</h2>
                </legend>
                <input 
                    type="text"
                    onChange={(e) => { setNome(e.target.value) }}
                    placeholder='Digite o nome aqui'
                />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th className='data'>Data de Nascimento</th>
                            <th className='cpf'>CPF</th>
                            <th className='sexo'>Sexo</th>
                            <th>Endereço</th>
                            <th className='status'>Status</th>
                        </tr> 
                    </thead>
                <tbody>
                {
                    users.filter(u => u.nome === nome).map((user) => (
                        <tr key={user.id_pacientes} >
                            <td>
                                {user.id_pacientes}
                            </td>
                            <td>
                                {user.nome}
                            </td>
                            <td>
                                {user.data_de_nascimento.slice(0, 10).replace(/(\d{3})(\d{2})(\d{2})/, "$1/$2/$3")}
                            </td>
                            <td>
                            {user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
                            </td>
                            <td>
                                {user.sexo}
                            </td>
                            <td>
                                {user?.endereco}
                            </td>
                            <td>
                                {user.status}
                            </td>
                        </tr>
                    )) 
                }
                </tbody>
            </table>
        </fieldset>
        <fieldset>
            <legend>
                <h2>Todos os pacientes</h2>
            </legend>
            <table>
                <thead>

                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th className='data'>Data de Nascimento</th>
                    <th className='cpf'>CPF</th>
                    <th className='sexo'>Sexo</th>
                    <th>Endereço</th>
                    <th className='status'>Status</th>
                </tr>
                </thead>
                <tbody>
                    {  
                        users.map((user) => (
                            <tr key={user.id_pacientes}>
                                <td>
                                    {user.id_pacientes}
                                </td>
                                <td>
                                    {user.nome}
                                </td>
                                <td>
                                    {user.data_de_nascimento.slice(0, 10).replace(/(\d{3})(\d{2})(\d{2})/, "$1/$2/$3")}
                                </td>
                                <td>
                                    {user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
                                </td>
                                <td>
                                    {user.sexo}
                                </td>
                                <td>
                                    {user?.endereco}
                                </td>
                                <td>
                                    {user.status}
                                </td>
                            </tr>
                        ))  
                    } 
            </tbody>
            </table>
        </fieldset>
        </div>
    )
}