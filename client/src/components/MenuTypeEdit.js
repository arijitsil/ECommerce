import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import API from '../api';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarApp from './AppBarApp'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Resizer from 'react-image-file-resizer';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter, Redirect} from 'react-router-dom'
import APP_CONSTANT from '../constants'

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
    paper1: {
        //marginTop: theme.spacing(8),
        display: 'flex',
        width:'50%',
        flexDirection: 'column',
        //alignItems: 'center',
      },
      avatar1: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form1: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit1: {
        margin: theme.spacing(3, 0, 2),
        display : 'flex'
      },
      input: {
        margin : theme.spacing(1),
        display: 'none'
    },
    label : {
      display:'block',
      margin: theme.spacing(2),
    },
    card: {
        maxWidth: 345,
        margin : theme.spacing(2)
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      textarea : {
        display: 'flex',
        width: 'inherit'
      }
  });


class MenuTypeEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            rest_type:'',
            images:null,
            file:null,
            hasFile: false,
            hubdesc: '',
            fileName : '',
            loading : false

          };
          this.onFormSubmit = this.onFormSubmit.bind(this);
          this.onChange = this.onChange.bind(this);
        
    }

    async componentDidMount(){
        var menuTypeId = this.props.match.params.id;
        var menutype_name;
        var imageURL;
        var filename;
        await API.get('/menutypedetails', {
            params: {
                id: menuTypeId,
              }
            })
          .then((response) => {
            var data = response.data[0];
            menutype_name = data.menu_name;
            imageURL = data.imageURL;
            filename = imageURL.substr(imageURL.lastIndexOf('/')+1,imageURL.length);
           
           
          });
          this.setState({
            rest_type : menutype_name,
            image : imageURL,
            fileName : filename,
            hasFile : true,
            loading : true
         })
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        if(this.state.file !== null){
          formData.append('image',this.state.file,this.state.fileName);
        }
        
        formData.append('menu_id', this.props.match.params.id);
        formData.append('menu_type',this.state.rest_type);
        //formData.append('hub_desc', this.state.hubdesc);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
            }
        };
        API.post("/menutype/edit",formData,config)
            .then((response) => {
              if(response.data === "A Cuisine already Exists with the name"){
                alert(APP_CONSTANT.APP_CONSTANTS.CuisineEdit.AlreadyExist)
                this.setState({success : false})
              }else{
                alert(APP_CONSTANT.APP_CONSTANTS.CuisineEdit.Success);
                this.setState({success : true})
              }
            }).catch((error) => {
                console.log(error)
        });
    }
    onChange(e) {
        var target = e.target;
        var targetName = target.name;
        console.log(targetName);
        if(targetName === "rest_type"){
            this.setState({rest_type:e.target.value});
        }else if(targetName == "hubdesc"){
          this.setState({hubdesc:e.target.value});
        
        }else{
            var filName = e.target.files[0].name;
            Resizer.imageFileResizer(
              e.target.files[0],
              345,
              200,
              'JPEG',
              100,
              0,
              uri => {
                this.setState({file:uri,image:URL.createObjectURL(uri), hasFile : true,fileName:filName});
              },
              'blob'
          ) ;
            //this.setState({file:e.target.files[0],image:URL.createObjectURL(e.target.files[0]), hasFile : true});
        }
       
    }
    handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        const name = target.accept.includes('image') ? 'images' : 'videos';
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            console.log(e.target.result)
            this.setState((prevState) => ({
                [name]: [...prevState[name], e.target.result]
            }));
        };
    };

 
    render() {
        if(this.state.success){
            return  <Redirect to= {{ pathname: "/cuisines" }} />
        }
        const { classes } = this.props;
        return (
            
            <div className={classes.root}>
                <CssBaseline />
                <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.CuisineEdit.Cuisine}/>
                {this.state.loading ? 
                <main className={classes.content}>
                 <div className={classes.appBarSpacer} />
                 <Container maxWidth="lg" className={classes.container}>
                 <Grid container spacing={3}>
                 <div className={classes.paper1}>
                 <Typography component="h1" variant="h5">
                    {APP_CONSTANT.APP_CONSTANTS.CuisineEdit.EditCuisine} : {this.state.rest_type}
                </Typography>
                <form className={classes.form1} onSubmit={this.onFormSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="rest_type"
                        label={APP_CONSTANT.APP_CONSTANTS.CuisineEdit.CuisineName}
                        name="rest_type"
                        autoComplete="rest_type"
                        autoFocus
                        value = {this.state.rest_type}
                        onChange = {this.onChange}
                    />
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label ={APP_CONSTANT.APP_CONSTANTS.CuisineEdit.CuisineDesc}
                       name ='hubdesc'
                       value = {this.state.hubdesc}
                       required
                       onChange = {this.onChange}
                    
                  />
                    <input
                        accept="image/*"
                        name = "file"
                        className={classes.input}
                        id="icon-button-photo"
                        onChange={this.onChange}
                        type="file"
                    />
                    <label htmlFor="icon-button-photo" className={classes.label}>
                        {APP_CONSTANT.APP_CONSTANTS.CuisineEdit.CuisineImage} <IconButton color="primary" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    {this.state.hasFile ? 
                    <div style={{'display': 'flex', 'marginBottom' : '10px'}}> 
                    <img src={this.state.image} alt="recipe thumbnail"/>
                    </div>
                    
                    : 
                    null
                    }
                    
                   
                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    {APP_CONSTANT.APP_CONSTANTS.CuisineEdit.Edit}
                    </Button>
                    </form>
                 </div>
               
               
                </Grid>
                </Container>
                </main>
                :  <React.Fragment>
                <CircularProgress />
                      
               </React.Fragment>
               }
            </div>
            
        );
    }
}

export default (withStyles(styles)(MenuTypeEdit))