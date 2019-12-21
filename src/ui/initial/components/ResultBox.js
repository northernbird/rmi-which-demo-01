import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const useStyles = makeStyles({
    pannel: {
        'background': 'rgba(187, 187, 187, 0.7)',
        'border-radius': '16px',
        'bottom': 'auto',
        'flex': 'none',
        'height': '50px',
        'left': '87px',
        'margin': '0 0 0 0',
        'padding': '0px 0px 0px 0px',
        'position': 'absolute',
        'right': 'auto',
        'top': '167px',
        'width': '200px',
        'max-width': '100%',
        'visibility':'hidden',
    },

    visiblePannel: {
        'background': 'rgba(187, 187, 187, 0.7)',
        'border-radius': '16px',
        'bottom': 'auto',
        'flex': 'none',
        'height': '50px',
        'left': '87px',
        'margin': '0 0 0 0',
        'padding': '0px 0px 0px 0px',
        'position': 'absolute',
        'right': 'auto',
        'top': '167px',
        'width': '200px',
        'max-width': '100%',
        'visibility':'visible',
    },
});

const mapStateToProps = (state) => {
    alert(JSON.stringify(state))
    return {
        isSelected: state.finishTestQuestion
    }
}

function ResultBox({isSelected}) {
    const classes = useStyles()
    if (!isSelected) {
        return <div className={classes.visiblePannel}>AAAAA</div>;
    } else {
        return <div className={classes.pannel}>BBBBBB</div>;
    }

}

export default connect(
    mapStateToProps,
    null
)(ResultBox)