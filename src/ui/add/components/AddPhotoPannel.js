import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    pannel: props=> ({
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'space-around',
        'height': props.height,
    }),
    photoPannel: props=> ({
        'display': 'flex',
        'align-content': 'center',
        'align-items': 'center',
        'background': '#f0f0f0',
        'border': 'dashed 2px #959595',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '100%',
        'justify-content': 'center',
        'width': '45%',
        'max-width': '45%',
    }),
    foo: props => ({
        backgroundColor: props.backgroundColor,
    }),
});

function InputQuestionTextPannel() {

    const matches = useMediaQuery('(min-width:500px)')

    let props;
    if(matches) {
        props = { height: '50%'};
    } else {
        props = { height: '35%',};
    }
    const classes = useStyles(props)

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