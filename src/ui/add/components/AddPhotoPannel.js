import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    pannel: {
        'display': 'flex',
        'flex-flow': 'column nowrap',
    },
});

function AddPhotoPannel({history}) {
    const classes = useStyles()

    const routeChange = () => {
        let path = '/register'
        history.push(path)
    }

    return (
        <div>TODO</div>
    );
}

export default AddPhotoPannel;