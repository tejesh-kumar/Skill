import React from 'react';
import { Container, Grid, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.secondary.main,
		fontSize: '1.8rem',
		marginBottom: '3rem'
	},
	inputStyle: {
		fontSize: '1.8rem',
		padding: '2rem 1.5rem',
		boxSizing: 'border-box',
		border: `1px solid ${theme.palette.inputBorder}`,
		width: '80%',
		boxShadow: `0px 3px 6px solid ${theme.palette.secondary.main}`,
		borderRadius: '6px'
		// backgroundColor: theme.palette.white
	},
	selectContainer: {
		display: 'block',
		marginBottom: '2rem'
	},
	select: {
		fontSize: '1.8rem',
		width: '80%',
		padding: '1rem',
		// boxSizing: 'border-box',
		border: `1px solid ${theme.palette.inputBorder}`,
		// width: '80%',
		boxShadow: `0px 3px 6px ${theme.palette.secondary.main}`,
		borderRadius: '6px',
		// backgroundColor: theme.palette.white,

		'&:focus': {
			outline: 'none',
			borderBottom: 0
		},
		'&:before': {
			borderBottom: 0
		},
		'&:after': {
			borderBottom: 0
		}
	},
	dropItem: {
		fontSize: '2rem',
		padding: '1rem 2rem',
		width: '100%'
	},
	'& option': {
		width: '100%',
		fontSize: '1.4rem'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

function TableFilter({ tableViewConfig, setTableViewConfig }) {
	const classes = useStyles();
	// const { tableView } = useContext(SkillContext);

	const handleChange = (e) => {
		if (e.target.name === 'filterProperty') {
			setTableViewConfig({
				...tableViewConfig,
				filter: { property: e.target.value, value: tableViewConfig.filter.value }
			});
		}
		if (e.target.name === 'filterValue') {
			setTableViewConfig({
				...tableViewConfig,
				filter: { property: tableViewConfig.filter.property, value: e.target.value }
			});
		}
		if (e.target.name === 'sortProperty') {
			setTableViewConfig({
				...tableViewConfig,
				sort: { property: e.target.value, value: tableViewConfig.sort.value }
			});
		}
		if (e.target.name === 'sortValue') {
			setTableViewConfig({
				...tableViewConfig,
				sort: { property: tableViewConfig.sort.property, value: e.target.value }
			});
		}
	};

	return (
		<Container className={classes.root} maxWidth="xl" spacing={3}>
			<Grid container>
				<Grid item container md={4} xs={12} alignItems="baseline">
					<Grid item md={4} xs={12}>
						<div className={classes.titleStyle}>Filter by Column</div>
					</Grid>
					<Grid className={classes.selectContainer} item md={8} xs={12}>
						<Select
							value={tableViewConfig.filter.property}
							onChange={handleChange}
							name="filterProperty"
							className={classes.select}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem className={classes.dropItem} value="none">
								None
							</MenuItem>
							<MenuItem className={classes.dropItem} value="levelCode">
								Level Code
							</MenuItem>
							<MenuItem className={classes.dropItem} value="levelName">
								Level Name
							</MenuItem>
							<MenuItem className={classes.dropItem} value="skillLevel">
								Skill Level
							</MenuItem>
							{/* <MenuItem className={classes.dropItem} value="active">
								Active
							</MenuItem> */}
						</Select>
					</Grid>
				</Grid>
				<Grid item container md={4} xs={12} alignItems="baseline">
					<Grid item md={4} xs={12}>
						<div className={classes.titleStyle}>Filter Value</div>
					</Grid>
					<Grid className={classes.selectContainer} item md={8} xs={12}>
						<input
							className={classes.inputStyle}
							type="text"
							name="filterValue"
							placeholder="Enter part of string"
							value={tableViewConfig.filter.value}
							onChange={handleChange}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid container>
				<Grid item container md={4} xs={12} alignItems="baseline">
					<Grid item md={4} xs={12}>
						<div className={classes.titleStyle}>Sort by Column</div>
					</Grid>
					<Grid className={classes.selectContainer} item md={8} xs={12}>
						<Select
							value={tableViewConfig.sort.property}
							onChange={handleChange}
							name="sortProperty"
							className={classes.select}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem className={classes.dropItem} value="none">
								None
							</MenuItem>
							<MenuItem className={classes.dropItem} value="levelCode">
								Level Code
							</MenuItem>
							<MenuItem className={classes.dropItem} value="levelName">
								Level Name
							</MenuItem>
							<MenuItem className={classes.dropItem} value="skillLevel">
								Skill Level
							</MenuItem>
						</Select>
					</Grid>
				</Grid>
				<Grid item container md={4} xs={12} alignItems="baseline">
					<Grid item md={4} xs={12}>
						<div className={classes.titleStyle}>Sort Type</div>
					</Grid>
					<Grid className={classes.selectContainer} item md={8} xs={12}>
						<Select
							value={tableViewConfig.sort.value}
							onChange={handleChange}
							name="sortValue"
							className={classes.select}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem className={classes.dropItem} value="ascending">
								Ascending
							</MenuItem>
							<MenuItem className={classes.dropItem} value="descending">
								Descending
							</MenuItem>
						</Select>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default TableFilter;
