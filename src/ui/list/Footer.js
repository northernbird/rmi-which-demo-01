import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


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
    },
    button: {
        fontSize: 40,
    }
});

function Footer(props) {
    const classes = useStyles()
    return (
        <div className={classes.pannel}>
            <IconButton className={classes.button}>
                <HomeRoundedIcon className={classes.button} />
            </IconButton>
        </div>
    );
}

export default Footer
