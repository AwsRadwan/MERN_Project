import React from 'react'
import BookBox from './BookBox';


const BooksList = ({
    data
}) => {

    const handleChange = (value) => {
        //filter Data !!
    };

    return (
        <div class="col-lg-10 col-sm-9 col-md-9 col-xs-12 catebox" id="listAll">
            <div class="row">
                {
                    data ?
                        data.map((book, index) => {
                            return (
                                <BookBox key={index} book={book} />
                            )
                        })
                        :
                        <p>There is no Data !!</p>
                }
            </div>
        </div>
    )
}

export default BooksList
