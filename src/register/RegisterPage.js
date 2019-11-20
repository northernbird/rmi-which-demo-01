import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import ProfileImageUpload from './components/ProfileImageUpload'
import GenderRadioButton from './components/GenderRadioButton'
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
    },
    genderButtonGroup: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
    },
    selectBoxGroup: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
    },
    selectBox: {
        display:'inline-block',
        fontSize: '14px',
        width: '100px'
    },
    menuItem: {
        fontSize: '14px',
    },
    selectInput: {
        display:'flex',
    },
    selectInputLabel: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
        marginTop: '25px',
        alignContent: 'left',
        alignItems: 'left',
        verticalAlign:'10px',
    },
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
            <Box fontSize={12} fontWeight={700} className={classes.genderButtonGroup}>
                <GenderRadioButton name="Developer" value="Yes" label={'女性'} />
                <GenderRadioButton name="Developer" value="Yes" label={'男性'} />
                <GenderRadioButton name="Developer" value="Yes" label={'その他'} />
            </Box>
            <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                <p className={classes.inputLabelP}>生年月日【必須】</p>
            </Box>
            <Box className={classes.selectBoxGroup}>
                <Select className={classes.selectBox}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1995}>1995</MenuItem>
                    <MenuItem value={1996}>1996</MenuItem>
                    <MenuItem value={1997}>1997</MenuItem>
                </Select>
                <Box fontSize={12} fontWeight={700} className={classes.selectInputLabel} marginLeft={2}>
                    <p className={classes.selectInput}>年</p>
                </Box>
            </Box>


        </Typography>
    );
}

export default WelcomePage;
