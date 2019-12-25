import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import ListContent from './ListContent';
import Header from './Header';

const useStyles = makeStyles({
    pannel: {
        position: 'relative',
        width: '100%',
        height: '100%',
        // display: 'flex',
        // 'flex-direction': 'column'
    },
    header: {
        position: 'relative',
        width: '100%',
        height: '20%',
    },
    content: {
        width: '100%',
        height: '60%',
    },
    footer: {
        position: 'fixed',
        bottom: '0px',
        top: 'auto',
        height: '13%',
        width: '100%',
        background: '#FFFFFF',
    }

});

function InitialPage(props) {
    const classes = useStyles()
    return (
        <Typography component="div"  className={classes.pannel}>
            <div className={classes.header}>
                <Header/>
            </div>
            <div className={classes.content}>
                <ListContent/>
            </div>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </Typography>
    );
}

export default InitialPage
