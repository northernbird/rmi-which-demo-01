import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
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
        'height': '11%',
        'width': '30%',
        'bottom': '50%',
        'top': 'auto',
        'z-index': '1',
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