import React from 'react'
import TheBueButton from '../components/basic/TheBlueButton'
import TheInput from '../components/basic/TheInput'
import { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import Navbar from '../components/Navbar'

const ReserveOrders = ({
    reserves,
    setReserves,
    id
}) => {
    const [name, setname] = useState('')
    const [nameErr, setnameErr] = useState('')
    const [phone, setPhone] = useState(0)
    const [phoneErr, setPhoneErr] = useState("")
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [address, setAddress] = useState('')
    const [addressErr, setAddressErr] = useState('')






    const handleChangename = (e) => {
        setname(e.target.value)
        if (e.target.value.length >= 3) {
            setnameErr('')
        }
        else {
            setnameErr('Your Name must be more than 2 characters')
        }


    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
        if (e.target.value.length >= 10) {
            setPhoneErr('')
        }
        else {
            setPhoneErr('Your Number must be more than 10 digit')
        }


    }
    const handleChangeEmail = (e) => {

        setEmail(e.target.value)
        setEmailErr('')


    }
    const handleChangeAddress = (e) => {
        if (e.target.value.length >= 8) {
            setAddress(e.target.value)
            setAddressErr('')

        }
        else {
            setAddressErr('Your Address must be more than 8 characters')
        }

    }
    const handleReserve = () => {
        const rese = {
            name,
            phone,
            email,
            address,
            book: id
        }
        axios.post('http://localhost:8000/api/reserves/new', {
            name,
            phone,
            email,
            address,
            book: id
            })
            .then(res => {
                console.log("111111111111111")
                setReserves([...reserves, res.data.Reserve])
                setname('')
                setAddress('')
                setPhone(0)
                setEmail('')
                navigate('/')
            })
            .catch(err => {
                console.log("2222222222222222222");
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorResponse[key].message.includes('email') && setEmailErr(errorResponse[key].message)
                    errorResponse[key].message.includes('phone') && setPhoneErr(errorResponse[key].message)
                    errorResponse[key].message.includes('Name ') && setnameErr(errorResponse[key].message)
                }
            })

    }
    return (
        <div>
        <Navbar/>
        <div id='FormRO'>
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
                type='number'
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

            <TheBueButton value='Reserve' handleOnClick={handleReserve}  />
</div>
        </div>
    )
}

export default ReserveOrders
