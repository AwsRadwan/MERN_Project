import React, { useState } from 'react'
import Login from '../components/Login'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Router, navigate, Redirect } from "@reach/router"
import BookForm from './BookForm';
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import ReserveOrders from './ReserveOrders'
import ShowAllOrders from './ShowAllOrders'




const Admin = ({
    data,
    setData,
    reserves,
    setReserves
}) => {
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
    const logInHandle = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", { name, password })
            .then(res => {
                setNameErr('')
                Cookies.set('userInfo', res.data.user._id)
                navigate('/')
            }).catch(err => console.log(err))
            
    }
    Cookies.get('userInfo')



    return (
        <div >
            <Navbar
                data={data}
                setData={setData}
            />
            <Router>
                <Login path='login'
                    name={name} password={password}
                    nameChangeHandle={nameChangeHandle}
                    passwordChangeHandle={passwordChangeHandle}
                    nameErr={nameErr}
                    passwordErr={passwordErr}
                    submitHandle={logInHandle}
                />
                <Logout path='logout' />
                <BookForm reserves={reserves} setReserves={setReserves} data={data} setData={setData} path='book/new' header='Add New Book' />
                <ShowAllOrders reserves={reserves} setReserves={setReserves} path="reserves" data={data} setData={setData} />
            </Router>
        </div>
    )
}

export default Admin
