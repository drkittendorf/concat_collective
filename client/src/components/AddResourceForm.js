import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function AddResource() {
    const classes = useStyles()
    
    const [open, setOpen] = React.useState(false);

    const [category, setCategory] = React.useState('');
    const [skill, setSkill] = React.useState('');
    
    const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	const handleSkillChange = (event) => {
		setCategory(event.target.value);
    };
    
    

	return (
		<div>
			<DialogTitle id='form-dialog-title'>Add Resource</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Find something cool? Add it to the collection!
				</DialogContentText>
				{/* where they enter the link/resource */}
				<TextField
					margin='dense'
					id='link'
					label='link'
					type='text'
					fullWidth
				/>

				{/* select category */}
				<FormControl className={classes.formControl}>
					<Select
						value={category}
						onChange={handleCategoryChange}
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

				{/* select skill level */}
				<FormControl className={classes.formControl}>
					<Select
						value={skill}
						onChange={handleSkillChange}
						displayEmpty
						className={classes.selectEmpty}
						inputProps={{ 'aria-label': 'Without label' }}
					>
						<MenuItem value='' disabled>
							Select Skill Level
						</MenuItem>
						<MenuItem value={'Beginner'}>Beginner</MenuItem>
						<MenuItem value={'Intermediate'}>Intermediate</MenuItem>
						<MenuItem value={'Expert'}>Expert</MenuItem>
					</Select>
					<FormHelperText>EX: Beginner</FormHelperText>
				</FormControl>
			</DialogContent>
		</div>
	);
}
