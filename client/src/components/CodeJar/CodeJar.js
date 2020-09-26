import React, { Component, useState } from "react";
import hljs from 'highlight.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// You can choose to use the component or the hook
import { ReactCodeJar, useCodeJar } from "react-codejar";
import "./index.css";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: '10px'
    }
});


const highlight = editor => {
    let code = editor.textContent;
    code = code.replace(/\((\w+?)(\b)/g, '(<font color="#8a2be2">$1</font>$2');
    editor.innerHTML = code;
};

const CodeJar = () => {
    const classes = useStyles();

    const [code, setCode] = useState(`function(ldsfj){
        console.log('hello')
    }
    `);

    const compile = (event) => {
        console.log('compile')
    };

    const addToCollection = () => {
        console.log('send to the api')
    }

    return (
        <Grid item xs={12} sm={6} >
            <Card className={classes.root}>
                <div className='editor'>
                    <ReactCodeJar
                        code={code} // Initial code value
                        onUpdate={setCode} // Update the text
                        highlight={highlight} // Highlight function, receive the editor
                    />
                    <Button color='primary' className='Button' size="small" onClick={compile} >
                        <CodeIcon fontSize='large' />
                    </Button>
                    <Button color="primary" size="small" onClick={addToCollection} >
                        <AddIcon fontSize='large' />
                    </Button>
                </div>
            </Card>
        </Grid>
    );
};

export default CodeJar;

