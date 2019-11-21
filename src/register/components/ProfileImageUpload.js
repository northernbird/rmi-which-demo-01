import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback } from "react";
import ImageUpload from './ImageUpload'
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles({
    pannel: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        width: '100%',
        maxWidth: '100%',
        textAlign: 'center',
    },
    profileLabel: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        marginTop: '25px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
    },
    line: {
        alignContent: 'center',
        alignItems: 'center',
        display:'inline-block',
        background: 'linear-gradient(135deg, #2efdf7, #0f8bfd)',
        height: '3px',
        width: '50px',
        maxWidth: '100%',
    },
    profileImage: {
        alignContent: 'center',
        alignItems: 'center',
        background: '#EEEEEE',
        borderRadius: '30%',
        width: '110px',
        height: '110px',
        margin: 'auto',
        marginTop: '25px',
    },
    profile: {
        marginTop: '27px',
    }
});

function ProfileImageUpload() {
    const classes = useStyles()
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <div className={classes.line}/>
            <div className={classes.profileImage}>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? <Box letterSpacing={'0.1em'} fontSize={12} fontWeight={700} color={'#686868'}>画像をドロップ ...</Box> : <Box>
                        <ImageUpload className={classes.profile}/>
                        <Box letterSpacing={'0.1em'} fontSize={12} fontWeight={700} color={'#686868'}>画像を追加</Box>
                    </Box>}
                </div>
            </div>
        </div>
    );
}

export default ProfileImageUpload;
