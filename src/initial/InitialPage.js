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
    },
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
