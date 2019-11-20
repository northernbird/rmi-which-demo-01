import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    selectBoxGroup: {
        width: '30%',
        maxWidth: '30%',
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
    const {label} = props
    const classes = useStyles()
    return (
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
                    <p className={classes.selectInput}>{label}</p>
                </Box>
            </Box>
    );
}

export default BirthdayYearSelectBox;
