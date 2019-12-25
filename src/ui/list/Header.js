import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    pannel: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    footer: {
        display: 'flex',
        position: 'absolute',
        bottom: '0px',
        top: 'auto',
        height: '20%',
        background: '#FFFFFF',
    }
});

function Footer(props) {
    const classes = useStyles()
    return (
        <div>
            TODO Header
        </div>
    );
}

export default Footer
