import React, { useContext, useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import { firebaseAuth } from '../provider/AuthProvider';
import { Shop } from '../provider/ShopProvider';
import CartItem from '../utils/CartItem';
import CartTotal from '../utils/CartTotal';

function Cart() {
	const { handleSignout } = useContext(firebaseAuth);
	const { products, cart, removeFromCartHandler } = useContext(Shop);

	const [ modifiedCartProducts, setModifiedCartProducts ] = useState([]);
	const [ total, setTotal ] = useState({ subTotal: 0, grandTotal: 0 });

	useEffect(
		() => {
			console.log(cart, products);
			if (cart === null || Object.keys(products).length === 0) {
				return undefined;
			} else {
				const tempModifiedCartProducts = [];
				cart.products.forEach((cp) => {
					Object.keys(products).forEach((key) => {
						if (cp.id == key) {
							products[key].id = key;
							products[key].qty = cp.qty;
							products[key].total = parseInt(products[key].qty) * parseInt(products[key].price);
							tempModifiedCartProducts.push(products[key]);
						}
					});
				});
				setModifiedCartProducts(tempModifiedCartProducts);
			}
		},
		[ products, cart ]
	);

	useEffect(
		() => {
			let tempTotal = 0;
			modifiedCartProducts.forEach((p) => {
				tempTotal = tempTotal + parseInt(p.total);
			});

			setTotal({ subTotal: tempTotal, grandTotal: parseInt(tempTotal) + 500 });
		},
		[ modifiedCartProducts ]
	);

	return (
		<Container>
			<Grid container spacing={3} justify="space-around">
				<Grid container item md={7}>
					{modifiedCartProducts.length > 0 ? (
						modifiedCartProducts.map((product) => (
							<CartItem key={product.id} cpInfo={product} removeFromCartHandler={removeFromCartHandler} />
						))
					) : (
						console.log(false)
					)}
				</Grid>
				<Grid container item md={4}>
					<CartTotal total={total} />
				</Grid>
			</Grid>
		</Container>
	);
}

export default Cart;
