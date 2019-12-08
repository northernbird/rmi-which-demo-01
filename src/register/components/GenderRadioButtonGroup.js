import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    test: {
        width: '75%',
        maxWidth: '75%',
        textAlign: 'center',
        display:'inline-block',
    },
    genderButtonGroup: {
        width: '100%',
        maxWidth: '100%',
        display:'flex',
        'flex-direction': 'row',
        // 'margin-right': '20px',
    },
    genderButton: {
        display:'inline-block',
        width: '31%',
        maxWidth: '31%',
        borderBottom: 'solid 1px #7d7d7d',
        borderLeft: 'solid 1px #7d7d7d',
        borderRadius: '4px',
        borderRight: 'solid 1px #7d7d7d',
        borderTop: 'solid 1px #7d7d7d',
        height: '40px',
        marginRight: '10px',
        backgroundColor: "white"
    },
    genderButtonSelected: {
        display:'inline-block',
        width: '31%',
        maxWidth: '31%',
        borderRadius: '4px',
        height: '40px',
        marginRight: '10px',
        background: 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        color: "white",
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

function GenderRadioButtonGroup(props) {
    const {register} = props
    const classes = useStyles()
    const [selectedValue, setSelectedValue] = useState("")
    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }
    return (
        <div className={classes.test}>
            <Box fontSize={12} fontWeight={700} className={classes.genderButtonGroup}>
                <Box className={selectedValue==="male"? classes.genderButtonSelected : classes.genderButton} fontSize={14} fontWeight={700} color={'#686868'}>
                    <input name="gender" type="radio" value="male" className={classes.input} ref={register} checked={selectedValue==="male"} onChange={handleChange}/>
                    <p className={classes.label}>男性</p>
                </Box>
                <Box className={selectedValue==="female"? classes.genderButtonSelected : classes.genderButton} fontSize={14} fontWeight={700} color={'#686868'}>
                    <input name="gender" type="radio" value="female" className={classes.input} ref={register} checked={selectedValue==="female"} onChange={handleChange}/>
                    <p className={classes.label}>女性</p>
                </Box>
                <Box className={selectedValue==="other"? classes.genderButtonSelected : classes.genderButton}  fontSize={14} fontWeight={700} color={'#686868'}>
                    <input name="gender" type="radio" value="other" className={classes.input} ref={register} checked={selectedValue==="other"} onChange={handleChange}/>
                    <p className={classes.label}>その他</p>
                </Box>
            </Box>
        </div>

    );
}

export default GenderRadioButtonGroup;
