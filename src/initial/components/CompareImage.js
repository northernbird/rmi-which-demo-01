import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    sdPannel: {
        display: 'flex',
        flex: 'none',
        width: '100%',
        'justify-content': 'center',
    },
    sd: {
        'border-radius': '6px',
        'box-shadow': '5px 5px 5px 0px rgba(0,0,0,0.2)',
        'flex': 'none',
        'height': 'auto',
        'width': '90%',
        'max-width': '90%',
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
    iconDiv: {
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
    icon: {
        'position': 'relative',
        'color': '#dfdfdf',
        'font-size': '20px',
    }


});

function CompareImage(props) {
    const classes = useStyles()
    return (
        <div className={classes.sdPannel}>
            <img src="https://storage.googleapis.com/production-os-assets/assets/24e1851f-25ac-4b52-96a4-467073e181e9" className={classes.sd} />
            <div className={classes.iconDiv}>
                <SearchIcon className={classes.icon}/>
            </div>
        </div>
    );
}

export default CompareImage;
