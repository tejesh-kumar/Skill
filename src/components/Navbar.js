import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { firebaseAuth } from '../provider/AuthProvider';
import { Shop } from '../provider/ShopProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '1.5rem',
		color: theme.palette.text.white,
		backgroundColor: theme.palette.primary.main,
		height: '8rem',
		marginBottom: '4rem',
		display: 'flex',
		alignItems: 'center'
	},
	nav: {
		display: 'flex',
		alignItems: 'center'
	},
	navItem: {
		padding: '0 2rem',
		color: theme.palette.text.white,
		textDecoration: 'none',
		cursor: 'pointer'
	},
	icon: {
		fontSize: '1.6rem',
		width: '1.5rem',
		height: '1.5rem'
	}
}));

function Navbar() {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

	const classes = useStyles();
	const { handleSignout, loggedIn, setLoggedIn, setToken } = useContext(firebaseAuth);
    const { cart } = useContext(Shop);
    

    useEffect(() => {
        const updateLoggedIn = async () => {
            let token = await localStorage.getItem('token')
                console.log(token);
                    if(token === null) {
                        setLoggedIn(false)
                    }
                    else{
                        setLoggedIn(true)
                    }            
        }
        
        updateLoggedIn()
    }, [])

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Container>
				<Grid container justify="space-between" alignItems="center">
					<div className={classes.nav}>
						<NavLink to="/" className={classes.navItem}>
							<div>Home</div>
						</NavLink>
						<div className={classes.navItem}>About</div>
						<div className={classes.navItem}>Contact</div>
					</div>
					<div className={classes.nav}>
						<NavLink to="/cart" className={classes.navItem}>
							<IconButton aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<ShoppingCartIcon className={classes.icon} />
								</Badge>
							</IconButton>Cart
						</NavLink>

						{loggedIn === false ? (
							<NavLink to="/signin" className={classes.navItem}>
								<div>Login</div>
							</NavLink>
						) : (
							<div className={classes.navItem} onClick={handleSignout}>
								Logout
							</div>
						)}
					</div>
				</Grid>
			</Container>
		</Container>
	);
}

export default Navbar;

{
	/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>


<IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */
}
