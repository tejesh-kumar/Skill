import React, { useContext } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import SkillTable from './SkillTable';
import AddNewPopup from '../utils/Modal';
import { SkillContext } from '../provider/SkillProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		// height: '100vh',
		backgroundColor: theme.palette.secondary.main
	},
	title: {
		fontSize: '3.2rem',
		color: theme.palette.text.primary,
		textTransform: 'capitalize'
	},
	subTitle: {
		fontSize: '1.8rem',
		color: theme.palette.text.primary
	},
	skillMiddleContainer: {
		padding: '5.7rem 6.5rem'
	},
	headingContainer: {
		marginBottom: '5.2rem'
	},
	addNewBtn: {
		fontSize: '1.8rem',
		color: theme.palette.text.white,
		padding: '1.5rem 2.7rem',
		borderRadius: '0.8rem'
	}
}));

function Skill() {
	const classes = useStyles();

	const { handleModalOpen } = useContext(SkillContext);

	return (
		<Container className={classes.root} maxWidth="xl" disableGutters={true}>
			<HeaderTop />
			<HeaderBottom />
			<Grid className={classes.skillMiddleContainer} container>
				<Grid
					className={classes.headingContainer}
					item
					container
					justify="space-between"
					alignItems="flex-start"
				>
					<div>
						<div className={classes.title}>Skill Level</div>
						<div className={classes.subTitle}>
							Brief intro to the page functionality will be listed here.
						</div>
					</div>
					<div>
						<Button
							className={classes.addNewBtn}
							color="primary"
							variant="contained"
							onClick={handleModalOpen}
						>
							Add New
						</Button>
					</div>
				</Grid>

				<Grid className={classes.SkillTableContainer} container>
					<SkillTable />
				</Grid>
			</Grid>
			<AddNewPopup />
		</Container>
	);
}

export default Skill;
