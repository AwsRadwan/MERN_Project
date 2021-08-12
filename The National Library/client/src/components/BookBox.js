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

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    maxHeight: 330,
    marginBottom: 20,
  },
});

const BookBox = ({book}) => {
    
    const classes = useStyles();
    return (
        <div class="product-layout product-grid col-lg-3 col-md-4 col-sm-6 col-xs-12 cols">
            <div class="product-thumb">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
                    title={book.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {book.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {book.desc}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Reserve
                    </Button>
                    <Button size="small" color="primary" onClick={e => navigate('/book/'+book.title)} >
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default BookBox
