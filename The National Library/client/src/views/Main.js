import React, {useState, useEffect} from 'react'
import MainContainer from '../components/MainContainer'
import Container from '../components/MainContainer'
import Navbar from '../components/Navbar'
import TopBooks from '../components/TopBooks'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../components/Footer'


// const data = [
//     {
//         title: 'book1',
//         price: 99,
//         author: 'Aws',
//         desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
//         imges: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dliflc.edu%2Fadministration%2Fdliflc-public-affairs%2Fcrform%2Fcr-confirm%2Fbook%2F&psig=AOvVaw1ddRuvlgsnKaPJ25QfWQgT&ust=1628887835565000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCz76KurPICFQAAAAAdAAAAABAD',
//         comments: [
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         ]
//     },
//     {
//         title: 'book1',
//         price: 99,
//         author: 'Aws',
//         desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
//         imges: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dliflc.edu%2Fadministration%2Fdliflc-public-affairs%2Fcrform%2Fcr-confirm%2Fbook%2F&psig=AOvVaw1ddRuvlgsnKaPJ25QfWQgT&ust=1628887835565000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCz76KurPICFQAAAAAdAAAAABAD',
//         comments: [
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         ]
//     },
//     {
//         title: 'book1',
//         price: 99,
//         author: 'Aws',
//         desc: 'AAAAAAAAAAAAAAAAAAAAAAA',
//         imges: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dliflc.edu%2Fadministration%2Fdliflc-public-affairs%2Fcrform%2Fcr-confirm%2Fbook%2F&psig=AOvVaw1ddRuvlgsnKaPJ25QfWQgT&ust=1628887835565000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCz76KurPICFQAAAAAdAAAAABAD',
//         comments: [
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//             {name: 'Aws', body: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', date: new Date()},
//         ]
//     },
// ];


const Main = ({
    data,
    setData
}) => {

    // const [allBooks, setAllBooks] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    // useEffect(
    //     () => {
    //         axios.get("http://localhost:8000/api/books")
    //         .then(res => {
    //             setAllBooks(res.data.Books);
    //             setLoaded(true);
    //         })
    //     }, []
    // );

    return (
        <div>
            <Navbar 
                data={[...data]}
                setData={setData}
            />
                <MainContainer 
                data={[...data]}
                setData={setData}
            />
            <Footer />
        </div>
    )
}

export default Main
