import React from 'react';

import axios from 'axios';

import { useForm } from '../hooks/handleHook';

const Login = () => {

    const login = () => {
        console.log("fields in Login: ", fields);

        axios
            .post('http://localhost:5000/api/login', {...fields})
            .then(res => {
                localStorage.setItem('token', res.data.payload)
            })
            .catch(err => console.error(err.response));
    }

    const { fields, submit, handleChanges } = useForm(() => login());

    const password = 'i<3Lambd4';

    return (
        <>
            <form onSubmit={submit}>
                <input type="text" name='username' onChange={handleChanges} placeholder="username" />
                <p>Lambda School</p>
                <input type="password" name='password' onChange={handleChanges} placeholder="password" />
                <p>{password}</p>
                <button>Login</button>
            </form>
        </>
    )
}
export default Login;