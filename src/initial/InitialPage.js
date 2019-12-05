import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MessageBox from './components/MessageBox';
import ContentBox from './components/ContentBox';
import FooterBox from './components/FooterBox';

const useStyles = makeStyles({
    StudioCanvas: {
        height: 'auto',
        'min-height': '100vh',
        position: 'relative',
    },

    imageTest: {
        'bottom': '69px',
        'color': '#dfdfdf',
        'font-size': '20px',
        'height': '24px',
        'left': '32px',
        'margin': '0 0 0 0',
        'position': 'absolute',
        'right': 'auto',
        'top': 'auto',
        'width': '24px',
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
        'font-family': 'Material Icons',
        'font-weight': 'normal',
        'font-style': 'normal',
        'line-height': '1',
        'letter-spacing': 'normal',
        'text-transform': 'none',
        'white-space': 'nowrap',
        'word-wrap': 'normal',
        'direction': 'ltr',
    }
});

function InitialPage(props) {
    const classes = useStyles()
    return (
        <Typography component="div"  className={classes.StudioCanvas}>
            <MessageBox/>
            <ContentBox/>
            <FooterBox/>
        </Typography>
    );
}

export default InitialPage
