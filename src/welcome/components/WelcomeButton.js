import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        border: 0,
        borderRadius: '20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0px 0px 0px 0px',
        margin: '160px 0px 0px 0px',
        width: '270px',
        'font-size': 14,
        'font-weight': 700,
        letterSpacing: '0.2em'
    },
});

function WelcomeButton(props) {
    const { onClick, label } = props
    const classes = useStyles();
    return (
        <Button className={classes.button} onClick={onClick}>
            {label}
        </Button>
    );
}

WelcomeButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default WelcomeButton;
