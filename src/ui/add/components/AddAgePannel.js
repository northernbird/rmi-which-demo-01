import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pannel: {
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'center',
        'height': '60px',
        'align-items': 'center',

    },
    agePannel: {
        'display':'flex',
        'flex-flow': 'column nowrap',
        'align-items': 'center',
        'width': '70px'
    },
    ageButton: {
        'align-content': 'center',
        'background': '#ffffff',
        'border': 'solid 1px #959595',
        'border-radius': '40px',
        'flex': 'none',
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'height': '40px',
        'justify-content': 'center',
        'align-items': 'center',
        'width': '40px',
        'max-width': '100%',
        'display':'flex',
    },
    ageLabel: {
        'color': '#333',
        'font-family': 'Lato',
        'font-size': '10px',
        'font-weight': '700',
        'height': 'auto',
        'margin': '0px 0px 0px 0px',
        'padding': '0px 0px 0px 0px',
        'text-align': 'center',
        'width': 'auto',
        'max-width': '100%',
        'justify-content': 'center',
    }
});

function AddAgePannel() {
    const classes = useStyles()

    return (
        <div className={classes.pannel}>
            <div className={classes.agePannel}>
                <div className={classes.ageButton} >
                    <p className={classes.ageLabel}>10代</p>
                </div>
            </div>
            <div className={classes.agePannel}>
                <div className={classes.ageButton} >
                    <p className={classes.ageLabel}>20代</p>
                </div>
            </div>
            <div className={classes.agePannel}>
                <div className={classes.ageButton} >
                    <p className={classes.ageLabel}>30代</p>
                </div>
            </div>
            <div className={classes.agePannel}>
                <div className={classes.ageButton} >
                    <p className={classes.ageLabel}>40代</p>
                </div>
            </div>
        </div>
    );
}

export default AddAgePannel;