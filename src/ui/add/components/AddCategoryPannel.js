import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    pannel: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        marginTop: '230px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
        width: '100%',
        maxWidth: '100%',
        height: '380px',
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        width: 'auto',
        maxWidth: '100%',
    },
    subTitle: {
        marginTop: '46px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
    }
});

function AddCategoryPannel({history}) {
    const classes = useStyles()

    const routeChange = () => {
        let path = '/register'
        history.push(path)
    }

    return (
 <div>TODO</div>
    );
}

export default AddCategoryPannel;