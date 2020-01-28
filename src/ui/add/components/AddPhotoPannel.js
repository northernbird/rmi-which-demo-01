import React, {useCallback, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useDropzone} from "react-dropzone";
import Box from "@material-ui/core/Box";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImageUpload from "../../register/components/ImageUpload";

const useStyles = makeStyles({
    pannel: props => ({
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'space-around',
        'height': props.height,
    }),
    photoPannel: props => ({
        'display': 'flex',
        'align-content': 'center',
        'align-items': 'center',
        'background': '#f0f0f0',
        'border': 'dashed 2px #959595',
        'flex': 'none',
        'flex-direction': 'column',
        'flex-wrap': 'nowrap',
        'height': '100%',
        'justify-content': 'center',
        'width': '45%',
        'max-width': '45%',
    }),
    addPhotoImage: {
        'align-items': 'center',
    },
    previewImage: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#EEEEEE',
        width: '100%',
        height: '100%',
        margin: 'auto',
    }
});

function InputQuestionTextPannel() {

    const [showPreview, setShowPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState()
    const matches = useMediaQuery('(orientation: landscape)')
    const onDrop = useCallback(acceptedFiles => {
        console.log("AAA")
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file);

            reader.onload = function () {
                //TODO: here change update as "imageLoaded" to show image preview
                alert(reader.result)
                setPreviewImage(reader.result)
                setShowPreview(true)
            };
            reader.onerror = function (error) {
                alert('Error: ', error);
            };
        })


    }, []);
    const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({onDrop})

    let props;
    if (matches) {
        props = {height: '50%'};
    } else {
        props = {height: '35%',};
    }
    const classes = useStyles(props)

    const renderContent = (isDragActive) =>  {

        if (showPreview) {
            return (<img src={previewImage} className={classes.previewImage}/>)
        } else {
            return [(
                isDragActive ? <Box letterSpacing={'0.1em'} fontSize={12} fontWeight={700} color={'#686868'}>画像をドロップ ...</Box> :
                    <div>
                        <Box display="flex" flexDirection="column" justifyContent="center" letterSpacing={'0.1em'} fontSize={12} fontWeight={700} color={'#686868'}>
                            <Box display="flex" justifyContent="center">
                                <InsertDriveFileIcon color={'#686868'}/>
                            </Box>
                            <Box>
                                画像を追加
                            </Box>
                        </Box>
                    </div>
            )]
        }
    };


    return (
        <div className={classes.pannel}>
            <div {...getRootProps()} className={classes.photoPannel}>
                <input {...getInputProps()} />
                {renderContent(isDragActive)}
            </div>
            <div className={classes.photoPannel}>
                <input {...getInputProps()} />
                {renderContent(isDragActive)}
            </div>
        </div>
    );
}

export default InputQuestionTextPannel;