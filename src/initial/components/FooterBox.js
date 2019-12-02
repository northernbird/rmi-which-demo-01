import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    flexPanel: {
        'z-index': '0',
        'flex-wrap': 'nowrap',
        display: 'flex',
        position: 'relative',
        'flex-direction': 'column',
        'align-content': 'center',
        'align-items': 'center',
    },
    link: {
        'align-content': 'center',
        'align-items': 'center',
        'background': '#dfdfdf',
        'border-radius': '20px',
        'box-shadow': 'none',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '50px',
        'justify-content': 'center',
        'margin': '25px 0px 0px 0px',
        'padding': '0px 0px 0px 0px',
        'width': '270px',
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
        'text-decoration': 'none',
    },

    p: {
        'color': '#686868',
        'font-family': 'Lato',
        'font-size': '14px',
        'font-weight': '700',
        'height': 'auto',
        'letter-spacing': '0.2em',
        'text-align': 'center',
        'width': 'auto',
        'max-width': '100%',
        'justify-content': 'center',
        'display': 'flex',
        '-webkit-box-orient': 'horizontal',
        '-webkit-box-direction': 'normal',
        'flex-direction': 'row',
        '-webkit-box-align': 'center',
        'align-items': 'center',
        'align-content': 'center',
        '-webkit-box-pack': 'center',
        'overflow': 'visible',
        'z-index': '0',
        'pointer-events': 'all',
        'flex-wrap': 'nowrap',
        '-webkit-overflow-scrolling': 'touch',
        'position': 'relative',
        cursor: 'pointer',

    }
});

function FooterBox(props) {
    const classes = useStyles()
    return (
        <div className={classes.flexPanel}>
            <a href="/live/EXawVAZqDr/1" className={classes.link}>
                <p className={classes.p}>スタート</p>
            </a>
        </div>
    );
}

export default FooterBox;
