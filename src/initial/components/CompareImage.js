import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import SelectPannel from "./ImageSelectPannel";

const useStyles = makeStyles({
    sdPannel: {
        display: 'flex',
        flex: 'none',
        width: '100%',
        'justify-content': 'center',
    },
    immagePannel: {
        'flex': 'none',
        'height': 'auto',
        'width': '95%',
        'max-width': '95%',
        'z-index': '0',
        'pointer-events': 'all',
        'flex-wrap': 'nowrap',
        '-webkit-overflow-scrolling': 'touch',
        'display': 'flex',
        'position': 'relative',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        'flex-direction': 'column',
        'align-content': 'center',
        '-webkit-box-align': 'center',
        'align-items': 'center',
        'overflow': 'hidden'
    },
    sd: {
        'border-radius': '6px',
        'box-shadow': '5px 5px 5px 0px rgba(0,0,0,0.2)',
        'flex': 'none',
        'height': 'auto',
        'width': '95%',
        'max-width': '95%',
        'z-index': '0',
        'pointer-events': 'all',
        'flex-wrap': 'nowrap',
        '-webkit-overflow-scrolling': 'touch',
        'display': 'flex',
        'position': 'relative',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        'flex-direction': 'column',
        'align-content': 'center',
        '-webkit-box-align': 'center',
        'align-items': 'center',
        'overflow': 'hidden'
    },
    // TODO apply responsive design (especially button size)
    // TODO use common method for rightIcon & leftIcon
    rightIconDiv: {
        'background': 'rgba(0, 0, 0, 0.5)',
        'border-radius': '50%',
        // 'bottom': '30px',
        'position': 'absolute',
        'height': '35px',
        'width': '35px',
        // 'height': '9%',
        // 'width': '3%',
        // padding: '5% 5% 5% 5%',
        'left': 'auto',
        'margin': '70% 0% 0% 0%',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'flex-direction': 'row',
        'right': '31px',

        // 'top': 'auto',
        // 'max-width': '100%',
        // '-webkit-box-orient': 'horizontal',
        // '-webkit-box-direction': 'normal',
        // '-webkit-box-align': 'center',
        // 'align-content': 'center',
        // '-webkit-box-pack': 'center',
        // 'overflow': 'visible',
        // 'font-weight': 'normal',
        // 'font-style': 'normal',
        // 'line-height': '1',
        // 'letter-spacing': 'normal',
        // 'text-transform': 'none',
        // 'white-space': 'nowrap',
        // 'word-wrap': 'normal',
        // 'direction': 'ltr',
    },
    // TODO apply responsive design (especially button size)
    // TODO use common method for rightIcon & leftIcon
    leftIconDiv: {
        'background': 'rgba(0, 0, 0, 0.5)',
        'border-radius': '50%',
        // 'bottom': '30px',
        'position': 'absolute',
        'height': '35px',
        'width': '35px',
        // 'height': '9%',
        // 'width': '3%',
        // padding: '5% 5% 5% 5%',
        'left': '26px',
        'margin': '70% 0% 0% 0%',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'flex-direction': 'row',
        'right': 'auto',

        // 'top': 'auto',
        // 'max-width': '100%',
        // '-webkit-box-orient': 'horizontal',
        // '-webkit-box-direction': 'normal',
        // '-webkit-box-align': 'center',
        // 'align-content': 'center',
        // '-webkit-box-pack': 'center',
        // 'overflow': 'visible',
        // 'font-weight': 'normal',
        // 'font-style': 'normal',
        // 'line-height': '1',
        // 'letter-spacing': 'normal',
        // 'text-transform': 'none',
        // 'white-space': 'nowrap',
        // 'word-wrap': 'normal',
        // 'direction': 'ltr',
    },

    iconButton: {
        'position': 'relative',
        'font-size': '20px',
    },

    icon: {
        'color': '#dfdfdf',
        'font-size': '20px',
    }

});

function CompareImage(props) {
    const classes = useStyles()
    const magnify = () => alert("AAA")
    return (
        <div className={classes.sdPannel}>
            <div className={classes.immagePannel}>
                <img src="https://storage.googleapis.com/production-os-assets/assets/24e1851f-25ac-4b52-96a4-467073e181e9" className={classes.sd}/>
            </div>
            <div className={classes.rightIconDiv} onClick={magnify}>
                <IconButton  className={classes.iconButton}>
                    <SearchIcon className={classes.icon}/>
                </IconButton>
            </div>
            <div className={classes.leftIconDiv} onClick={magnify}>
                <IconButton  className={classes.iconButton}>
                    <SearchIcon className={classes.icon}/>
                </IconButton>
            </div>
        </div>
    );
}

export default CompareImage;
