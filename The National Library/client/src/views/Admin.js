import React, { useState } from 'react'
import Login from '../components/Login'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundImage: `url(/img/AlfonsMorales.jpg)`
    },
}))
const Admin = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')


    const nameChangeHandle = (e) => {
        if (e.target.value.length > 3 || e.target.value.length === 0) {


            setName(e.target.value)
            setNameErr('')
        } else {
            setNameErr('Name must be longer than 3 characters')
        }
    }
    const passwordChangeHandle = (e) => {
        if (e.target.value.length > 8 || e.target.value.length === 0) {
            setPassword(e.target.value)
            setPasswordErr('')
        } else
            setPasswordErr('Password must be longer than 3 characters')
    }
    const submitHandle = () => {
        axios.post("http://localhost:8000/api/login", { name, password })
    }

    const classes = useStyles();
    return (
        <div className={classes.Container} >
            <Login name={name} password={password}
                nameChangeHandle={nameChangeHandle}
                passwordChangeHandle={passwordChangeHandle}
                nameErr={nameErr}
                passwordErr={passwordErr}
            />
        </div>
    )
}

export default Admin
