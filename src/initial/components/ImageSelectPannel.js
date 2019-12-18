import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    pannel: {
        'background': '#ffffff',
        'border-radius': '16px',
        'box-shadow': '4px 4px 5px 0px rgba(0,0,0,0.2)',
        'flex': 'none',
        'flex-flow': 'row nowrap',
        'height': '40px',
        'justify-content': 'space-around',
        'position': 'relative',
        'left': 'auto',
        'right': '50%',
        'bottom': '50%',
        'top': 'auto',
        'width': '100px',
        'max-width': '100%',
    },
});

function ImageSelectPannel(props) {
    const classes = useStyles()
    const magnify = () => alert("AAA")
    return (
        <div className={classes.pannel}>
        </div>
    );
}

export default ImageSelectPannel;