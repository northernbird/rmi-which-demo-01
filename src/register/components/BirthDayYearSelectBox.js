import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    selectBoxGroup: {
        width: '25%',
        maxWidth: '25%',
        display:'inline-block',
        height: '40px',
        marginRight: '10px'
    },
    selectBox: {
        display:'inline-block',
        fontSize: '14px',
        width: '100px'
    },
    selectInput: {
        display:'flex',
    },
    selectInputLabel: {
        display:'inline-block',
        alignContent: 'left',
        alignItems: 'left',
        verticalAlign:'10px',
    },
});

function BirthdayYearSelectBox(props) {
    const {name, label, dataList, register, unregister, setValue} = props
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value)
        setValue(name, e.target.value)
    }
    const classes = useStyles()
    useEffect(() => {
        register({ name });
    }, [name, register, unregister, inputValue]);
    return (
            <Box className={classes.selectBoxGroup}>
                {inputValue}
                <Select className={classes.selectBox} onChange={handleChange} value={inputValue}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {dataList.map((data) =>
                        <MenuItem value={data}>{data}</MenuItem>
                    )}
                </Select>
                <Box fontSize={12} fontWeight={700} className={classes.selectInputLabel} marginLeft={2}>
                    <p className={classes.selectInput}>{label}</p>
                </Box>
            </Box>
    );
}

export default BirthdayYearSelectBox;
