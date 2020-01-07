import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    pannel: {
        position: 'fixed',
        width: '95%',
        display: 'flex',
        bottom: '0px',
        background: '#FFFFFF',
        'justify-content': 'space-around',
    },
    buttonPannel: {
        position: 'relative',
    },
    button: {
        fontSize: 40,
    },
    postFormButton: {
        'background': 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        'color': '#000000000'
    }

});

function Footer({history}) {
    const classes = useStyles()
    const createNewQuestion = () => {
        let path = '/add'
        history.push(path)
    };
    const returnList = () => {
        let path = '/list'
        history.push(path)
    };
    return (
        <div className={classes.pannel}>
            <IconButton className={classes.buttonPannel}>
                <HomeRoundedIcon className={classes.button} onClick={returnList}/>
            </IconButton>
            <IconButton className={classes.buttonPannel}>
                <BookmarkBorderIcon className={classes.button} />
            </IconButton>
            <IconButton className={classes.buttonPannel}>
                <Fab color="secondary" className={classes.postFormButton} >
                    <AddIcon onClick={createNewQuestion}/>
                </Fab>
            </IconButton>
            <IconButton className={classes.buttonPannel}>
                <NotificationsOutlinedIcon className={classes.button} />
            </IconButton>
            <IconButton className={classes.buttonPannel}>
                <AccountCircleOutlinedIcon className={classes.button} />
            </IconButton>
        </div>
    );
}

export default withRouter(Footer);
