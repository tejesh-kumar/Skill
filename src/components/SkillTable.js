import React, { useEffect, useContext, useState, useRef } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import TableFilter from './TableFilter';
import TableRow from '../utils/TableRow';
import { SkillContext } from '../provider/SkillProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.secondary.main
	},
	tableOuter: {
		backgroundColor: theme.palette.tableOuterBackground,
		borderRadius: '0.8rem',
		padding: '3rem'
	},
	tableInner: {
		backgroundColor: theme.palette.white,
		borderRadius: '1rem',
		// height: '20rem',
		width: '100%'
	},
	pagination: {
		fontSize: '1.8rem',
		paddingTop: '2.4rem'
	},
	modifierGroup: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '3.2rem'
	},
	modifierLabel: {
		paddingRight: '1rem'
	},
	tableModifier: {
		border: 'none',
		backgroundColor: theme.palette.tertiary.main,
		borderRadius: '5px',
		fontSize: '1.8rem',
		padding: '1rem 1.8rem',
		cursor: 'pointer'
	},
	'& input': {
		width: '1.5rem',

		'& focus': {
			outline: 'none'
		}
	},
	'& select': {
		width: '3rem'
	}
}));

function SkillTable() {
	const classes = useStyles();
	const { skillList } = useContext(SkillContext);

	const [ editDeletePopupOpen, setEditDeletePopupOpen ] = useState(false);
	const [ chunkSkillList, setChunkSkillList ] = useState([]);
	const [ currentSkillList, setCurrentSkillList ] = useState([]);
	const [ tableViewConfig, setTableViewConfig ] = useState({
		pageNumber: 1,
		rows: 2,
		prevPage: 'disabled',
		nextPage: 2,
		filter: {
			property: 'none',
			value: ''
		},
		sort: {
			property: 'none',
			value: 'ascending'
		}
	});

	const pageNumberInputRef = useRef(tableViewConfig.pageNumber);

	console.log(skillList);
	console.log(chunkSkillList);
	console.log(currentSkillList);

	useEffect(
		() => {
			const handleTableView = () => {
				const tempSkillList = [ ...skillList ];

				// Filter the skill list
				let filteredArray = [];
				const filterCol = tableViewConfig.filter.property;
				const filterStr = tableViewConfig.filter.value;

				if (tableViewConfig.filter.property !== 'none') {
					filteredArray = tempSkillList.filter((sk) => sk[filterCol].includes(filterStr));
					console.log(filteredArray);
				} else {
					filteredArray = tempSkillList;
				}

				// Sort the filtered list

				let sortedFilteredArray = [];
				const sortCol = tableViewConfig.sort.property;

				if (tableViewConfig.sort.property !== 'none') {
					if (tableViewConfig.sort.value !== 'descending') {
						sortedFilteredArray = filteredArray.sort((a, b) => {
							console.log(a[sortCol] > b[sortCol]);
							if (a[sortCol] > b[sortCol]) {
								return 1;
							}
							if (a[sortCol] < b[sortCol]) {
								return -1;
							}
							return 0;
						});
					}

					if (tableViewConfig.sort.value !== 'ascending') {
						sortedFilteredArray = filteredArray.sort((a, b) => {
							console.log(a[sortCol] > b[sortCol]);
							if (a[sortCol] < b[sortCol]) {
								return 1;
							}
							if (a[sortCol] > b[sortCol]) {
								return -1;
							}
							return 0;
						});
					}
				} else {
					sortedFilteredArray = filteredArray;
				}

				console.log(sortedFilteredArray);

				// Split array into chunks
				const tempChunkSkillList = [];

				for (let i = 0; i < sortedFilteredArray.length; i++) {
					if (!(i % tableViewConfig.rows)) {
						const chunk = sortedFilteredArray.slice(i, i + tableViewConfig.rows);
						tempChunkSkillList.push(chunk);
					}
				}

				console.log(tempChunkSkillList);

				setChunkSkillList(tempChunkSkillList);
			};

			handleTableView();
		},
		[ skillList, tableViewConfig ]
	);

	useEffect(
		() => {
			const currentIndex = tableViewConfig.pageNumber - 1;
			const tempCurrentList = chunkSkillList[currentIndex];
			setCurrentSkillList(tempCurrentList);
		},
		[ chunkSkillList, tableViewConfig ]
	);

	return (
		<Container className={classes.root} maxWidth="xl" disableGutters={true}>
			<TableFilter tableViewConfig={tableViewConfig} setTableViewConfig={setTableViewConfig} />
			<Grid container>
				<Grid className={classes.tableOuter} item container xs={12}>
					<Grid className={classes.tableInner} item container>
						{
							<TableRow
								skill={{
									levelCode: 'Level Code',
									levelName: 'Level Name',
									active: 'Active',
									editDelete: 'editDelete'
								}}
							/>
						}

						{currentSkillList !== null && currentSkillList !== undefined ? (
							currentSkillList.map((skill) => <TableRow key={skill.id} skill={skill} />)
						) : null}
					</Grid>
					<Grid className={classes.pagination} item container justify="flex-end">
						<Grid item className={classes.modifierGroup}>
							<div className={classes.modifierLabel}>Go to page: </div>
							<div>
								<input
									className={classes.tableModifier}
									type="number"
									value={tableViewConfig.pageNumber}
									style={{ width: '1.5rem' }}
									ref={pageNumberInputRef}
									onChange={(e) =>
										setTableViewConfig({
											...tableViewConfig,
											pageNumber: parseInt(e.target.value)
										})}
								/>
							</div>
						</Grid>
						<Grid item className={classes.modifierGroup}>
							<div className={classes.modifierLabel}>Show Rows</div>
							<div>
								<select
									value={tableViewConfig.rows}
									className={classes.tableModifier}
									name="rows"
									id="rows"
									onChange={(e) =>
										setTableViewConfig({ ...tableViewConfig, rows: parseInt(e.target.value) })}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
						</Grid>
						<Grid className={classes.modifierGroup} item>
							1-4 of 4
						</Grid>
						<Grid item className={classes.modifierGroup}>
							<div
								className={classes.tableModifier}
								onClick={() =>
									setTableViewConfig({
										...tableViewConfig,
										pageNumber:
											parseInt(pageNumberInputRef.current.value) === 1
												? parseInt(pageNumberInputRef.current.value)
												: parseInt(pageNumberInputRef.current.value) - 1
									})}
							>
								<ArrowLeftIcon fontSize="large" />
							</div>
							<div
								className={classes.tableModifier}
								style={{ marginLeft: '1.5rem' }}
								onClick={() =>
									setTableViewConfig({
										...tableViewConfig,
										pageNumber:
											parseInt(pageNumberInputRef.current.value) *
												parseInt(tableViewConfig.rows) <
											skillList.length
												? parseInt(pageNumberInputRef.current.value) + 1
												: parseInt(pageNumberInputRef.current.value)
									})}
							>
								<ArrowRightIcon fontSize="large" />
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default SkillTable;
