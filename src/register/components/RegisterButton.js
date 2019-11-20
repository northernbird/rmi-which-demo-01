import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        background: '#333',
        "&:hover": {
            backgroundColor: "#333"
        },
        border: 0,
        borderRadius: '6px',
        color: 'white',
        height: '40px',
        padding: '0px 0px 0px 0px',
        margin: '40px 0px 0px 0px',
        width: '70%',
        'font-size': 14,
        'font-weight': 700,
        letterSpacing: '0.2em'
    },
});

function RegisterButton(props) {
    const { onClick, label } = props
    const classes = useStyles();
    return (
        <Button className={classes.button} onClick={onClick}>
            {label}
        </Button>
    );
}

RegisterButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default RegisterButton;
