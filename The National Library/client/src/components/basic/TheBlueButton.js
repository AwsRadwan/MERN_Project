import React from 'react'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, blue } from '@material-ui/core/colors';



const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: green[700],
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

function TheBlueButton({ value, handleOnClick, color }) {
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

export default TheBlueButton
