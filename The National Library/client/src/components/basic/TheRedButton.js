import React from 'react'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';



const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createTheme({
    palette: {
        primary: green,
    },
});

function TheRedButton({ value, handleOnClick, color }) {
    const classes = useStyles();
    return (
        <>
            <ColorButton variant="contained" onClick={handleOnClick} className={classes.margin}>
                {value}
            </ColorButton>
            <ThemeProvider theme={theme} />
        </>
    )
}

export default TheRedButton
