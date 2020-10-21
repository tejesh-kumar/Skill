import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '3rem',
		backgroundColor: theme.palette.tertiary.main,
		// textAlign: 'center',
		boxShadow: '0 0.1rem 1rem #ddd',
		marginTop: '0.5rem'
	},
	totalStyle: {
		fontSize: '1.4rem',
		color: theme.palette.text.primary,
		padding: '0 1rem',
		textTransform: 'capitalize'
		// textAlign: 'center'
	},
	grandTotalStyle: {
		fontSize: '1.6rem',
		fontWeight: 600,
		color: theme.palette.text.secondary,
		padding: '1rem'
	},
	btn: {
		fontSize: '1.4rem',
		color: theme.palette.text.white
	}
}));

function CartTotal({ total }) {
	const classes = useStyles();

	return (
		<Grid className={classes.root} item container alignItems="flex-start" justify="center">
			<Grid item container justify="space-between">
				<Typography variant="body1" className={classes.totalStyle}>
					Total
				</Typography>

				<Typography variant="body1" className={classes.totalStyle}>
					₹<span>{total.subTotal}</span>
				</Typography>
			</Grid>

			<Grid item container justify="space-between">
				<Typography variant="h2" className={classes.totalStyle}>
					Tax 5%
				</Typography>

				<Typography variant="h2" className={classes.totalStyle}>
					Inclusive
				</Typography>
			</Grid>

			<Grid item container justify="space-between">
				<Typography variant="body1" className={classes.totalStyle}>
					Shipping Charges
				</Typography>
				<Typography variant="h2" className={classes.totalStyle}>
					₹<span>500</span>
				</Typography>
			</Grid>

			<Grid item container justify="space-between">
				<Typography variant="body1" className={classes.grandTotalStyle}>
					GrandTotal
				</Typography>
				<Typography variant="h2" className={classes.grandTotalStyle}>
					₹<span>{total.grandTotal}</span>
				</Typography>
			</Grid>

			<Grid item>
				<Button
					color="primary"
					variant="contained"
					className={classes.btn}
					//  onClick={() => removeFromCartHandler(id)}
				>
					Proceed To Checkout
				</Button>
			</Grid>
		</Grid>
	);
}

export default CartTotal;
