import React from 'react'
import Navbar from '../components/Navbar'
import ThisBook from '../components/ThisBook'

// const book = 
// {
//     title: 'book1',
//     price: 99,
//     author: 'Aws',
//     desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
//     imges: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dliflc.edu%2Fadministration%2Fdliflc-public-affairs%2Fcrform%2Fcr-confirm%2Fbook%2F&psig=AOvVaw1ddRuvlgsnKaPJ25QfWQgT&ust=1628887835565000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCz76KurPICFQAAAAAdAAAAABAD',
//     comments: [
//         {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//     ]
// }

const OneBook = ({
    id,
    data,
    setData
}) => {
    return (
        <div>
            <Navbar 
                data={data}
                setData={setData}
            />
            <ThisBook id={id} />
        </div>
    )
}

export default OneBook
