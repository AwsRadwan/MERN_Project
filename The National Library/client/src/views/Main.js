import React from 'react'
import BooksList from '../components/BooksList'
import MainContainer from '../components/MainContainer'
import Container from '../components/MainContainer'
import Navbar from '../components/Navbar'

import TopBooks from '../components/TopBooks'

const data = [
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
    {
        title: 'book1',
        price: 99,
        author: 'Aws',
        desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
    },
];


const Main = () => {

    return (
        <div>
            <Navbar />
            <MainContainer 
                fiveColumn
                shopSidebarResponsive={{ xs: 24, lg: 4 }}
                shopContentResponsive={{ xs: 24, lg: 20 }}
                productResponsive={{ xs: 12, sm: 8, md: 6 }}
                data={[...data]}
            />

            <TopBooks />
        </div>
    )
}

export default Main
