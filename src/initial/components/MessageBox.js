import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    flexPanel: {
        'z-index': '0',
        'flex-wrap': 'nowrap',
        display: 'flex',
        position: 'relative',
        'flex-direction': 'column',
        'align-content': 'center',
        'align-items': 'center',
    },
    titleBox: {
        display: 'flex',
        'align-items': 'center',
        'background': '#ffffff',
        'border': 'solid 1px #ff0000',
        'border-radius': '10px',
        'flex': 'none',
        'height': '70px',
        'justify-content': 'center',
        'margin': '30px 0px 0px 0px',
        'width': '80%',
        'max-width': '80%',
        '-webkit-box-align': 'center'
    },
    titleContent: {
        'color': '#ff0000',
        'font-family': 'Lato',
        'font-size': '14px',
        'font-weight': '700',
        'height': 'auto',
        'letter-spacing': '0.05em',
        'line-height': '1.4',
        'margin': '0px 0px 0px 0px',
        'text-align': 'center',
        'width': 'auto',
        'max-width': '100%',
        'justify-content': 'center',
    }

});

function MessageBox(props) {
    const classes = useStyles()
    return (
        <div className={classes.flexPanel}>
            <div className= {classes.titleBox}>
                <p className={classes.titleContent}>
                    テスト用の質問です。<br/>
                    気軽にどちらか選択してみましょう。
                </p>
            </div>
        </div>
    );
}

export default MessageBox;
