import React, { Component, useState } from "react";
import hljs from 'highlight.js';

// You can choose to use the component or the hook
import { ReactCodeJar, useCodeJar } from "react-codejar";

import "./index.css";

const highlight = editor => {
    let code = editor.textContent;
    code = code.replace(/\((\w+?)(\b)/g, '(<font color="#8a2be2">$1</font>$2');
     editor.innerHTML = code;
};

// const highlight = (editor) => {
//     // highlight.js does not trims old tags,
//     // let's do it by this hack.
//     editor.textContent = editor.textContent;
//     hljs.highlightBlock(editor);
//   };

const CodeJar = () => {
    const [code, setCode] = useState('(format t "lisp example")');

    return (
        <div className='editor' >
            <ReactCodeJar
                code={code} // Initial code value
                onUpdate={setCode} // Update the text
                highlight={highlight} // Highlight function, receive the editor
            />
        </div>
    );
};

export default CodeJar;

// const HookExample = () => {
//   const [code, setCode] = useState('(format t "lisp example")');

//   const editorRef = useCodeJar({
//     code, // Initial code value
//     onUpdate: setCode, // Update the text
//     highlight // Highlight function, receive the editor
//   });

//   return <div ref={editorRef}></div>;
// };


