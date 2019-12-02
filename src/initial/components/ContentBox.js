import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    sd: {
        'align-content': 'flex-start',
        'align-items': 'flex-start',
        'background': '#FFFFFF',
        'flex': 'none',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'height': '465px',
        'justify-content': 'center',
        'margin': '25px 0px 0px 0px',
        'overflow-x': 'hidden',
        'overflow-y': 'hidden',
        'padding': '0px 0px 0px 0px',
        'width': '100%',
        'max-width': '100%',
        'z-index': '0',
        'pointer-events': 'all',
        '-webkit-overflow-scrolling': 'touch',
        'display': 'flex',
        'position': 'relative',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        '-webkit-box-align': 'center',
        'overflow': 'hidden',
    },
});

function ContentBox(props) {
    const classes = useStyles()
    return (
        <div className={classes.sd}>
        </div>
    );
}

export default ContentBox;
