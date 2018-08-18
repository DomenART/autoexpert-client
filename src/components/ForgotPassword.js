import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import VpnKeyIcon from '@material-ui/icons/VpnKeyOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const RegistrationLink = props => <Link to="/registration" {...props} />
const LoginLink = props => <Link to="/login" {...props} />

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        marginTop: theme.spacing.unit,
        width: '100%',
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: `${theme.spacing.unit * 2}px`
    }
})

function ForgotPassword(props) {
    const { classes } = props

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <VpnKeyIcon />
                    </Avatar>
                    <Typography variant="headline">Восстановление пароля</Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">E-mail:</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="raised"
                            color="primary"
                            className={classes.submit}
                        >
                            Отправить
                        </Button>
                    </form>
                    <div className={classes.footer}>
                        <Button size="small" color="primary" component={LoginLink}>
                            Вход
                        </Button>
                        <Button size="small" color="primary" component={RegistrationLink}>
                            Регистрация
                        </Button>
                    </div>
                </Paper>
            </main>
        </React.Fragment>
    )
}

ForgotPassword.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ForgotPassword)