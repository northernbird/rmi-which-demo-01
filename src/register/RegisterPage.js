import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import ProfileImageUpload from './components/ProfileImageUpload'

const useStyles = makeStyles({
    pannel: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        textAlign: 'center',
    },
    profileLabel: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        marginTop: '25px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
    },
    line: {
        alignContent: 'center',
        alignItems: 'center',
        display:'inline-block',
        background: 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        height: '3px',
        width: '50px',
        maxWidth: '100%',
    },
    inputLabel: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
        marginTop: '25px',
        alignContent: 'left',
        alignItems: 'left',
    },
    inputLabelP: {
        display:'flex',
    }
});

function WelcomePage() {
    const classes = useStyles()
    return (
        <Typography component={'div'} className={classes.pannel}>
            <Box letterSpacing={'0.1em'} fontSize={14} fontWeight={700} className={classes.profileLabel}>
               プロフィール
            </Box>
            <ProfileImageUpload/>
            <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                <p className={classes.inputLabelP}>性別【必須】</p>
            </Box>
        </Typography>
    );
}

export default WelcomePage;
