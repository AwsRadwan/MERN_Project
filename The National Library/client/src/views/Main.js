import React from 'react'
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
                data={[...data]}
            />
        </div>
    )
}

export default Main
