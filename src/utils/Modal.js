import React, { useEffect, useContext, useRef } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PopupInputField from './PopupInputField';
import { SkillContext } from '../provider/SkillProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '70rem',
		height: '30rem',
		padding: '4rem',
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.addNewPopup.backgroundColor,
		boxShadow: `0 3px 6px ${theme.palette.addNewPopup.boxShadow}`,
		borderRadius: '0.8rem',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)',
		fontSize: '1.8rem',
		display: 'none'
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'baseline'
	},
	title: {
		fontSize: '2.4rem',
		fontWeight: '500'
	},
	close: {
		padding: '2rem',
		cursor: 'pointer'
	},
	body: {
		paddingTop: '1.8rem'
	},
	footer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',

		'& div': {
			padding: '1rem 3rem'
		}
	},
	btn: {
		fontSize: '1.8rem',
		color: theme.palette.text.white,
		padding: '1.5rem 2.7rem',
		borderRadius: '0.8rem'
	},
	activeCheckbox: {
		fontSize: '1.8rem',
		cursor: 'pointer',

		'& label': {
			paddingLeft: '1.5rem'
		},
		'& input': {
			width: '2.2rem',
			height: '2.2rem'
		}
	}
}));

function Modal() {
	const classes = useStyles();
	const {
		modalOpen,
		handleModalOpen,
		handleAddNewSkill,
		handleCurrentSkillChange,
		currentEditSkill,
		setCurrentEditSkill
	} = useContext(SkillContext);

	const { id, levelCode, levelName, skillLevel, active } = currentEditSkill;

	const modalRef = useRef();
	const levelCodeRef = useRef();
	const levelNameRef = useRef();
	const skillLevelRef = useRef();
	const activeRef = useRef();

	const handleChange = (e) => {
		// handleCurrentSkillChange({ [name]: e.target.value });
		const { name, value } = e.target;
		console.log(currentEditSkill);
		setCurrentEditSkill((prev) => ({ ...prev, [name]: value }));
	};

	const saveSkill = () => {
		const newSkill = {
			levelCode: levelCodeRef.current.value,
			levelName: levelNameRef.current.value,
			skillLevel: skillLevelRef.current.value,
			active: activeRef.current.checked
		};

		handleAddNewSkill(newSkill);
		handleModalOpen(false);
	};

	useEffect(
		() => {
			if (modalOpen) {
				modalRef.current.style.display = 'block';
			} else {
				modalRef.current.style.display = 'none';
			}
		},
		[ modalOpen ]
	);

	return (
		<div className={classes.root} ref={modalRef}>
			<div className={classes.header}>
				<div className={classes.title}>Add New</div>
				<div className={classes.close} onClick={() => handleModalOpen(false)}>
					X
				</div>
			</div>
			<Grid container className={classes.body} spacing={4}>
				<PopupInputField
					placeholder="Level Code"
					name="levelCode"
					value={levelCode}
					ref={levelCodeRef}
					handleChange={handleChange}
				/>
				<PopupInputField
					placeholder="Level Name"
					name="levelName"
					value={levelName}
					ref={levelNameRef}
					handleChange={handleChange}
				/>
				<PopupInputField
					placeholder="Skill Level"
					name="skillLevel"
					value={skillLevel}
					ref={skillLevelRef}
					handleChange={handleChange}
				/>
				<Grid item container xs={6} className={classes.activeCheckbox} alignItems="center">
					<input
						type="checkbox"
						id="Active"
						name="checkbox"
						value="Car"
						defaultChecked={active}
						ref={activeRef}
					/>
					<label for="Active">Active</label>
				</Grid>
			</Grid>
			<div className={classes.footer}>
				<div className={classes.close} onClick={() => handleModalOpen(false)}>
					Cancel
				</div>

				<Button className={classes.btn} color="primary" variant="contained" onClick={saveSkill}>
					Save
				</Button>
			</div>
		</div>
	);
}

export default Modal;
