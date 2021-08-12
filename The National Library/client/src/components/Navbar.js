import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, navigate } from "@reach/router";
// import { PromiseProvider } from 'mongoose';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const categories = [
  'Cate 1',
  'Cate 2',
  'Cate 3',
  'Cate 4',
  'Cate 5',
  'Cate 6',
]

const Navbar = (props) => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Link to="/" className="links" ><MenuBookIcon /></Link>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="links" >Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/aboutus" className="links" >About us</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button color='inherit' className="navbutton" variant="text" size="large" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          Categories
          </Button>
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          {
            categories && categories.map((c, i) => {
              return(
                <MenuItem key={i} onClick={(c) => props.setBooks(props.books.filter(x => x.category === c))}>{c}</MenuItem>
              );
            })
          }
          </Menu>
          <AccountCircleOutlinedIcon />
          <Button color="inherit">Login as Admin</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar



// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     'aria-controls': `nav-tabpanel-${index}`,
//   };
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function NavTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs
//           variant="fullWidth"
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab label="Home" href="/home" {...a11yProps(0)} />
//           <LinkTab label="About us" href="/about us" {...a11yProps(1)} />
//           <LinkTab label="Catagories" href="/catagories" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//       Home
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       About us
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//       Catagories
//       </TabPanel>
//     </div>
//   );
// }
