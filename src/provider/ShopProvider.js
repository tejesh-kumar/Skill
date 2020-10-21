import React, { useState, useEffect, useContext } from 'react';

import { firebaseAuth } from './AuthProvider';

export const Shop = React.createContext();

const ShopProvider = (props) => {
	const [ products, setProducts ] = useState({});
	const [ cart, setCart ] = useState(null);
	const [ userCartToken, setUserCartToken ] = useState(null);
	const [ errors, setErrors ] = useState('');

	let { token } = useContext(firebaseAuth);
	if (token === null) {
		token = 'default';
	}

	useEffect(() => {
		const fetchProductsHandler = async () => {
			await fetch('https://ecommerce-firebase-8f5f8.firebaseio.com/products.json')
				//     , {
				//     method: 'POST',
				//     headers: {
				//         'Content-Type': 'application/json',
				//         // 'Authorization': '858f0d32c05f88b6375b0d8dbd36b2e10f518738'
				//         // 'Authorization': TOKEN
				//         // Authorization: authHeader()
				//     },
				//     body: JSON.stringify({
				//         'title': 'Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)',
				//         'desc': 'Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera | 32MP (F2.2) front camera 16.4 centimeters (6.5-inch) super Amoled - Infinity-O display, FHD+ capacitive multi-touch touchscreen with 1080 x 2400 pixels resolution, 407 ppi pixel density and Contrast Ratio: 78960:1 Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G) Android v10.0 operating system with 1.7GHz+2.3GHz Exynos 9611 octa core processor 6000mAH lithium-ion battery with 5x fast charge | 25W Type-C fast charger in the box',
				//         'img': 'https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg',
				//         'price': 18499,
				//         'rating': 4.6
				//     })
				// })
				.then((res) => res.json())
				.then((res) => setProducts(res))
				.catch((err) => console.log(err));
		};

		fetchProductsHandler();
	}, []);

	useEffect(() => {
		let cartToken = JSON.parse(localStorage.getItem('cartToken'));

		if (cartToken === null) {
			cartToken = Math.floor(Math.random() * 60035762800);
			localStorage.setItem('cartToken', JSON.stringify(cartToken));
		}
		console.log(cartToken);
		setUserCartToken(cartToken);
	}, []);

	const addToCartHandler = async (productId) => {
		let cartData = {};
		console.log(cart, 'cart');
		if (cart === null) {
			cartData = { products: [ { id: productId, qty: 1 } ], userToken: token, cartToken: userCartToken };
		} else {
			const cartCopy = { ...cart };
			const cartProductsCopy = cartCopy.products;
			const matchingCartProductIndex = cartProductsCopy.findIndex((p) => p.id === productId);
			console.log(matchingCartProductIndex);
			if (matchingCartProductIndex === -1) {
				cartProductsCopy.push({ id: productId, qty: 1 });
			} else {
				cartProductsCopy[matchingCartProductIndex].qty++;
			}

			cartCopy.products = cartProductsCopy;
			cartData = cartCopy;
			console.log('cartData', cartData);
		}

		await fetch(`https://ecommerce-firebase-8f5f8.firebaseio.com/cart/${userCartToken}.json`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(cartData)
		})
			.then((res) => res.json())
			.then((res) => fetchCart())
			.catch((err) => console.log(err));
	};

	const removeFromCartHandler = async (productId) => {
		let cartData = {};
		console.log(cart, 'cart');

		const cartCopy = { ...cart };
		const cartProductsCopy = cartCopy.products;
		const matchingCartProductIndex = cartProductsCopy.findIndex((p) => p.id === productId);
		console.log(matchingCartProductIndex);

		cartProductsCopy.splice(matchingCartProductIndex, 1);

		cartCopy.products = cartProductsCopy;
		cartData = cartCopy;
		console.log('cartData', cartData);

		await fetch(`https://ecommerce-firebase-8f5f8.firebaseio.com/cart/${userCartToken}.json`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(cartData)
		})
			.then((res) => res.json())
			.then((res) => fetchCart())
			.catch((err) => console.log(err));
	};

	const fetchCart = async () => {
		await fetch(`https://ecommerce-firebase-8f5f8.firebaseio.com/cart/${userCartToken}.json`)
			.then((res) => res.json())
			.then((res) => {
				// const tempRes = res;
				// const cartKey = Object.keys(res).filter(cp => { if(res[cp].cartToken == userCartToken) {return tempRes[cp]}})
				// const userCart = res[cartKey[0]];
				// console.log(cartKey);
				// console.log(userCart, Object.keys(res), 'userCartToken');
				// const tempCart = {...cart}
				// tempCart.cartToken = userCartToken;
				// tempCart.userToken = token
				// tempCart.products = res[cartKey[0]].products
				// localStorage.setItem('cart', JSON.stringify(tempCart));
				// setCart(tempCart);

				// const tempCart = {
				//     ...res,
				//     userToken: token
				// }

				const tempCart = res;
				localStorage.setItem('cart', JSON.stringify(tempCart));
				setCart(tempCart);
			})
			.catch((err) => console.log(err));
	};

	useEffect(
		() => {
			if (userCartToken !== null) {
				fetchCart();
			}
		},
		[ userCartToken ]
	);

	return (
		<Shop.Provider
			value={{
				products,
				cart,
				// fetchProductsHandler,
				addToCartHandler,
				removeFromCartHandler,
				errors
			}}
		>
			{props.children}
		</Shop.Provider>
	);
};

export default ShopProvider;
