import React from 'react';

import axios from 'axios';

import { useForm } from '../hooks/handleHook';

const Register = () => {

    const register = () => {
        console.log("fields in Register: ", fields);

        axios
            .post('https://pure-headland-63143.herokuapp.com/users/register', {...fields})
            .then(res => {
                console.log("res in Register: ", res)
            })
            .catch(err => console.error(err.response));
    }

    const { fields, submit, handleChanges } = useForm(() => register());

    return (
        <>
            <form onSubmit={submit}>
                <input type="text" name='username' onChange={handleChanges} placeholder="username" />
                <input type="email" name='email' onChange={handleChanges} placeholder="email" />
                <input type="password" name='password' onChange={handleChanges} placeholder="password" />
                <button>Register</button>
            </form>
        </>
    )
}
export default Register;
