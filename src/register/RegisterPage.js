import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import ProfileImageUpload from './components/ProfileImageUpload'
import GenderRadioButton from './components/GenderRadioButton'
import BirthdayYearSelectBox from './components/BirthDayYearSelectBox'
import RegisterButton from './components/RegisterButton'

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
    birthdaySelectBox: {
        width: '75%',
        maxWidth: '75%',
        textAlign: 'center',
        display:'inline-block',
    },
    birthdaySelectGroup: {
        width: '75%',
        maxWidth: '75%',
        textAlign: 'left'
    },
    inputText: {
        width: '75%',
        maxWidth: '75%',
        textAlign: 'center',
        borderBottom: 'solid 1px #7d7d7d',
        borderLeft: 'solid 1px #7d7d7d',
        borderRadius: '4px',
        borderRight: 'solid 1px #7d7d7d',
        borderTop: 'solid 1px #7d7d7d',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2) inset',
        height: '40px'
    }
});

const birthDayYear = [1996,1997,1998]
const birthDayMonth = [1,2,3,4,5,6,7,8,9,10,11,12]

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
            <Box className={classes.birthdaySelectBox}>
                <Box fontSize={12} fontWeight={700} className={classes.birthdaySelectGroup}>
                    <BirthdayYearSelectBox label={'年'} dataList={birthDayYear}/>
                    <BirthdayYearSelectBox label={'月'} dataList={birthDayMonth}/>
                </Box>
            </Box>
            <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                <p className={classes.inputLabelP}>ニックネーム【必須】※変更可能</p>
            </Box>
            <Box>
                <input type="text" placeholder="First name" name="First name" className={classes.inputText}/>
            </Box>
            <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                <p className={classes.inputLabelP}>郵便番号【必須】※地域のオススメが表示されます</p>
            </Box>
            <Box>
                <input type="text" placeholder="First name" name="First name" className={classes.inputText}/>
            </Box>
            <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                <p className={classes.inputLabelP}>職業【任意】</p>
            </Box>
            <Box>
                <input type="text" placeholder="First name" name="First name" className={classes.inputText}/>
            </Box>
            <Box>
                <RegisterButton label={'登録する'} />
            </Box>
        </Typography>
    );
}

export default WelcomePage;
