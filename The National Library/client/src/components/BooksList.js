import React from 'react'
import BookBox from './BookBox';


const BooksList = ({
    data,
    setData
}) => {

    const handleChange = (value) => {
        //filter Data !!
    };

    return (
        <div class="col-lg-10 col-sm-9 col-md-9 col-xs-12 catebox" id="listAll">
            <div class="row" id="tEsTtHiS">
                {
                    data ?
                        data.map((book, index) => {
                            return (
                                <BookBox key={index} book={book} data={data} setData={setData} />
                            )
                        })
                        :
                        <h2 id="noData">There is no Data !!</h2>
                }
            </div>
        </div>
    )
}

export default BooksList
