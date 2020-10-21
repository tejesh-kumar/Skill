import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2rem 1rem',
		backgroundColor: theme.palette.tertiary.main,
		// textAlign: 'center',
		boxShadow: '0 0.1rem 1rem #ddd',
		marginTop: '0.5rem'
	},
	imageStyle: {
		height: '12rem',
		textAlign: 'center',

		'& img': {
			height: 'inherit',
			maxWidth: '100%'
		}
	},
	titleStyle: {
		fontSize: '1.4rem',
		color: theme.palette.text.primary,
		padding: '0 1rem',
		textTransform: 'capitalize'
		// textAlign: 'center'
	},
	priceStyle: {
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

function CartItem({ cpInfo, removeFromCartHandler }) {
	const classes = useStyles();
	const { id, title, img, price, qty } = cpInfo;

	return (
		<Grid className={classes.root} item container alignItems="center" justify="center">
			<Grid className={classes.imageStyle} item md={4}>
				<img src={img} alt="productImage" />
				{/* <img src="https://images-na.ssl-images-amazon.com/images/I/81Ha%2BSI%2BQML._SL1500_.jpg" alt="productImage" /> */}
			</Grid>

			<Grid item md={8}>
				<Grid item>
					<Typography variant="body1" className={classes.titleStyle}>
						{title}
					</Typography>
				</Grid>

				<Grid item>
					<Typography variant="h2" className={classes.priceStyle}>
						Price: ₹<span>{price}</span>
					</Typography>
				</Grid>

				<Grid item>
					<Typography variant="body1" className={classes.titleStyle}>
						Quantity: {qty}
					</Typography>
				</Grid>

				<Grid item container justify="center">
					<Button
						color="primary"
						variant="contained"
						startIcon={<DeleteIcon />}
						className={classes.btn}
						onClick={() => removeFromCartHandler(id)}
					>
						Delete
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CartItem;
