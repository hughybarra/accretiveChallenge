import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        width: '100%',
        height: '48px',
        overflow: 'hidden',
    },
    logo:{
        display: 'flex',
        marginLeft: '10px',
        maxHeight: '70%',
    }
});

function AppNav() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <img className={classes.logo} src="https://cdn.nsimg.net/3.0/auto/skin/sm/assets/92393-1569967393-Streamate_on_dark.png" alt="logo" />
    </div>
  );
}

export default AppNav;
