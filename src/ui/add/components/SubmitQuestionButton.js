import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pannel: {
        'justify-content': 'center',
        'align-items': 'center',
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'height': '13vh',
    },
    button: {
        background: 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        border: 0,
        borderRadius: '6px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '50px',
        padding: '0px 0px 0px 0px',
        width: '250px',
        'font-size': 14,
        'font-weight': 700,
        letterSpacing: '0.2em',
    },
});

function SubmitQuestionButton(props) {
    const { onClick, label } = props
    const classes = useStyles();
    return (
        <div className={classes.pannel}>
            <Button className={classes.button} onClick={onClick}>
                アンケートを投稿する
            </Button>
        </div>
    );
}

SubmitQuestionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default SubmitQuestionButton;
