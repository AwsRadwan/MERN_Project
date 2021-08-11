import { Paper } from '@material-ui/core'
import React from 'react'

const TopBooks = ({books}) => {

        const [rateBooks] = books ? books.sort((a,b) => a.rate > b.rate ? 1 : -1) : [];
        const [commentsBooks] = books ? books.sort((a,b) => a.comments.length > b.comments.length ? 1 : -1) : [];
        // const [rLimit] = rateBooks ?((rateBooks.length >=3) ? 3 : rateBooks.length): 0;
        // const [cLimit] = commentsBooks ? (commentsBooks.length >=3) ? 3 : rateBooks.length : 0;
        const rLimit = 1;
        const cLimit = 1;

    return (
            <Paper elevation={3} className="MuiPaper-outlined" id="mainpaper">
                <h3 className="sortedBokks">Top Rated Books:</h3>
                <ul>
                {
                    rateBooks ? rateBooks.slice(0, rLimit).map((b, i) => {
                        return(
                            <li className="sortedBokks" style={{color: 'green'}} key={i}>{b.name}</li>
                        )
                    })
                    :
                    <p className="sortedBokks" style={{color: 'red'}}>there is no books</p>
                }
                </ul>
                <h3 className="sortedBokks">Top Popular Books:</h3>
                <ul>
                {
                    commentsBooks ? commentsBooks.slice(0, cLimit).map((b, i) => {
                        return(
                            <li className="sortedBokks" style={{color: 'green'}} key={i}>{b.name}</li>
                        )
                    })
                    :
                    <p className="sortedBokks" style={{color: 'red'}}>there is no books</p>
                }
                </ul>
            </Paper>
    )
}

export default TopBooks
