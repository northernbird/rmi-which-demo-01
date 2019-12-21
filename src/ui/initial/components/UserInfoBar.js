import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    sd: {
        'flex': 'none',
        'height': 'auto',
        'margin': '0px 0px 0px 15px',
        'width': '40px',
        'max-width': 'calc(100% - 15px)',

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
        'overflow': 'hidden',
        'padding': '0',
        'border': '0',
        'outline': '0',
        'font-size': '100%',
        'vertical-align': 'baseline',
        'background': 'transparent',
        'list-style': 'none',
        'font-family': 'Lato,Noto Sans Japanese',
        'text-decoration': 'none',
        '-webkit-font-smoothing': 'antialiased',
        'box-sizing': 'border-box',
        '-webkit-transition': '.3s cubic-bezier(.4,.4,0,1)',
        'transition': '.3s cubic-bezier(.4,.4,0,1)',
        'letter-spacing': '0',
        'font-weight': '400',
        'color': '#333',
        '-webkit-box-flex': '0',
        '-webkit-box-pack': 'start',
        'justify-content': 'flex-start',
        '-webkit-backface-visibility': 'hidden',
    },

    sdProfilePanel : {
        display: 'flex',
        'flex-flow': 'row no-wrap',
        'justify-content': 'flex-start',
    },

    sdProfileLabelPanel: {
        display: 'flex',
        'flex-direction': 'column',
        'margin': '0px 0px 0px 10px',
    },

    sdDetailedProfileLabelPanel: {
        display: 'flex',
        'flex-flow': 'row no-wrap',
    },

    sdName : {
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
        'overflow': 'hidden',
        'margin': '0',
        'padding': '0',
        'border': '0',
        'outline': '0',
        'font-size': '12px',
        'vertical-align': 'baseline',
        'background': 'transparent',
        'list-style': 'none',
        'font-family': 'Lato,Noto Sans Japanese',
        'text-decoration': 'none',
        '-webkit-font-smoothing': 'antialiased',
        'box-sizing': 'border-box',
        '-webkit-transition': '.3s cubic-bezier(.4,.4,0,1)',
        'transition': '.3s cubic-bezier(.4,.4,0,1)',
        'letter-spacing': '0',
        'font-weight': '700',
        'color': '#333',
        '-webkit-box-flex': '0',
        'flex': 'none',
        '-webkit-box-pack': 'start',
        'justify-content': 'flex-start',
        '-webkit-backface-visibility': 'hidden'
    }
});

function UserInfoBar(props) {
    const classes = useStyles()
    return (
        <div className={classes.sdProfilePanel}>
            <img className={classes.sd} src="https://storage.googleapis.com/production-os-assets/assets/57313727-54b9-437b-a07d-d4dd8da9f13b" />
            <div className={classes.sdProfileLabelPanel}>
                <p className={classes.sdName}>橋本 たつや</p>
                <div className={classes.sdDetailedProfileLabelPanel}>
                    <p className={classes.sdName}>22歳</p>
                    <p className={classes.sdName}>男性</p>
                    <p className={classes.sdName}>アパレル店員</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfoBar;
