import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import InputQuestionTextPannel from './components/InputQuestionTextPannel'
import AddCategoryPannel from './components/AddCategoryPannel'
import AddPhotoPannel from './components/AddPhotoPannel'
import AddAgePannel from './components/AddAgePannel'
import SubmitQuestionButton from './components/SubmitQuestionButton'
import Footer from '../common/Footer'


const useStyles = makeStyles({
    pannel: {
        display: 'flex',
        'flex-flow': 'column nowrap',
        'margin': '20px 0px 10px 0px',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
        //TODO  Why height doesn't work with percentage
        'height': '730px',
    }
});

function AddQuestion({history}) {
    const classes = useStyles()

    const routeChange = () => {
        let path = '/register'
        history.push(path)
    }

    return (
        <Typography component={'div'}>
            <div className={classes.pannel}>
                <InputQuestionTextPannel/>
                <AddPhotoPannel/>
                <AddCategoryPannel/>
                <AddAgePannel/>
              <SubmitQuestionButton/>
            </div>
            <Footer/>
        </Typography>
    );
}

export default AddQuestion;