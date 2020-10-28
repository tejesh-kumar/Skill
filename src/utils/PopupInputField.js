import React, { forwardRef } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// import { SkillContext } from '../provider/SkillProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		'& input': {
			boxSizing: 'border-box',
			fontSize: '1.8rem',
			padding: '1.5rem',
			opacity: 0.7,
			border: `0.5px solid ${theme.palette.addNewPopup.inputBorder}`,
			borderLeft: `5px solid ${theme.palette.addNewPopup.pink}`,
			borderRadius: '8px',
			width: '100%'
		}
	}
}));

function PopupInputField(props, ref) {
	const classes = useStyles();
	// const { currentSkill, setCurrentSkill } = useContext(SkillContext);

	// const fetchInputValue = (e) => {
	// 	console.log({ [props.name]: e.target.value });
	// 	// setCurrentSkill({ [name]: e.target.value });
	// };

	return (
		<Grid className={classes.root} item xs={6}>
			<input
				ref={ref}
				type="text"
				name={props.name}
				value={props.value}
				placeholder={props.placeholder}
				onChange={(e) => props.handleChange(e, props.name)}
			/>
		</Grid>
	);
}

export default forwardRef(PopupInputField);
