import React, { Component, useState } from "react";
import hljs from 'highlight.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// You can choose to use the component or the hook
import { ReactCodeJar, useCodeJar } from "react-codejar";

import "./index.css";

const highlight = editor => {
    let code = editor.textContent;
    code = code.replace(/\((\w+?)(\b)/g, '(<font color="#8a2be2">$1</font>$2');
    editor.innerHTML = code;
};

const CodeJar = () => {
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
            <div className='editor' >
                <ReactCodeJar
                    code={code} // Initial code value
                    onUpdate={setCode} // Update the text
                    highlight={highlight} // Highlight function, receive the editor
                />
            </div>
            <Button className='Button' size="small" onClick={addToCollection} >Add to Collection</Button>
            <Button className='Button' size="small" onClick={compile} >run</Button>
        </Grid>
    );
};

export default CodeJar;

