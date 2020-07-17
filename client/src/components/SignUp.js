import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import API from '../api';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import APP_CONSTANT from '../constants'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
  });


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            email_errorText : '',
            email_error:false,
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
        API.post('/register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email : this.state.email,
            password : this.state.password
          })
          .then((response) => {
            console.log(response)
            if(response.data.success === false){
                this.setState({email_error : true, email_errorText: response.data.message})
            }else{
                alert(APP_CONSTANT.APP_CONSTANTS.SignUp.SuccessLog);
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
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {APP_CONSTANT.APP_CONSTANTS.SignUp.SignUp}
                </Typography>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label={APP_CONSTANT.APP_CONSTANTS.SignUp.FirstName}
                        autoFocus
                       
                        value={this.state.firstname}
                        onChange={this.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label={APP_CONSTANT.APP_CONSTANTS.SignUp.LastName}
                        name="lastName"
                        autoComplete="lname"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label={APP_CONSTANT.APP_CONSTANTS.SignUp.EmailAddress}
                        name="email"
                        autoComplete="email"
                        error ={this.state.email_error}
                        value={this.state.email}
                        helperText= {this.state.email_errorText}
                        onChange={this.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label={APP_CONSTANT.APP_CONSTANTS.SignUp.Password}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </Grid>
                   
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {APP_CONSTANT.APP_CONSTANTS.SignUp.SignUp}
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="../" variant="body2">
                      {APP_CONSTANT.APP_CONSTANTS.SignUp.SignIn}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Container>
          );
        }
    }
  


export default  withStyles(styles)(SignUp);