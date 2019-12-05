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

    searchSd: {
        'bottom': '30px',
        'color': '#dfdfdf',
        'font-size': '20px',
        'height': '10%',
        'left': 'auto',
        'margin': '0 0 0 0',
        'position': 'absolute',
        'right': '26px',
        'top': 'auto',
        'width': '20%',
        'max-width': '100%',
        'display': 'flex',
        '-webkit-box-orient': 'horizontal',
        '-webkit-box-direction': 'normal',
        'flex-direction': 'row',
        '-webkit-box-align': 'center',
        'align-items': 'center',
        'align-content': 'center',
        '-webkit-box-pack': 'center',
        'justify-content': 'center',
        'overflow': 'visible',
        'font-weight': 'normal',
        'font-style': 'normal',
        'line-height': '1',
        'letter-spacing': 'normal',
        'text-transform': 'none',
        'white-space': 'nowrap',
        'word-wrap': 'normal',
        'direction': 'ltr',

        'background': 'rgba(0, 0, 0, 0.5)',
        'border-radius': '50%',
    }


});

function CompareImage(props) {
    const classes = useStyles()
    return (
        <div className={classes.sdPannel}>
            <img src="https://storage.googleapis.com/production-os-assets/assets/24e1851f-25ac-4b52-96a4-467073e181e9" className={classes.sd} />
            <SearchIcon className={classes.searchSd}/>
        </div>
    );
}

export default CompareImage;
