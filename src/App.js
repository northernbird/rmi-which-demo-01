import './App.css'
import React from 'react';
import Button from './welcome/components/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    pannel: {
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
    },
    title: {
        color: '#333',
        fontSize: '14px',
        fontWeight: '700',
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

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Lato', sans-serif"
    },
});

function App() {
    const classes = useStyles();
    return (
        <Typography component="div" className={classes.pannel}>
            <Box fontFamily="Lato" letterSpacing={'0.2em'} fontSize={40} fontWeight={700}>
                Which
            </Box>
            <Box fontFamily="Lato" letterSpacing={'0.1em'} fontSize={14} fontWeight={700} className={classes.subTitle}>
                - みんなに意見を聞いてみよう -
            </Box>
            <Button/>
        </Typography>
    );
}

export default App;
