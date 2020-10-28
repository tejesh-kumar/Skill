import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NounSpeaker from '../images/noun_Speaker.svg';
import NounGroup from '../images/noun_group.svg';
import NounTraining from '../images/noun_training.svg';
import NounTime from '../images/noun_Time.svg';
import NotesIcon from '@material-ui/icons/Notes';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '7rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	left: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '1.6rem',
		color: theme.palette.text.blue,
		paddingLeft: '5rem',

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
	roundIcon: {
		height: '3.6rem',
		width: '3.6rem',
		backgroundColor: theme.palette.primary.main,
		marginLeft: '3.2rem',
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'& img': {
			height: '1.8rem',
			width: '1.8rem'
		}
	},
	linkStyle: {
		color: theme.palette.text.blue,
		textDecoration: 'none'
	}
}));

function HeaderBottom() {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth="xl" disableGutters={true}>
			<div className={classes.left}>
				<Link className={classes.linkStyle} to="/">
					<div>Home</div>
				</Link>
				<div>
					<img src={NounSpeaker} alt="arrow" />
				</div>
				<Link className={classes.linkStyle} to="/skill">
					<div>Skill Level</div>
				</Link>
			</div>
			<div className={classes.right}>
				<div className={classes.roundIcon}>
					<img src={NounSpeaker} alt="arrow" />
				</div>
				<div className={classes.roundIcon}>
					<img src={NounGroup} alt="arrow" />
				</div>
				<div className={classes.roundIcon}>
					<img src={NounTraining} alt="arrow" />
				</div>
				<div className={classes.roundIcon} style={{ backgroundColor: '#343A40' }}>
					<img src={NounTime} alt="arrow" />
				</div>
				<div
					className={classes.roundIcon}
					style={{
						backgroundColor: '#E7E9EF',
						borderRadius: 0,
						alignSelf: 'stretch',
						height: '7rem',
						width: '7rem'
					}}
				>
					<NotesIcon fontSize="large" />
				</div>
			</div>
		</Container>
	);
}

export default HeaderBottom;
