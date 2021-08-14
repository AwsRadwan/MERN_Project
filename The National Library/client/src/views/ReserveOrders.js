import React from 'react'
import TheBueButton from '../components/basic/TheBlueButton'
import TheInput from '../components/basic/TheInput'
import { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const ReserveOrders = (props) => {
    const [name, setname] = useState('')
    const [nameErr, setnameErr] = useState('')
    const [phone, setPhone] = useState()
    const [phoneErr, setPhoneErr] = useState()
    const [email, setEmail] = useState()
    const [emailErr, setEmailErr] = useState()
    const [address, setAddress] = useState()
    const [addressErr, setAddressErr] = useState()






    const handleChangename = (e) => {
        if (e.target.value > 4) {
            setname(e.target.value)
            setnameErr('')
        }
        else {
            setnameErr('Your Name must be more than 4 characters')
        }


    }
    const handleChangePhone = (e) => {
        if (e.target.value > 9999999) {
            setPhone(e.target.value)
            setPhoneErr('')
        }
        else {
            setPhoneErr('Your Number must be more than 8 digit')
        }


    }
    const handleChangeEmail = (e) => {

        setEmail(e.target.value)
        setEmailErr('')


    }
    const handleChangeAddress = (e) => {
        if (e.target.value > 10) {
            setAddress(e.target.value)
            setAddressErr('')

        }
        else {
            setAddressErr('Your Address must be more than 10 characters')
        }

    }
    const handleReserve = () => {
        const rese = {
            name,
            phone,
            email,
            address,
            book: props.id

        }
        axios.post('http://localhost:8000/api/reserves/new', rese)
            .then(res => {
                navigate('/')

            })
            .catch(err => {
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorResponse[key].message.includes('mail') && setEmailErr(errorResponse[key].message)
                    errorResponse[key].message.includes('Phone') && setPhoneErr(errorResponse[key].message)
                    errorResponse[key].message.includes('Name ') && setnameErr(errorResponse[key].message)
                }
            })

    }
    return (
        <div>
            <TheInput
                label='Name'
                value={name}
                err={nameErr}
                required={true}
                handleChange={handleChangename} />
            <TheInput
                label='Phone'
                value={phone}
                err={phoneErr}
                required={true}
                handleChange={handleChangePhone} />
            <TheInput
                label='Email'
                value={email}
                err={emailErr}
                required={true}
                handleChange={handleChangeEmail}
                type='email' />
            <TheInput
                label='address'
                value={address}
                err={addressErr}
                required={true}
                handleChange={handleChangeAddress} />

            <TheBueButton value='Reserve' handleOnClick={handleReserve} />

        </div>
    )
}

export default ReserveOrders
