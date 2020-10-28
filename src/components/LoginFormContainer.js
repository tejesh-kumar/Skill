import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import LoginForm from './LoginForm'

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.main,
        // border:
    },
    title: {
        fontSize: '3.6rem',
        marginBottom: '1.6rem',
        color: theme.palette.text.blue,
        textTransform: 'uppercase'
    },
    subTitle: {
        fontSize: '2.2rem',
        marginBottom: '4.9rem',
        color: theme.palette.text.secondary
    }
}))

function LoginFormContainer() {
    const classes = useStyles()

    return (
        <Container className={classes.root} disableGutters={true}>
            <Grid container direction="column">
              <div className={classes.title}>login app</div>
              <div className={classes.subTitle}>Enter your email address and password to Login</div>
              <div className={classes.inputGroup}><LoginForm /></div>
            </Grid>
        </Container>
    )
}

export default LoginFormContainer
