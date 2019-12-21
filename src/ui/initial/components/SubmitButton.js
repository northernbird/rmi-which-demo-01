import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import { connect } from 'react-redux'


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

const mapStateToProps = (state) => {
    alert(JSON.stringify(state))
    return {
        isSelected: state.finishTestQuestion
    }
}

function SubmitButton(props) {
    const { onClick, label, isSelected } = props
    const classes = useStyles();
    return (
        // <Button className={classes.button} onClick={onClick}  disabled={true}>
       <Button className={classes.button} onClick={onClick}  disabled={isSelected}>
        {/*<Button className={classes.button} onClick={onClick}  disabled={props.test}>*/}
        {/*<Button className={classes.button} onClick={onClick}  disabled={props.test}>*/}
            {label}
        </Button>
    );
}

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

// export default SubmitButton;

export default connect(
    mapStateToProps,
    null
)(SubmitButton)








