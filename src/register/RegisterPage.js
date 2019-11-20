import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import ProfileImageUpload from './components/ProfileImageUpload'
import GenderRadioButton from './components/GenderRadioButton'
import BirthdayYearSelectBox from './components/BirthDayYearSelectBox'
import RegisterButton from './components/RegisterButton'
import useForm from 'react-hook-form'

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
        color: '#686868'
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

function RegisterPage() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
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
                <Box fontSize={12} fontWeight={700} className={classes.genderButtonGroup}>
                    <GenderRadioButton name="gender" value="woman" label={'女性'} register={register({ required: true })}/>
                    <GenderRadioButton name="gender" value="man" label={'男性'} register={register({ required: true })}/>
                    <GenderRadioButton name="gender" value="other" label={'その他'} register={register({ required: true })}/>
                </Box>
                <Box fontSize={12} fontWeight={700} className={classes.inputLabel}>
                    <p className={classes.inputLabelP}>生年月日【必須】</p>
                </Box>
                <Box className={classes.birthdaySelectBox}>
                    <Box fontSize={12} fontWeight={700} className={classes.birthdaySelectGroup}>
                        <BirthdayYearSelectBox label={'年'} dataList={birthDayYear} ref={register}/>
                        <BirthdayYearSelectBox label={'月'} dataList={birthDayMonth} ref={register}/>
                    </Box>
                    {errors.birthDayYear && <span>This field is required</span>}
                    {errors.birthDayMonth && <span>This field is required</span>}
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

export default RegisterPage;
