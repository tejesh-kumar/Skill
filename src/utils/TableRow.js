import React, { Fragment, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import EditDeletePopup from './EditDeletePopup';
// import OutsideAlerter from '../hoc/OutsideAlerter';

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid ${theme.palette.text.tertiary}`
	},
	rowLeftOuter: {
		width: '58%'
	},
	rowLeftOne: {
		backgroundColor: theme.palette.secondary.main,
		padding: '2.8rem 2.4rem',
		fontSize: '1.8rem'
	},
	rowRightOne: {
		backgroundColor: theme.palette.tertiary.main,
		padding: '2.8rem 2.4rem',
		fontSize: '1.8rem'
	},
	rowRightOuter: {
		width: '42%',
		backgroundColor: theme.palette.tertiary.main,
		textAlign: 'center'
	},
	moreIcon: {
		transform: 'RotateZ(90deg)',
		color: theme.palette.text.icon,
		fontSize: '2.5rem'
	},
	tick: {
		color: theme.palette.text.green,
		height: '1.6rem',
		width: '1.6rem'
	},
	cross: {
		color: theme.palette.text.red,
		height: '1.6rem',
		width: '1.6rem'
	}
}));

function TableRow({ skill }) {
	const classes = useStyles();
	const popupRef = useRef();

	const {
		id,
		levelCode = 'Level Code',
		levelName = 'Level Name',
		skillLevel = 'Skill Level',
		active = 'Active'
	} = skill;

	const togglePopupOpen = () => {
		popupRef.current.style.visibility = 'visible';
	};

	return (
		<Grid className={classes.root} container item>
			<Grid className={classes.rowLeftOuter} item container>
				<Grid className={classes.rowLeftOne} item xs={6}>
					{levelCode}
				</Grid>
				<Grid className={classes.rowRightOne} item xs={6}>
					{levelName}
				</Grid>
			</Grid>
			<Grid className={classes.rowRightOuter} item container>
				<Grid className={classes.rowLeftOne} item xs={4}>
					{skillLevel}
				</Grid>
				<Grid className={classes.rowRightOne} item xs={4}>
					{active ? <DoneIcon className={classes.tick} /> : <ClearIcon className={classes.cross} />}
				</Grid>
				<Grid
					className={classes.rowLeftOne}
					item
					xs={4}
					onClick={togglePopupOpen}
					style={{ position: 'relative' }}
				>
					<Fragment>
						<MoreVertIcon className={classes.moreIcon} />
						<EditDeletePopup ref={popupRef} id={id} />
					</Fragment>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default TableRow;
