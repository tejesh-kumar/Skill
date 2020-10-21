import React, { useContext } from 'react';
import { Container, Grid } from '@material-ui/core';

import { firebaseAuth } from '../provider/AuthProvider';
import { Shop } from '../provider/ShopProvider';
import ProductCard from '../utils/ProductCard';

function Home() {
	const { handleSignout } = useContext(firebaseAuth);
	const { products, addToCartHandler } = useContext(Shop);

	console.log(products, 'products');

	// useEffect(() => {
	//     fetchProductsHandler()
	// }, [])

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid container item md={2}>
					<Grid container item>
						<img
							src="http://demo.posthemes.com/pos_picaboo/layout3/modules/postabproductslider/img/d9b2e5dc3f84a30993e34ef9184da4a3.jpg"
							style={{ justifyContent: 'center', maxWidth: '100%' }}
						/>
					</Grid>
				</Grid>
				<Grid container item md={10} spacing={1}>
					{Object.keys(products).length > 0 ? (
						Object.keys(products).map((key, keyIndex) => {
							return (
								<Grid key={key} item lg={3} sm={4} xs={6}>
									<ProductCard id={key} info={products[key]} addToCartHandler={addToCartHandler} />
								</Grid>
							);
						})
					) : null}
				</Grid>
			</Grid>
		</Container>
	);
}

export default Home;

// <div>
//     <h3>Hi, from home</h3>
//     <button onClick={handleSignout}>Logout</button>
// </div>
