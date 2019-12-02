import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    StudioCanvas: {
        height: 'auto',
        'min-height': '100vh',
    },
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

function InitialPage(props) {
    const classes = useStyles()
    return (
        <Typography component="div"  className={classes.StudioCanvas}>
            <div className={classes.flexPanel}>
                <div className= {classes.titleBox}>
                    <p className={classes.titleContent}>
                    テスト用の質問です。<br/>
                    気軽にどちらか選択してみましょう。
                    </p>
                </div>
            </div>
        </Typography>
    );
}

export default InitialPage;
