import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import ProfileImageUpload from './components/ProfileImageUpload'
import GenderRadioButtonGroup from './components/GenderRadioButtonGroup'
import BirthdayYearSelectBox from './components/BirthDayYearSelectBox'
import RegisterButton from './components/RegisterButton'
import useForm from 'react-hook-form'
import axios from 'axios'
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    pannel: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        textAlign: 'center',
        color: '#686868'
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

    inputLabelJob: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
        marginTop: '10px',
        alignContent: 'left',
        alignItems: 'left',
    },

    inputLabelP: {
        display:'flex',
    },
    genderButtonGroup: {
        width: '80%',
        maxWidth: '80%',
        display:'inline-block',
    },
    birthdaySelectBox: {
        width: '75%',
        maxWidth: '75%',
        textAlign: 'center',
        display:'inline-block',
    },
    birthdaySelectGroup: {
        width: '80%',
        maxWidth: '100%',
        textAlign: 'left',
        display: 'flex',
    },
    inputText: {
        width: '75%',
        maxWidth: '75%',
        textAlign: 'left',
        paddingLeft: '10px',
        borderBottom: 'solid 1px #7d7d7d',
        borderLeft: 'solid 1px #7d7d7d',
        borderRadius: '4px',
        borderRight: 'solid 1px #7d7d7d',
        borderTop: 'solid 1px #7d7d7d',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2) inset',
        height: '40px',
        fontSize: '14px'
    },
    tips: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
        alignContent: 'left',
        alignItems: 'left',
        fontSize: '10px',
    },
    error: {
        width: '75%',
        maxWidth: '75%',
        display:'inline-block',
        textAlign: 'left',
        alignContent: 'left',
        alignItems: 'left',
        fontSize: '12px',
        color: 'red'
    },
});

const birthDayYear = [1996,1997,1998]

const birthDayMonth = [1,2,3,4,5,6,7,8,9,10,11,12]

function RegisterPage(props) {
    const { register, handleSubmit, watch, errors, setValue } = useForm()
    const {history} = props
    const onSubmit = async data => {

        // axios.defaults.baseURL = 'http://localhost:3000';
        // axios.defaults.headers.post['Content-Type'] = 'application/json';
        //
        // alert(JSON.stringify(data))
        // const response = await axios.post('/users/register');
        // alert(JSON.stringify(response))

        let path = '/initial'
        history.push(path)

    }
    const classes = useStyles()
    return (

        <Typography component={'div'} className={classes.pannel}>
            <Box letterSpacing={'0.1em'} fontSize={14} fontWeight={700} className={classes.profileLabel}>
               プロフィール
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ProfileImageUpload/>
                <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                    <p className={classes.inputLabelP}>性別【必須】</p>
                </Box>
                {errors.gender &&
                <p className={classes.error}>性別は入力必須項目です</p>}
                <GenderRadioButtonGroup {...{register: register({ required: true })}} />
                <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                    <p className={classes.inputLabelP}>生年月日【必須】</p>
                </Box>
                {errors.birthYear &&
                <p className={classes.error}>生年月日(年)は入力必須項目です</p>}
                {errors.birthMonth &&
                <p className={classes.error}>生年月日(月)は入力必須項目です</p>}
                <Box className={classes.birthdaySelectBox}>
                    <Box fontSize={12} fontWeight={700} className={classes.birthdaySelectGroup}>
                        <BirthdayYearSelectBox {...{ watch, register: register({ required: true }), setValue, name: "birthYear", label:"年", dataList:birthDayYear }} />
                        <BirthdayYearSelectBox {...{ watch, register: register({ required: true }), setValue, name: "birthMonth", label:"月", dataList:birthDayMonth }} />
                    </Box>
                </Box>
                <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                    <p className={classes.inputLabelP}>ニックネーム【必須】※変更可能</p>
                </Box>
                <Box>
                    {errors.nickName &&
                    <p className={classes.error}>ニックネームは入力必須です</p>}
                    <input type="text" placeholder="ニックネーム" name="nickName" className={classes.inputText} ref={register({ required: true })}/>
                </Box>
                <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                    <p className={classes.inputLabelP}>郵便番号【必須】※地域のオススメが表示されます</p>
                </Box>
                <Box>
                    {errors.postCode &&
                    <p className={classes.error}>郵便番号は入力必須です</p>}
                    <input type="text" placeholder="1501234" name="postCode" className={classes.inputText} ref={register({ required: true })}/>
                    <Box fontSize={12} fontWeight={700} className={classes.tips}>
                        <p className={classes.inputLabelP}>※半角数字7ケタ、ハイフンなしで入力</p>
                    </Box>
                </Box>
                <Box fontSize={12} fontWeight={700} className={classes.inputLabelJob}>
                    <p className={classes.inputLabelP}>職業【任意】</p>
                </Box>
                <Box>
                    <input type="text" placeholder="アパレル店員・大学生" name="job" className={classes.inputText} />
                    {errors.job && <span>This field is required</span>}
                </Box>
                <Box>
                    <RegisterButton label={'登録する'} />
                </Box>
            </form>
        </Typography>
    );
}

export default withRouter(RegisterPage);
