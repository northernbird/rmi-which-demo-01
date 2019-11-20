import React from 'react';
import Button from './components/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router';
//import { createBrowserHistory } from 'history';

const useStyles = makeStyles({
    pannel: {
        color: '#333',
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        marginTop: '230px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
        width: '100%',
        maxWidth: '100%',
        height: '380px',
        textAlign: 'center',
        fontWeight: 700,
    },
    title: {
        textAlign: 'center',
        width: 'auto',
        maxWidth: '100%',
    },
    subTitle: {
        marginTop: '46px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
    }
});

const onClick = ()=> {
    alert('Hello World')
}

function WelcomePage(props) {
    const {history} = props
    const classes = useStyles()

    const routeChange = () => {
        let path = '/register'
        history.push(path)
    }

    return (
        <Typography component="div" className={classes.pannel}>
            <Box letterSpacing={'0.2em'} fontSize={40} className={classes.title}>
                Which
            </Box>
            <Box letterSpacing={'0.1em'} fontSize={14} className={classes.subTitle}>
                - みんなに意見を聞いてみよう -
            </Box>
            <Button onClick={routeChange}/>
        </Typography>
    );
}

export default withRouter(WelcomePage);
