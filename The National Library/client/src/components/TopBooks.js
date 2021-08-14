import { Paper } from '@material-ui/core'
import React, {useState, useEffect} from 'react'

const TopBooks = ({
    data
}) => {

        // const [rateBooks] = data ? data.sort((a,b) => a.comments.length > b.comments.length ? 1 : -1) : [];
        // const [commentsBooks] = data ? data.sort((a,b) => a.reserves.length > b.reserves.length ? 1 : -1) : [];
        // const [rLimit] = (rateBooks.length >=3) ? 3 : rateBooks.length;
        // const [cLimit] = (commentsBooks.length >=3) ? 3 : rateBooks.length;
        const rLimit = 1;
        const cLimit = 1;
        // const [rLimit, setRLimit] = useState(0);
        // const [cLimit, setCLimit] = useState(0);

        // useEffect(() => {
        //     if(rateBooks){
        //         setRLimit((rateBooks.length >=3) ? 3 : rateBooks.length);
        //     }
        //     if(commentsBooks){
        //         setCLimit((commentsBooks.length >=3) ? 3 : rateBooks.length);
        //     }
        // }, []);

    return (
            <Paper elevation={3} className="MuiPaper-outlined" id="mainpaper">
                <h3 className="sortedBokks">Top Rated Books:</h3>
                {/* <ul>
                {
                    rateBooks ? rateBooks.slice(0, rLimit).map((b, i) => {
                        return(
                            <li className="sortedBokks" style={{color: 'green'}} key={i}>{b.name}</li>
                        )
                    })
                    : */}
                    <p className="sortedBokks" style={{color: 'red'}}>there is no books</p>
                {/* } */}
                {/* </ul> */}
                <h3 className="sortedBokks">Top Popular Books:</h3>
                {/* <ul>
                {
                    commentsBooks ? commentsBooks.slice(0, cLimit).map((b, i) => {
                        return(
                            <li className="sortedBokks" style={{color: 'green'}} key={i}>{b.name}</li>
                        )
                    })
                    : */}
                    <p className="sortedBokks" style={{color: 'red'}}>there is no books</p>
                {/* }
                </ul> */}
            </Paper>
    )
}

export default TopBooks
