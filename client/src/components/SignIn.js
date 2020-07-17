import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Redirect } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from '../api';
import loginAction from '../redux/login/loginActions'
import APP_CONSTANT from '../constants'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://happyawaiapi.herokuapp.com/">
        HappyAwa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
  });

  const ErrorBlock = styled.div`
  color : red;
`

const mapStateToProps = state => {
    return{
        isLoggedIn : state.loginReducer.isAuthUser
    }
}
const mapDispatchToProps = dispatch => {
    return{
        login : (user) => dispatch(loginAction.login(user))
        // isloggedIn : () => dispatch(loginAction.isLogin()),
        // displayLogin : () => dispatch(loginAction.loginClick()),
        // hasjwttoken : (user) => dispatch(loginAction.checkJWTToken(user))
    }
}
 class SignIn extends Component {

   constructor(props){
    super(props);
    this.state = {
        email:'',
        password:'',
        login_error_text : '',
        login_error:false,
        userBorderColor:null
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
    var target = event.target;
    var targetName = target.name;
    this.setState({[targetName]: event.target.value});
  }
  handleSubmit(event) {
       
    event.preventDefault();
    API.post('/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
          console.log(response);
        if(response.data.success === false){
            this.setState({login_error : true, login_error_text: response.data.message})
        }else{
            alert(APP_CONSTANT.APP_CONSTANTS.SignIn.SuccessLog);
            sessionStorage.setItem('jwtToken', response.data.data.token);
            this.props.login(response.data.data.user);
            //this.props.hasjwttoken(response.data.data.user);
           // this.props.displayLogin(); 
        }
        
      })
      .catch((error) => {
        console.log(error);
        
    })
  
}

   render(){
    const { classes } = this.props;
    return (
       
        <Container component="main" maxWidth="xs">
             {this.props.isLoggedIn ? <Redirect to= {{ pathname: "/home" }} /> : (null)}
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            {APP_CONSTANT.APP_CONSTANTS.SignIn.SignIn}
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label= {APP_CONSTANT.APP_CONSTANTS.SignIn.EmailAddress}
                name="email"
                autoComplete="email"
                autoFocus
                value = {this.state.email}
                onChange = {this.handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={APP_CONSTANT.APP_CONSTANTS.SignIn.Password}
                type="password"
                id="password"
                autoComplete="current-password"
                value = {this.state.password}
                onChange = {this.handleChange}
            />
           {this.state.login_error ? (
                <ErrorBlock>
                    {this.state.login_error_text}
                </ErrorBlock>
             ):(
            null
            )
            }
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {APP_CONSTANT.APP_CONSTANTS.SignIn.SignIn}
            </Button>
            <Grid container>
               
                <Grid item>
                <Link href="/user/register" variant="body2">
                  {APP_CONSTANT.APP_CONSTANTS.SignIn.SignUp}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
        </Container>
    );
    }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));