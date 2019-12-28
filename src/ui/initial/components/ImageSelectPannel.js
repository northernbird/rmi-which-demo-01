import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useState } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { finishTestQuestion } from '../../../actions'
import { connect } from 'react-redux'


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
        'font-size': '6vw',
        'margin-top': '5px'
    },
    unselected: {
        'font-size': '5vw',
    },
    selected: {
        'font-size': '5vw',
        'color': 'red'
    }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(finishTestQuestion(false))
    }
})

function ImageSelectPannel({isSelected, onClick}) {
    const [selected, setSelected] = useState(false);
    const classes = useStyles()
    const onMouseEnter = () =>{
        setSelected(true)
    }
    const onMouseLeave = () =>{
        setSelected(false)
    }
    if (isSelected) {
        return (
            <div className={classes.pannel}>
                <IconButton  className={classes.iconButton} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <ArrowBackIosIcon onClick={onClick} className={classes.icon}/>
                </IconButton>
                <div className={classes.favouriteIconDiv}>
                    {selected? <FavoriteIcon className={classes.selected}/>: <FavoriteBorderIcon className={classes.unselected}/>}
                </div>
                <IconButton  className={classes.iconButton} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <ArrowForwardIosIcon onClick={onClick} className={classes.icon}/>
                </IconButton>
            </div>
        );
    } else {
        return null;
    }


}

// export default ImageSelectPannel;


export default connect(
    null,
    mapDispatchToProps
)(ImageSelectPannel)