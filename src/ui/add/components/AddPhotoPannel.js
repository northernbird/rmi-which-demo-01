import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    pannel: {
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'space-around',
    },
    photoPannel: {
        'display': 'flex',
        'align-content': 'center',
        'align-items': 'center',
        'background': '#f0f0f0',
        'border': 'dashed 2px #959595',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '270px',
        'justify-content': 'center',
        'width': '45%',
        'max-width': '45%',
    }
});

function InputQuestionTextPannel() {
    const classes = useStyles()

    return (
        <div className={classes.pannel}>
            <div className={classes.photoPannel}>
            </div>
            <div className={classes.photoPannel}>
            </div>
        </div>
    );
}

export default InputQuestionTextPannel;