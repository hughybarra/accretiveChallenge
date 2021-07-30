import React, { useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    Button,
    Typography,
} from '@material-ui/core';
import InputText from 'components/inputs/text_field';
import justify_text from 'utils/justify_text/index';
import Output from 'components/output/';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f23d',
        color: '#fff',
        background: "url('https://i.imgur.com/mWm02h7.jpeg') no-repeat center center fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
    },
    input_card_container:{
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 400,
        margin: 10,
        backgroundColor: 'rgba( 255, 255, 255, 0.5)',
    },
    output_card_container:{
        width: 400,
        height: 400,
        backgroundColor: 'rgba( 255, 255, 255, 0.5)',
        overflow: 'hidden',
        position: 'relative',
    },
    heading:{
        margin: 10,
    }
});

function AppBody() {
    const classes = useStyles();
    const [input_text, set_input_text] = useState('initial value')
    const [input_number, set_input_number] = useState(50);
    const [justified_text, set_justified_text] = useState('');

    const handle_click = () =>{
        if(input_text.length && input_number !== '0'){
            let clean = justify_text(input_text, input_number);
            set_justified_text(clean.split(' '));
        }else{
            set_justified_text(' ', input_number);
        }
    };

    const text_change = (value) =>{
        set_input_text(value);
    };

    const number_change = (value)=>{
        set_input_number(Number(value));
    }

    return (
    <div className={classes.root}>
        <Card className={classes.input_card_container}>
            <Typography variant="h6" className={classes.heading}>Justify Your Text Here</Typography>
            <InputText label="Justify This Text" handle_change={text_change} value={input_text}/>
            <InputText label="Justification Length" handle_change={number_change} value={input_number} />
            <Button variant="outlined" onClick={()=>handle_click()} color="secondary">Try it</Button>
        </Card>

        <Card className={classes.output_card_container}>
            <Output text={justified_text}/>
        </Card>

    </div>
    );
}

export default AppBody;
