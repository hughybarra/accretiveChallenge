import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from 'components/layout/nav/';
import Body from 'components/layout/body/';
import justify_text from 'utils/justify_text/index';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100vw',
        margin: 0,
        padding: 0,
    }
})

function App() {
    const classes = useStyles();

    // EDIT HERE
    // ===============================
    const sample_string = 'I am the test string Change me and refresh the browser to see the results';
    const justify_length = 300;
    // ===============================
    useEffect(()=>{
        // dont touch this
        // ----------------------------
        let justified_str = justify_text(sample_string, justify_length);
        console.log(justified_str);
        console.log(justified_str.length);
        // ----------------------------
    },[]);
  return (
      <Container className={classes.root}>
        <Nav />
        <Body />
      </Container>
  );
}

export default App;
