import React, { useContext, forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';

import { SkillContext } from '../provider/SkillProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: 2,
		width: '15rem',
		position: 'absolute',
		top: '60%',
		left: '5rem',
		borderRadius: '8px',
		border: `1px solid ${theme.palette.addNewPopup.inputBorder}`,
		textAlign: 'left',
		visibility: 'hidden',
		cursor: 'pointer'
	},
	edit: {
		backgroundColor: theme.palette.secondary.main,
		height: '5rem',
		// paddingTop: '2rem',
		paddingLeft: '2.7rem',

		display: 'flex',
		alignItems: 'center'
	},
	delete: {
		backgroundColor: theme.palette.tertiary.main,
		height: '5rem',
		// paddingTop: '2rem',
		paddingLeft: '2.7rem',

		display: 'flex',
		alignItems: 'center'
	}
}));

function EditDeletePopup(props, ref) {
	const classes = useStyles();
	const { skillList, setSkillList, handleModalOpen, setCurrentEditSkill } = useContext(SkillContext);

	return (
		<div className={classes.root} ref={ref}>
			<div
				className={classes.edit}
				onClick={(e) => {
					const tempCurrentEditSkill = skillList.find((sk) => sk.id === props.id);
					console.log(props);
					console.log(tempCurrentEditSkill, 'tempCurrentEdit');
					// ref.current.style.visibility = 'hidden';
					setCurrentEditSkill(tempCurrentEditSkill);
					handleModalOpen();
				}}
			>
				Edit
			</div>
			<div
				className={classes.delete}
				onClick={(e) => {
					const updatedSkillList = skillList.filter((sk) => sk.id !== props.id);
					console.log(props);
					console.log(updatedSkillList, 'tempCurrentEdit');
					localStorage.setItem('skillList', JSON.stringify(updatedSkillList));
					setSkillList(updatedSkillList);
					alert('Skill deleted successfully');
				}}
			>
				Delete
			</div>
		</div>
	);
}

export default forwardRef(EditDeletePopup);
