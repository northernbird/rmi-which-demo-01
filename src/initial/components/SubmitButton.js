import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    button: {
        background: '#dfdfdf',
        border: 0,
        borderRadius: '20px',
        color: '#686868',
        height: 48,
        width: '270px',
        'font-size': 14,
        'font-weight': 700,
        letterSpacing: '0.2em'
    },
});

function SubmitButton(props) {
    const { onClick, label } = props
    const classes = useStyles();
    return (
        <Button className={classes.button} onClick={onClick}  disabled={true}>
            {label}
        </Button>
    );
}

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default SubmitButton;
