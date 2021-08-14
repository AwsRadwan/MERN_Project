import React from 'react'
import TopBooks from './TopBooks';
import CategorySelector from './CategorySelector';
import BooksList from './BooksList';

const MainContainer = ({
    data,
    setData
}) => {
    return (
        <div class="row" id="mainCon">
            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                <CategorySelector data={data} setData={setData} />
                <TopBooks
                    data={data} setData={setData}
                />
            </div>
            <BooksList
                data={data}
                setData={setData}
            />
        </div>
    )
}

export default MainContainer
