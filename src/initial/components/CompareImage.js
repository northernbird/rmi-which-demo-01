import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserInfoBar from './user/UserInfoBar'
import TitleBar from './TitleBar'

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
});

function CompareImage(props) {
    const classes = useStyles()
    return (
        <div className={classes.sdPannel}>
            <img src="https://storage.googleapis.com/production-os-assets/assets/24e1851f-25ac-4b52-96a4-467073e181e9" className={classes.sd} />
        </div>
    );
}

export default CompareImage;
