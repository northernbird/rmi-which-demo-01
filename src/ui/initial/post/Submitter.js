import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    sd: {
        'z-index': '0',
        'pointer-events': 'all',
        'flex-wrap: nowrap',
        '-webkit-overflow-scrolling': 'touch',
        'display': 'flex',
        'position': 'relative',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        '-webkit-box-align': 'center',
        'overflow': 'hidden',

        'align-content': 'center',
        'align-items': 'center',
        'background': '#ffffff',
        'flex': 'none',
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'height': '100%',
        'justify-content': 'flex-start',
        'margin': '0px 0px 0px 0px',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
        'width': '85%',
        'max-width': '85%',
    },
});

function Submitter(props) {
    const classes = useStyles()
    return (
        <Typography component="div"  className={classes.sd}>
            <img src="https://storage.googleapis.com/production-os-assets/assets/57313727-54b9-437b-a07d-d4dd8da9f13b"
             className={classes.sd} />
        </Typography>
    );
}

export default Submitter;
