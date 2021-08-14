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
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        maxWidth: 752,
        },
        demo: {
        // backgroundColor: theme.palette.background.paper,
        },
    }));

const ShowAllOrders = ({
    data,
    setData,
    reserves,
    setReserves
}) => {

    const classes = useStyles();
    // const [rBooks, setRBooks] = useState(data)

    const hideDiv = (ida) => {
		var closedDiv  = document.getElementById(ida);
		closedDiv.style.display = "none";
	}

    const deleteReserve = (idd) => {
        axios.delete("http://localhost:8000/api/reserves/delete/" + idd)
        .then(res => {
            console.log("-I- " + res)
            setReserves(reserves.filter(ee => ee._id !== idd));
        })
        .catch(err => console.log("-E- " + err))
    }

    return (
        <div id="PaGeW">
            <div class="row" id="mainCon">
                <div class="col-lg-10 col-sm-9 col-md-9 col-xs-12 catebox" id="listAll">
                    <div class="row">
                        {
                            reserves ?
                            reserves.map((reserve, index) => {
                                let xzx = data.find(ww => ww._id === reserve.book)
                                    return (
                                        <div className="allReservess">
                                            <List dense={false}>

                                                <ListItem>
                                                <ListItemIcon>
                                                    <PersonOutlineIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.name}
                                                />
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <PhoneIphoneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.phone}
                                                />
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <MailOutlineIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.email}
                                                />
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <HomeIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={reserve.address}
                                                />
                                                </ListItem>
                                                <ListItem>
                                                <ListItemIcon>
                                                    <MenuBookOutlinedIcon />
                                                </ListItemIcon>
                                                {
                                                    reserve.book &&
                                                    <ListItemText
                                                        primary={xzx && xzx.name}
                                                    />
                                                }
                                                </ListItem>

                                                <Button id={"closableDiv"+reserve._id} onClick={() => hideDiv("closableDiv"+reserve._id)} variant="outlined" color="primary">
                                                Accept
                                                </Button>
                                                
                                                <Button onClick={() => deleteReserve(reserve._id)} variant="outlined" color="secondary">
                                                Decline
                                                </Button>

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
        </div>
    )
}

export default ShowAllOrders
