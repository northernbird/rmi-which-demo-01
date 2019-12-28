import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    pannel: {
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'space-around',
        'height': '13vh',
        'align-items': 'center',

    },
    imagePannel: {
        'align-content': 'center',
        'align-items': 'center',
        'background': '#ffffff',
        'border': 'solid 1px #959595',
        'border-radius': '40px',
        'height': '40px',
        'justify-content': 'center',
        'padding': '0px 0px 0px 0px',
        'width': '40px',
        'max-width': '100%',
        'display':'flex',
        'flex-flow': 'row nowrap',
    },
    image: {
        position: 'relative',
        width: '60%'
    },


});

function AddCategoryPannel() {
    const classes = useStyles()

    return (
 <div className={classes.pannel}>
     <div className={classes.imagePannel} >
         <img className={classes.image} src="https://storage.googleapis.com/production-os-assets/assets/72de7e7c-ac10-41ce-8e3b-e9054ae03635"/>
     </div>
     <div className={classes.imagePannel} >
         <img className={classes.image} src="/content-cut.png"/>
     </div>
     <div className={classes.imagePannel} >
         <img className={classes.image} src="https://storage.googleapis.com/production-os-assets/assets/1001baa8-953d-40ad-9ca5-29a30ecc3d3a"/>
     </div>
     <div className={classes.imagePannel} >
         <img className={classes.image} src="https://storage.googleapis.com/production-os-assets/assets/7a42776e-bbcf-4bb2-8f9c-8fd3dac31e27"/>
     </div>
     <div className={classes.imagePannel} >
         <p>etc..</p>
     </div>
 </div>
    );
}

export default AddCategoryPannel;