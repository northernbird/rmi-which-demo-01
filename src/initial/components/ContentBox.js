import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserInfoBar from './user/UserInfoBar'
import TitleBar from './TitleBar'
import CompareImage from './CompareImage'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    sd: {
        'align-content': 'flex-start',
        'align-items': 'flex-start',
        'background': '#FFFFFF',
        'flex': 'none',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'height': '465px',
        'margin': '25px 0px 0px 0px',
        'overflow-x': 'hidden',
        'overflow-y': 'auto',
        'padding': '0px 0px 0px 0px',
        'width': '100%',
        'max-width': '100%',
        'z-index': '0',
        'pointer-events': 'all',
        '-webkit-overflow-scrolling': 'touch',
        'display': 'flex',
        'position': 'relative',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        '-webkit-box-align': 'center',
        'overflow': 'hidden',
        'justify-content': 'flex-start',
    },

    searchSd: {
        'bottom': '30px',
        'color': '#dfdfdf',
        'font-size': '20px',
        'height': '24px',
        'left': 'auto',
        'margin': '0 0 0 0',
        'position': 'absolute',
        'right': '26px',
        'top': 'auto',
        'width': '24px',
        'max-width': '100%',
        'display': 'flex',
        '-webkit-box-orient': 'horizontal',
        '-webkit-box-direction': 'normal',
        'flex-direction': 'row',
        '-webkit-box-align': 'center',
        'align-items': 'center',
        'align-content': 'center',
        '-webkit-box-pack': 'center',
        'justify-content': 'center',
        'overflow': 'visible',
        'font-weight': 'normal',
        'font-style': 'normal',
        'line-height': '1',
        'letter-spacing': 'normal',
        'text-transform': 'none',
        'white-space': 'nowrap',
        'word-wrap': 'normal',
        'direction': 'ltr',

        'background': 'rgba(0, 0, 0, 0.5)',
        'border-radius': '50%',
    }

});

function ContentBox(props) {
    const classes = useStyles()
    return (
        <div className={classes.sd}>
            <UserInfoBar/>
            <TitleBar label={'ジャケットどっちが良い？'}/>
            <CompareImage/>
            <SearchIcon className={classes.searchSd}>star</SearchIcon>
        </div>
    );
}

export default ContentBox;
