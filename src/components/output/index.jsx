import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: '-20px',
        right: '-20px',
        overflow: 'scroll',
    },
    code:{
        display: 'flex',
        flex: 1,
        backgroundColor: 'grey',
        marginRight: 20,
        marginLeft: 10,
        color: '#000',
    }
});

function Output(props) {
    const classes = useStyles();

    const print_r = (o) => {
      return JSON.stringify(o,null,'\t').replace(/\n/g,' ').replace(/\t/g,'');
    }

    const render_output = () =>{
        if(props.text){
            return(
                <div className={classes.root}>
                    <div clssName={classes.heading}>
                        <Typography type="h6">Preview of justified output</Typography>
                    </div>
                    <code className={classes.code}>{print_r(props.text)}</code>
                </div>
            )
        }else{
            return (
                <p>No Input to show here</p>
            );
        }
    };
    return (
      <div className={classes.root}>
        {render_output()}
      </div>
    );
}

export default Output;
