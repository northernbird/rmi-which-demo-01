import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pannel: {
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'center',
        'height': '100px',
        'align-items': 'center',
        'margin-top': '20px',
        '& input[type="radio"]': {
            display: 'none',
        },
        '& input[type="radio"] + img': {
            cursor: 'pointer',
        },
        '& input[type="radio"]:checked + span': {
            border: 'solid 5px #959595',
            background: '#e6ebe7',
        },
    },
    categoryPannel: {
        'display':'flex',
        'flex-flow': 'column nowrap',
        'align-items': 'center',
        'align-content': 'center',
        'justify-content': 'center',
        'width': '70px',
        'height': '100%',
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
        'flex-flow': 'column nowrap',
    },
    label: {
        'color': '#333',
        'font-size': '10px',
        'font-weight': '400',
        'height': 'auto',
        'margin': '10px 0px 0px 0px',
        'text-align': 'center',
        'width': 'auto',
        'max-width': '100%',
        'justify-content': 'center'
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
     <label className={classes.categoryPannel}>
         <input type="radio" name="test" value="1"/>
         <span className={classes.imagePannel} >
             <img className={classes.image} src="https://storage.googleapis.com/production-os-assets/assets/72de7e7c-ac10-41ce-8e3b-e9054ae03635"/>
         </span>
         <p className={classes.label}>ファッション</p>
     </label>
     <label className={classes.categoryPannel}>
         <input type="radio" name="test" value="2"/>
         <span className={classes.imagePannel} >
             <img className={classes.image} src="https://www.materialui.co/materialIcons/content/content_cut_24px.svg"/>
         </span>
         <p className={classes.label}>ヘア</p>
     </label>
     <label className={classes.categoryPannel}>
         <input type="radio" name="test" value="3"/>
         <span className={classes.imagePannel} >
             <img className={classes.image} src="https://storage.googleapis.com/production-os-assets/assets/1001baa8-953d-40ad-9ca5-29a30ecc3d3a"/>
         </span>
         <p className={classes.label}>プレゼント</p>
     </label>
     <label className={classes.categoryPannel}>
         <input type="radio" name="test" value="4"/>
         <span className={classes.imagePannel} >
             <img className={classes.image} src="https://storage.googleapis.com/production-os-assets/assets/7a42776e-bbcf-4bb2-8f9c-8fd3dac31e27"/>
         </span>
         <p className={classes.label}>メイク</p>
     </label>
     <label className={classes.categoryPannel}>
         <input type="radio" name="test" value="5"/>
         <span className={classes.imagePannel} >
             <p>etc..</p>
         </span>
         <p className={classes.label}>その他</p>
     </label>
 </div>
    );
}

export default AddCategoryPannel;