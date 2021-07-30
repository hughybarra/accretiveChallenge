import React from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        margin: '10px'
    },
});

function TextInput(props) {
    const classes = useStyles();

    let handle_change = (e) =>{
        props.handle_change(e.target.value);
    };

    return (
        <div className="body_container">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label={props.label} variant="outlined" value={props.value}  onChange={handle_change} color="secondary"/>
            </form>
        </div>
    );
}

export default TextInput;
