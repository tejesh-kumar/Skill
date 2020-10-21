import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// import Image from '../images/home/product2.jpg'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2rem 1rem',
		backgroundColor: theme.palette.tertiary.main,
		textAlign: 'center',
		boxShadow: '0 0.1rem 1rem #ddd'
	},
	imageStyle: {
		height: '12rem',

		'& img': {
			height: 'inherit',
			maxWidth: '100%'
		}
	},
	titleStyle: {
		fontSize: '1.4rem',
		color: theme.palette.text.primary,
		padding: '2rem 0.5rem 0 0.5rem',
		textTransform: 'capitalize'
		// textAlign: 'center'
	},
	priceStyle: {
		fontSize: '1.6rem',
		fontWeight: 600,
		color: theme.palette.text.secondary,
		padding: '1rem 0'
	},
	btn: {
		fontSize: '1.4rem',
		color: theme.palette.text.white
	}
}));

function ProductCard({ id, info, addToCartHandler }) {
	const classes = useStyles();
	const { title, img, price } = info;

	return (
		<Grid className={classes.root} item container direction="column" alignItems="center" justify="center">
			<Grid className={classes.imageStyle} item>
				<img src={img} alt="productImage" />
				{/* <img src={"https://images-na.ssl-images-amazon.com/images/I/514ETCdN3CL._SL1200_.jpg"} alt="productImage" /> */}
			</Grid>

			<Grid item>
				<Typography variant="body1" className={classes.titleStyle}>
					{title}
				</Typography>
			</Grid>

			<Grid item>
				<Typography variant="h2" className={classes.priceStyle}>
					₹<span>{price}</span>
				</Typography>
			</Grid>

			<Grid item>
				<Button
					color="primary"
					variant="contained"
					startIcon={<ShoppingCartIcon />}
					className={classes.btn}
					onClick={() => addToCartHandler(id)}
				>
					Add to cart
				</Button>
			</Grid>
		</Grid>
	);
}

export default ProductCard;
