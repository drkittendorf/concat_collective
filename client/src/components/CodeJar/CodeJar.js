import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// You can choose to use the component or the hook
import { ReactCodeJar, useCodeJar } from "react-codejar";
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderRadius: '10px'
    },
    button: {
        // margin: theme.spacing(1.5),
        color: 'white',
    }
}));


const highlight = editor => {
    let code = editor.textContent;
    code = code.replace(/\((\w+?)(\b)/g, '(<font color="#8a2be2">$1</font>$2');
    editor.innerHTML = code;
};

const CodeJar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    // this is used by the accordion
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
                    title={'Code title'}
                    subheader={'this would be the skill level '}
                />
                <CardContent>
                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>view preview here 🧐 </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='editor'>
                                <ReactCodeJar
                                    code={code} // Initial code value
                                    onUpdate={setCode} // Update the text
                                    highlight={highlight} // Highlight function, receive the editor
                                />
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
                        <Button size="small" onClick={addToCollection} >
                            {/* <Icon className="fas fa-plus" /> */}
                            {/* add to collection */}
                            <AddCircleIcon />
                        </Button>
                    </Typography>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='form-dialog-title'
                    >
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
                    </Dialog>
                </CardContent>
            </Card >
        </Grid >
    );
};

export default CodeJar;

