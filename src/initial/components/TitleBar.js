import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    sd: {
        'align-content': 'center',
        'align-items': 'center',
        'background': '#FFFFFF',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '70px',
        'justify-content': 'center',
        'margin': '0px 0px 0px 0px',
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

    sdTextPanel: {
        'align-content': 'center',
        'align-items': 'center',
        'background': '#EEEEEE',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '45px',
        'justify-content': 'center',
        'width': '90%',
        'max-width': '90%',
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

    sdText : {
        'color': '#333',
        'font-family': 'Lato',
        'font-size': '14px',
        'font-weight': '700',
        'height': 'auto',
        'letter-spacing': '0.05em',
        'line-height': '1.3',
        'text-align': 'center',
        'width': 'auto',
        'max-width': '100%',
        'justify-content': 'center',
    }




});

function TitleBar(props) {
    const {label} = props
    const classes = useStyles()
    return (
        <div className={classes.sd}>
            <div className={classes.sdTextPanel}>
                <p className={classes.sdText}>{label}</p>
            </div>
        </div>
    )
}

export default TitleBar;
