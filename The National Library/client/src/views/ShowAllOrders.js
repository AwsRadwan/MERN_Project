import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        maxWidth: 752,
        },
        demo: {
        backgroundColor: theme.palette.background.paper,
        },
    }));

const ShowAllOrders = ({
    data,
    setData,
    reserves,
    setReserves
}) => {

    const classes = useStyles();

    return (
        <div>
            <Navbar 
                data={[...data]}
                setData={setData}
            />
            <div class="row" id="mainCon">
                <div class="col-lg-10 col-sm-9 col-md-9 col-xs-12 catebox" id="listAll">
                    <div class="row">
                        {
                            reserves ?
                            reserves.map((reserve, index) => {
                                    return (
                                        <div className={classes.demo}>
                                            <List dense={false}>

                                                <ListItem>
                                                <ListItemIcon>
                                                    <PersonOutlineIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.name}
                                                />
                                                <Button variant="outlined" color="primary">
                                                Accept
                                                </Button>
                                                <Button variant="outlined" color="secondary">
                                                Decline
                                                </Button>
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <PhoneIphoneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.phone}
                                                />
                                                <Button variant="outlined" color="primary">
                                                Accept
                                                </Button>
                                                <Button variant="outlined" color="secondary">
                                                Decline
                                                </Button>
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <MailOutlineIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.email}
                                                />
                                                <Button variant="outlined" color="primary">
                                                Accept
                                                </Button>
                                                <Button variant="outlined" color="secondary">
                                                Decline
                                                </Button>
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <HomeIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.address}
                                                />
                                                <Button variant="outlined" color="primary">
                                                Accept
                                                </Button>
                                                <Button variant="outlined" color="secondary">
                                                Decline
                                                </Button>
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <MenuBookOutlinedIcon />
                                                </ListItemIcon>
                                                {
                                                    reserve.book &&
                                                    <ListItemText
                                                        primary={data.filter(ww => ww._id === reserve.book)[0].name}
                                                    />
                                                }
                                                <Button variant="outlined" color="primary">
                                                Accept
                                                </Button>
                                                <Button variant="outlined" color="secondary">
                                                Decline
                                                </Button>
                                                </ListItem>

                                            </List>
                                        </div>
                                    )
                                })
                                :
                                <h2 id="noData">There is no Reserves !!</h2>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShowAllOrders
