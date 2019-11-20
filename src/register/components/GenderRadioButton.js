import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles({
    genderButtonGroup: {
        display:'inline-block',
        width: '30%',
        maxWidth: '30%',
        borderBottom: 'solid 1px #7d7d7d',
        borderLeft: 'solid 1px #7d7d7d',
        borderRadius: '4px',
        borderRight: 'solid 1px #7d7d7d',
        borderTop: 'solid 1px #7d7d7d',
        height: '40px',
        marginRight: '10px'
    },
    input: {
        marginTop: '0px'
    },
    label: {
        marginLeft: '10px',
        display:'inline-block',
        height: '40px',
        marginTop: '10px'
    }
});

function GenderRadioButton(props) {
    const {name, value, label, register} = props
    const classes = useStyles()
    return (
        <Box className={classes.genderButtonGroup} fontSize={14} fontWeight={700} color={'#686868'}>
            <input name={name} type="radio" value={value} className={classes.input} ref={register}/>
            <p className={classes.label}>{label}</p>
        </Box>
    );
}

export default GenderRadioButton;
