import React from 'react'
import { Paper } from '@material-ui/core'

const CategorySelector = () => {
    return (
        <Paper elevation={3} className="MuiPaper-outlined" id="mainpaper">
                <h3 className="sortedBokks">Categories:</h3>
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                </ul>
            </Paper>
    )
}

export default CategorySelector
