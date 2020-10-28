import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { AuthUser } from '../provider/AuthProvider';
import NounArrow from '../images/noun_Arrow.svg';
import NounQuestion from '../images/noun_Question.svg';
import NounNotification from '../images/noun_notification.svg';
import NounMenu from '../images/noun_menu.svg';
import ProfileImg from '../images/Image-80.png';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '7.2rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1.6rem 3rem',
		borderBottom: `2px solid ${theme.palette.tableOuterBackground}`
	},
	left: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '1.6rem',
		color: theme.palette.text.blue,

		'& img': {
			margin: '0 1.4rem',
			height: '8px',
			width: '4px'
		}
	},
	right: {
		display: 'flex',
		alignItems: 'center'
	},
	icon: {
		height: '2.8rem',
		width: '2.8rem',
		marginLeft: '4rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'& img': {
			height: 'inherit',
			width: '100%'
		}
	},
	profile: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '4rem'
	},
	profilePic: {
		height: '3.8rem',
		width: '3.8rem',

		'& img': {
			height: 'inherit',
			width: '100%',
			borderRadius: '50%'
		}
	},
	profileName: {
		fontSize: '2rem',
		marginLeft: '1.6rem'
	}
}));

function HeaderBottom() {
	const { inputs } = useContext(AuthUser);
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth="xl" disableGutters={true}>
			<div className={classes.left}>
				<div>
					<img src={NounArrow} alt="arrow" />
				</div>
				<div>LOGO</div>
			</div>
			<div className={classes.right}>
				<div className={classes.icon}>
					<img src={NounQuestion} alt="arrow" />
				</div>
				<div className={classes.icon}>
					<img src={NounNotification} alt="arrow" />
				</div>
				<div className={classes.icon}>
					<img src={NounMenu} alt="arrow" />
				</div>
				<div className={classes.profile}>
					<div className={classes.profilePic}>
						<img src={ProfileImg} alt="arrow" />
					</div>
					<div className={classes.profileName}>{inputs.username}</div>
				</div>
				<div className={classes.icon}>
					<ArrowDropDownIcon />
				</div>
			</div>
		</Container>
	);
}

export default HeaderBottom;
