import React, { useState } from 'react'
import Login from '../components/Login'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Cookies from 'js-cookie'
import Form from '../components/Form';
import TheInput from '../components/basic/TheInput';
import TheBlueButton from '../components/basic/TheBlueButton'
import { Router, Link } from "@reach/router"
import BookForm from './BookForm';

class Route extends React.PureComponent {
    render() {
        return <div>{this.props.children}</div>;
    }
}



const Admin = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')


    // Admin User Part
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
    const submitHandle = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", { name, password })
            .then(res => Cookies.set('userInfo', res))

    }




    return (
        <div >
            <Router>
                <Login path='/admin'
                    name={name} password={password}
                    nameChangeHandle={nameChangeHandle}
                    passwordChangeHandle={passwordChangeHandle}
                    nameErr={nameErr}
                    passwordErr={passwordErr}
                    submitHandle={submitHandle}
                />

                <BookForm path='/admin/book/new' header='Add New Book' />








            </Router>

        </div>
    )
}

export default Admin
