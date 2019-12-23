import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SubmitButton from './SubmitButton';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    flexPanel: {
        'z-index': '0',
        'flex-wrap': 'nowrap',
        display: 'flex',
        position: 'relative',
        'flex-direction': 'column',
        'align-content': 'center',
        'align-items': 'center',
        'margin': '25px 0px 0px 0px',
    },
    link: {
        'align-content': 'center',
        'align-items': 'center',
        'background': '#dfdfdf',
        'border-radius': '20px',
        'box-shadow': 'none',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '50px',
        'justify-content': 'center',
        'margin': '25px 0px 0px 0px',
        'padding': '0px 0px 0px 0px',
        'width': '270px',
        'max-width': '100%',
        'z-index': '0',
        'pointer-events': 'all',
        '-webkit-overflow-scrolling': 'touch',
        'display': 'flex',
        'position': 'relative',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        '-webkit-box-align': 'center',
        'overflow': 'hidden',
        'text-decoration': 'none',
    },
});

function FooterBox({history}) {
    const onClick = () => {
        alert('Hello')
        let path = '/register'
        history.push(path)
    }
    const classes = useStyles()
    return (
        <div className={classes.flexPanel}>
            <SubmitButton label={'スタート'} onClick={onClick} test={true}/>
        </div>
    );
}

export default withRouter(FooterBox);
