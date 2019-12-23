import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const useStyles = makeStyles({
    // pannel: {
    //     'background': 'rgba(187, 187, 187, 0.7)',
    //     'border-radius': '16px',
    //     'bottom': 'auto',
    //     'flex': 'none',
    //     'height': '50px',
    //     'left': '87px',
    //     'margin': '0 0 0 0',
    //     'padding': '0px 0px 0px 0px',
    //     'position': 'absolute',
    //     'right': 'auto',
    //     'top': '167px',
    //     'width': '200px',
    //     'max-width': '100%',
    //     'visibility':'hidden',
    //     'display': 'flex',
    //     'flex-flow': 'row nowrap'
    // },
    visiblePannel: {
        'background': 'rgba(187, 187, 187, 0.7)',
        'border-radius': '16px',
        'bottom': 'auto',
        'flex': 'none',
        'height': '50px',
        // 'left': '87px',
        // 'margin': '0 0 0 0',
        'padding': '0px 0px 0px 0px',
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'margin': 'auto',
        // 'right': 'auto',
        'top': '40%',
        // 'width': '200px',
        'width': '60%',
        'max-width': '100%',
        'visibility':'visible',
        'display': 'flex',
        'flex-flow': 'row nowrap'
    },
    resultHeader: {
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'margin': 'auto',
        'width': '10%',
        'background-color': 'transparent'
    },
    leftPannel: {
        'background': 'rgba(256, 256, 256, 256)',
        // Width Percent should be dynamically generated
        'width': '57%',
        'height': '50px',
        'border-radius': '16px',
    },
    leftPannelText: {
        'position': 'absolute',
        'left': '5%',
        'bottom': '6%',
    },
    rightPannel: {
        'background': 'rgba(187, 187, 187, 0.7)',
        // Width Percent should be dynamically generated
        'width': '43%',
        'height': '50px',
        'border-radius': '16px',
    },
    rightPannelText: {
        'position': 'absolute',
        'right': '5%',
        'bottom': '6%',
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
        return <div className={classes.visiblePannel}>
            <div className={classes.resultHeader}>All</div>
            <div className={classes.leftPannel}>
                <span className={classes.leftPannelText}>57%</span>
            </div>
            <div className={classes.right}>
                <span className={classes.rightPannelText}>43%</span>
            </div>
        </div>;
    } else {
        return null;
    }

}

export default connect(
    mapStateToProps,
    null
)(ResultBox)