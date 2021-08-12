import React, { useState } from 'react'
import TheInput from '../components/basic/TheInput'
import TheBlueButton from '../components/basic/TheBlueButton'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: 'white',
        width: '40%',
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        margin: '40px auto',
        marginBottom: '0px',
        borderRadius: '30px'


    },
}))
const BookForm = (props) => {
    const [bookTitle, setBookTitle] = useState('')
    const [bookTitleErr, setBookTitleErr] = useState('')
    const [bookDesc, setBookDesc] = useState('')
    const [bookDescErr, setBookDescErr] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookAuthorErr, setBookAuthorErr] = useState('')
    const [submitErr, setSubmitErr] = useState([])
    const [bookCategory, setBookCategory] = useState('')
    const [bookImg, setBookImg] = useState('')


    const bookTitleChangeHandle = (e) => {
        if (e.target.value.length > 3 || e.target.value.length === 0) {


            setBookTitle(e.target.value)
            setBookTitleErr('')
        } else {
            setBookTitleErr("Title Can't be less than 3")
        }
    }
    const bookAuthorChangeHandle = (e) => {
        setBookAuthor(e.target.value)
        setBookAuthorErr('')

    }
    const bookDescChangeHandle = (e) => {
        if (e.target.value.length > 5 || e.target.value.length === 0) {


            setBookDesc(e.target.value)
            setBookDescErr('')
        } else {
            setBookDescErr("Description Can't be less than 5")
        }
    }
    const bookImgChangeHandle = (e) => {
        setBookImg(e.target.value)

    }
    const bookCategoryChangeHandle = (e) => {
        setBookCategory(e.target.value)

    }
    const submitHandle = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/books/new', {
            'title': bookTitle,
            'desc': bookDesc,
            'author': bookAuthor,
            'category': bookCategory,
            'img': bookImg

        }).then(res => {
            setBookTitle('')
            setBookAuthor('')
            setBookDesc('')
            setBookCategory('')
            setBookImg('')
            setSubmitErr('')
            // errorResponse[key].message

        }).catch(err => {
            const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorResponse[key].message.includes('Title ') && setBookTitleErr(errorResponse[key].message)
                errorResponse[key].message.includes('Author ') && setBookAuthorErr(errorResponse[key].message)
                errorResponse[key].message.includes('Description ') && setBookDescErr(errorResponse[key].message)
            }


        })
    }
    const classes = useStyles()

    return (
        <>
            <form onSubmit={submitHandle} className={classes.Container} >
                <h1>{props.header}</h1>

                <TheInput
                    label='Book Title'
                    value={bookTitle}
                    handleChange={bookTitleChangeHandle}
                    err={bookTitleErr}
                />
                <TheInput
                    label='Book Author'
                    value={bookAuthor}
                    handleChange={bookAuthorChangeHandle}
                    required={false}
                    err={bookAuthorErr}


                />
                <TheInput
                    label='Book Description'
                    value={bookDesc}
                    handleChange={bookDescChangeHandle}
                    err={bookDescErr}

                />

                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="age-native-required">Category</InputLabel>
                    <Select
                        native
                        value={bookCategory}
                        onChange={bookCategoryChangeHandle}
                        name="age"
                        inputProps={{
                            id: 'age-native-required',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value='Programming Books'>Programming Books</option>
                        <option value='Science Books'>Science Books</option>
                        <option value='Palestinian novels'>Palestinian novels</option>
                        <option value='kids books'>kids books</option>
                        <option value='Arabic novels'>Arabic novels</option>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <TheInput
                    label='Book Image'
                    value={bookImg}
                    handleChange={bookImgChangeHandle}
                    required={false}


                />
                {submitErr.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
                <TheBlueButton type='submit' value='create' />

            </form>
        </>
    )
}

export default BookForm
