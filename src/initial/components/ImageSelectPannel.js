import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    pannel: {
        'background': '#ffffff',
        'border-radius': '16px',
        'box-shadow': '4px 4px 5px 0px rgba(0,0,0,0.2)',
        'display': 'flex',
        'flex': 'none',
        'flex-flow': 'row nowrap',
        'justify-content': 'space-around',
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'margin': 'auto',
        'height': '12%',
        'width': '30%',
        'bottom': '50%',
        'top': 'auto',
        'z-index': '1',
        'font-size': '15px',
    },
    iconButton: {
        'position': 'relative',
        'font-size': '5vw',
    },
    icon: {
        'font-size': '5vw',
    },
    favouriteIconDiv: {
        'margin': 'auto',
        'font-size': '5vw',
    }
    ,
    test: {
        'font-size': '5vw',
    }
});

function ImageSelectPannel(props) {
    const classes = useStyles()
    const magnify = () => alert("AAA")
    return (
        <div className={classes.pannel}>
            <IconButton  className={classes.iconButton}>
                <ArrowBackIosIcon className={classes.icon}/>
            </IconButton>
            <div className={classes.favouriteIconDiv}>
                <FavoriteBorderIcon className={classes.test}/>
            </div>
            <IconButton  className={classes.iconButton}>
                <ArrowForwardIosIcon className={classes.icon}/>
            </IconButton>
        </div>
    );
}

export default ImageSelectPannel;