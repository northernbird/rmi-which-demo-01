import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    pannel: {
        'display': 'flex',
        'flex-flow': 'column nowrap',
    },
    text: {
        'align-items': 'center',
        'background': '#EEEEEE',
        'width': '95%',
        'justify-content': 'center',
        'align-content': 'center',
        'height': '45px',
        outline: '0',
        border: 'none',
        'margin': '0px 10px 0px 10px',
        'text-align':'center',
        'font-size': '14px',
        'font-weight': '700',
        'letter-spacing': '0.1em',
        // 'color': '#bbbbbb',
        '-webkit-input-placeholder': '#bbbbbb'
    },
    labelPannel: {
        position: 'relative'
    },
    label: {
        'left': '84%',
        'width': '20%',
        'position': 'relative',
        'font-size': '12px',
        'font-weight': '400',
    }
});

function InputQuestionTextPannel({history}) {
    const classes = useStyles()

    const routeChange = () => {
        let path = '/register'
        history.push(path)
    }

    return (
        <div className={classes.pannel}>
            <input type="text" placeholder="質問の内容" name="question" className={classes.text} />
            <div className={classes.labelPannel}>
                <p className={classes.label}>0/40文字</p>
            </div>
        </div>
    );
}

export default InputQuestionTextPannel;