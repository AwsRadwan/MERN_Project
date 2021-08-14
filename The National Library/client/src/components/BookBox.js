import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Link, navigate } from "@reach/router";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import CategoryIcon from '@material-ui/icons/Category';
import DeleteBookButton from './DeleteBookButton';
import Cookies from 'js-cookie';

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    height: 'fitContent',
    marginBottom: 20,
  },
});

const BookBox = ({
    book,
    data,
    setData
}) => {
    
    const classes = useStyles();
    return (
        <div id="XZXZ" class="product-layout product-grid col-lg-3 col-md-4 col-sm-6 col-xs-12 cols">
            <div class="product-thumb">
                <Card className={classes.root} id="BokBox">
                <CardActionArea onClick={e => navigate('/book/'+book._id)} >
                    <CardMedia
                    className="ImGiMg"
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={book.imges}
                    title={book.title}
                    />
                    <CardContent>
                    <Typography className="BoldText" gutterBottom variant="h5" component="h2">
                        <span className="TiTlEsTyle">{book.title}</span>
                    </Typography>
                    <Typography className="BoldText" variant="body2" color="textSecondary" component="p">
                        <CreateIcon /><span className="AwsAss"> The Author: {book.author} </span> <br /> / <br /> <CategoryIcon /><span className="AwsAss"> {book.category} </span>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={e => navigate('/reserve/'+book._id)} size="small" color="primary">
                    Reserve
                    </Button>
                    <Button size="small" color="primary" onClick={e => navigate('/book/'+book._id)} >
                    Learn More
                    </Button>
                    {
                        Cookies.get('userInfo') !== undefined &&
                        <DeleteBookButton data={data} setData={setData} bookId={book._id} />
                    }
                </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default BookBox
