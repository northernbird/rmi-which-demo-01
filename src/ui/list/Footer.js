import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles({
    pannel: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    // footer: {
    //     display: 'flex',
    //     position: 'absolute',
    //     bottom: '0px',
    //     top: 'auto',
    //     height: '20%',
    //     background: '#FFFFFF',
    // },
    button: {
        fontSize: 40,
    },
    submitButton : {
        'align-content': 'center',
        'align-items': 'center',
        'background': 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        'border-radius': '50%',
        'box-shadow': '0 2px 5px rgba(0,0,0,0.2)',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '60px',
        'justify-content': 'center',
        'margin': '5px 0px 0px 0px',
        'padding': '0px 0px 0px 0px',
        'width': '50px',
        // 'max-width': '100%'
    },
    postFormButton: {
        'background': 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        'color': '#000000000'
    }

});

function Footer(props) {
    const classes = useStyles()
    return (
        <div className={classes.pannel}>
            <IconButton>
                <HomeRoundedIcon className={classes.button} />
            </IconButton>
            <IconButton>
                <BookmarkBorderIcon className={classes.button} />
            </IconButton>
            <IconButton>
                <Fab color="secondary" className={classes.postFormButton} >
                    <AddIcon />
                </Fab>
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon className={classes.button} />
            </IconButton>
            <IconButton>
                <AccountCircleOutlinedIcon className={classes.button} />
            </IconButton>
        </div>
    );
}

export default Footer
