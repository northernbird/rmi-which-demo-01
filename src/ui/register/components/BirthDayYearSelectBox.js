import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    selectBoxGroup: {
        width: '40%',
        maxWidth: '40%',
        display:'flex',
        height: '40px',
        marginRight: '10px'
    },
    selectBox: {
        fontSize: '14px',
        // width: '30%'
        'flex-grow': 5
    },
    selectInput: {
        display:'flex',
        color: '#686868'
    },
    selectInputLabel: {
        // display:'inline-block',
        alignContent: 'left',
        alignItems: 'left',
        verticalAlign:'10px',
    },
});

function BirthdayYearSelectBox(props) {
    const {watch, name, label, dataList, register, setValue} = props
    const selectValue = watch(name);
    const handleChange = (e) => {
        setValue(name, e.target.value, true)
    }
    const classes = useStyles()
    useEffect(() => {
        register({ name });
    }, [name, register]);
    return (
            <Box className={classes.selectBoxGroup}>
                <Select className={classes.selectBox} onChange={handleChange} value={selectValue} autoWidth={true}>
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
