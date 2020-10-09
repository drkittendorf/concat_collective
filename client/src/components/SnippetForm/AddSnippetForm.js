//this is to add a snippet
import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	formControl: {
		margin: theme.spacing(1),
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	textArea: {
		width: '100%',
		minHeight: '200px',

	}
}));

export default function AddResource(props) {
	const classes = useStyles();

	const {
		submitForm,
		handleSnippetInput,
		snippetInput,
		descriptionInput,
		handleDescriptionInput,
		language,
		handleLanguage

	} = props

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<FormControl
			fullWidth={true}
			 className={classes.formControl}>
				<Select
					value={language}
					onChange={handleLanguage}
					displayEmpty
					className={classes.selectEmpty}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value='' disabled>
						Select Category
						</MenuItem>
					<MenuItem value={'Algorithms'}>Algorithms</MenuItem>
					<MenuItem value={'C#'}>C#</MenuItem>
					<MenuItem value={'C++'}>C++</MenuItem>
					<MenuItem value={'CSS'}>CSS</MenuItem>
					<MenuItem value={'Golang (Go)'}>Golang (Go)</MenuItem>
					<MenuItem value={'HTML'}>HTML</MenuItem>
					<MenuItem value={'Java'}>Java</MenuItem>
					<MenuItem value={'JavaScript'}>JavaScript</MenuItem>
					<MenuItem value={'MATLAB'}>MATLAB</MenuItem>
					<MenuItem value={'Node.js'}>Node.js</MenuItem>
					<MenuItem value={'Perl'}>Perl</MenuItem>
					<MenuItem value={'PHP'}>PHP</MenuItem>
					<MenuItem value={'R'}>R</MenuItem>
					<MenuItem value={'React.js'}>React.js</MenuItem>
					<MenuItem value={'Ruby'}>Ruby</MenuItem>
					<MenuItem value={'Rust'}>Rust</MenuItem>
					<MenuItem value={'Scheme'}>Scheme</MenuItem>
					<MenuItem value={'Scala'}>Scala</MenuItem>
					<MenuItem value={'SQL'}>SQL</MenuItem>
					<MenuItem value={'Swift'}>Swift</MenuItem>
					<MenuItem value={'TypeScript'}>TypeScript</MenuItem>
					<MenuItem value={'Other'}>Other</MenuItem>
				</Select>
				<FormHelperText>EX: Javascript</FormHelperText>
			</FormControl>
			<DialogContent className={classes.formControl}>
				<DialogContentText>Save code here!</DialogContentText>
				{/* where they enter the snippet */}
				<TextareaAutosize
					onChange={handleSnippetInput}
					value={snippetInput}
					id={'editor'}
					className={classes.textArea}
					aria-label="empty textarea" placeholder="Empty"
					defaultValue="console.log('howdy')"
				/>
				<TextField
					// linkInput={linkInput}
					margin='dense'
					id='link'
					label='description'
					type='text'
					fullWidth
					onChange={handleDescriptionInput}
					value={descriptionInput}
				/>
				<Button
					onClick={submitForm}
					fullWidth={true}
					color='primary'>
					Submit
					</Button>

				{/* {children} */}
			</DialogContent>
		</div>
	);
}
