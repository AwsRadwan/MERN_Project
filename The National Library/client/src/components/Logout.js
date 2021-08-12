import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { navigate } from '@reach/router'
function Logout() {
    console.log(Cookies.get('userInfo'))
    if (Cookies.get('userInfo') !== undefined) {
        axios.get('http://localhost:8000/api/logout')
            .then(res => {
                Cookies.remove('userInfo')
                navigate('/')
            }).catch(error => navigate('/'))
    }
    else {
        navigate('/')
    }







    return (
        <div>

        </div>
    )
}

export default Logout
