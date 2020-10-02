import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useCodeJar } from "react-codejar";
import "./index.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderRadius: '10px',
        backgroundColor: '#FEFBF8',
    },
    button: {
        // margin: theme.spacing(1.5),
        color: 'white',
    },
    details: {
        // mixHeight: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    accordion:{
        backgroundColor: '#E0ECED',
        borderRadius:'5px'
    },

}));

const highlight = editor => {
    let code = editor.textContent;
    code = code.replace(/\((\w+?)(\b)/g, '(<font color="#8a2be2">$1</font>$2');
    editor.innerHTML = code;
};

const CodeJar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const {
        description,
        language,
        snippet,
        _id,
        handleAdd,
        setCode
    } = props;

    const editorRef = useCodeJar({
        code: snippet,// Initial code value
        onUpdate: setCode, // Update the text
        highlight // Highlight function, receive the editor
    });

    // handles component funciton
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const compile = (event) => {
        console.log('compile')
    };

    const [expanded, setExpanded] = useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Grid item xs={12} sm={6} >
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings"
                            onClick={handleClickOpen}
                        >
                            <CodeIcon fontSize='large' />
                        </IconButton>
                    }
                    title={language}
                    subheader={description}
                />
                <CardContent>
                    <Accordion className={classes.accordion} square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography >click to view snippet</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details} >
                            <div className='editor'>
                                <div ref={editorRef}></div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Typography color="textSecondary">
                        {/* this will be the category */}
                    </Typography>
                    <Typography className={classes.pos}>
                        <br />
                        {/* onClick={handleAdd} */}
                        <Button size="small" onClick={handleClickOpen}  >
                            <VisibilityIcon fontSize='large' />
                        </Button>
                        <Button size="small" onClick={handleAdd(_id)} >
                            <AddCircleIcon />
                        </Button>
                    </Typography>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='form-dialog-title'
                    >
                        <div className='editor'>
                            <div ref={editorRef}></div>
                            <Button color='primary' className='Button' size="small" onClick={compile} >
                                <CodeIcon fontSize='large' />
                            </Button>
                            <Button color="primary" size="small" onClick={handleAdd(_id)} >
                                <AddIcon fontSize='large' />
                            </Button>
                        </div>
                    </Dialog>
                </CardContent>
            </Card >
        </Grid >
    );
};

export default CodeJar;





 // //! dont do this 
    // // dont make a prop => state  **antipattern
    // setCode(`${snippet} `);

    // // setCode(snippet)
    // // change the snippet 
    // // send a function with the id 
    // // parent send function to change the snippet 
    // // set snippet or something 