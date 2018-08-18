import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import CreateIcon from '@material-ui/icons/CreateOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import green from '@material-ui/core/colors/green'
import CircularProgress from '@material-ui/core/CircularProgress'
import { registerFetch, registerReset } from '../store/actions/register'

const LoginLink = props => <Link to="/login" {...props} />
const ForgotPasswordLink = props => <Link to="/forgot-password" {...props} />

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
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    position: 'relative'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: `${theme.spacing.unit * 2}px`
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

class Registration extends Component {
  // state = {
  //   processed: false
  // }

  componentWillUnmount() {
    this.props.registerReset()
  }

  render() {
    // const { processed } = this.state
    const { classes, registerFetch, isLoading, isSuccess } = this.props

    const buttonClassname = classNames({
      [classes.buttonSuccess]: isSuccess/* && processed*/
    })

    const onSubmit = (event) => {
      event.preventDefault()

      // this.setState({
      //   processed: true
      // })

      // console.log(event)

      registerFetch()
    }

    if (isSuccess/* && processed*/) {
      return <Redirect to='/login' />
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <CreateIcon />
            </Avatar>
            <Typography variant="headline">Регистрация</Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Имя:</InputLabel>
                <Input id="name" name="name" autoComplete="name" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">E-mail:</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Пароль:</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password_confirmation">Повторить пароль:</InputLabel>
                <Input
                  name="password_confirmation"
                  type="password"
                  id="password_confirmation"
                  autoComplete="current-password_confirmation"
                />
              </FormControl>
              <div className={classes.submit}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={buttonClassname}
                  disabled={isLoading}
                >
                  Зарегистрироваться
                </Button>
                {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </div>
            </form>
            <div className={classes.footer}>
              <Button size="small" color="primary" component={ForgotPasswordLink}>
                Забыли пароль?
              </Button>
              <Button size="small" color="primary" component={LoginLink}>
                Вход
              </Button>
            </div>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

// function Registration(props) {
// }

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  registerFetch: PropTypes.func.isRequired,
  registerReset: PropTypes.func.isRequired,
  // errors: PropTypes.array.isRequired
}

const mapStateToProps = ({ auth, register }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: register.isLoading,
  isSuccess: register.isSuccess,
  // errors: register.errors
})

export default connect(
  mapStateToProps,
  { registerFetch, registerReset }
)(withStyles(styles)(Registration))