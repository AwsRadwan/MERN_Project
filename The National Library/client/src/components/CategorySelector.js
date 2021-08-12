import React, {useState} from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CategoryIcon from '@material-ui/icons/Category';

const categories=['All', 'Programming Books', 'Science Books', 'Palestinian novels', 'kids books', 'Arabic novels', 'Other'];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
    //   backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));


const CategorySelector = ({
    data,
    setData
}) => {
    const classes = useStyles();
    const [clickedItem, setClickedItem] = useState('All');

    const handleClick = (value) => {
        setClickedItem(value);
        if(value !== 'All' && data){
            setData(data.filter(book => book.category === value));
        }
        else {
            setData([...data]);
        }
        // this.setState({
        //   clickedItem: item.id
        // });
        }

    return (
        <Paper elevation={3} className="MuiPaper-outlined" id="mainpaper">
                <h3 className="sortedBokks">Categories:</h3>
                <div className={classes.demo}>
                    <List>
                    {categories.map((value, index) => {
                        return(
                            <ListItem
                            button={true}
                            key={index}
                            onClick={() => handleClick(value)}
                            // className={
                            //     this.state.clickedItem === item.id
                            //         ? classes.listItemClicked
                            //         : classes.listItemNotClicked
                            //     }
                            >
                        <ListItemIcon>
                            {clickedItem === value ? (
                            <CheckCircleOutlineIcon
                                // style={{ color: "rgb(239, 239, 239)", fontSize: "2.2rem" }}
                            />
                            )
                            :
                            <CategoryIcon />
                            }
                        </ListItemIcon>
                        <ListItemText
                            primary={value}
                        />
                        </ListItem>
                        )
                        
                    })}
                    </List>
                </div>
            </Paper>
    )
}

export default CategorySelector
