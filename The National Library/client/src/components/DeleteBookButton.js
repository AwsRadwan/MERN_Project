import React from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios';

const DeleteBookButton = ({
    bookId,
    data,
    setData
}) => {

    const deleteThisBook = () => {
        axios.delete("http://localhost:8000/api/books/delete/" + bookId)
        .then(res => {
            console.log("-I- " + res)
            setData(data.filter(qq => qq._id !== bookId));
        })
        .catch(err => console.log("-E- " + err))
    }

    return (
        <Button onClick={deleteThisBook} variant="outlined" color="secondary">
            Delete
        </Button>
    )
}

export default DeleteBookButton
