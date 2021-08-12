import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const CommentForm = () => {
    const classes = useStyles();
    return (
            <Paper elevation={3}>
            {/* <h3>Comments : </h3> */}
            <div>
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Write your Name </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          
        />
      </FormControl>
      </div>
      {/* <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Write your Comment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      /> */}
      <TextField id="standard-basic" label="Standard" />
    
      <div>
      <Button variant="contained" color="secondary" >
        Post
      </Button>
      </div>
      </Paper>
    )
}

export default CommentForm