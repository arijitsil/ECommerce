import React, { Component } from 'react'
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {Redirect } from 'react-router-dom'
import Resizer from 'react-image-file-resizer';
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
    autoComplete : {
      marginTop : theme.spacing(3)
    },
    card: {
        
        margin : theme.spacing(2)
      },
      media: {
        height: undefined,
        paddingTop: '56.25%', // 16:9
        aspectRatio: 135 / 76,
      },
      textarea : {
        display: 'flex',
        width: 'inherit'
      }
  });


class HubCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            hubName:'',
            images:null,
            fileName : '',
            image:null,
            file:null,
            hasFile: false,
            hubdesc: '',
            success : false,
            location : '',
            sublocation :'',
            locationsSublocations : [],
            locations : [{"name" :'', "id":''}],
            sublocations : [{"name": '', "id":''}],
            locationSelectedValue :[{"name": '', "id":''}],
            sublocationsSelectedValue :[{"name": '', "id":''}],
            key : false,
            loading : false

          };
          this.onFormSubmit = this.onFormSubmit.bind(this);
          this.onChange = this.onChange.bind(this);
          this.onChangeSelect = this.onChangeSelect.bind(this);
          this.onChangeSubLocationSelect = this.onChangeSubLocationSelect.bind(this);
         
    }
    onFormSubmit(e){
        e.preventDefault();
        
        if(this.state.locationSelectedValue.name === ''){
          alert(APP_CONSTANT.APP_CONSTANTS.HubCreate.LocNotAdded);
          return false;
        }
        
        if(this.state.sublocationsSelectedValue.name === ''){
          alert(APP_CONSTANT.APP_CONSTANTS.HubCreate.SubLocNotAdded);
          return false;
        }
        if(this.state.file === null){
          alert(APP_CONSTANT.APP_CONSTANTS.HubCreate.ImageNotAdded);
          return false;
        }
        const formData = new FormData();
        formData.append('image',this.state.file, this.state.fileName);
        formData.append('hub_name',this.state.hubName);
        formData.append('hub_desc', this.state.hubdesc);
        formData.append('location_name', this.state.locationSelectedValue.name);
        formData.append('sub_location_name', this.state.sublocationsSelectedValue.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
            }
        };
        API.post("/hub/create",formData,config)
            .then((response) => {
                if(response.data =="The Hub already Exists"){
                  alert(APP_CONSTANT.APP_CONSTANTS.HubCreate.AlreadyExists)
                  this.setState({success : false})
                }else{
                  alert(APP_CONSTANT.APP_CONSTANTS.HubCreate.Success);
                  this.setState({success : true})
                }
                
            }).catch((error) => {
              alert(error);
        });
    }

  

    onChangeSelect(event,value){
      if(value != null){
       const locName = value.name;
       var subloc;
       for(var i=0;i<this.state.locationsSublocations.length;i++){
         var name = this.state.locationsSublocations[i].name;
         if(name === locName){
           subloc = this.state.locationsSublocations[i].sublocation;
         }
        }
        this.setState({sublocations :[]});
        var sublocationsArray = [];
        for(var i=0;i<subloc.length;i++){
          var sub_array = {}
          Object.keys(subloc[i]).forEach(function(key) {
            if(key==="subloc_name"){
              sub_array["name"] = subloc[i][key];
            }else if(key==="subloc_id"){
              sub_array["id"] = subloc[i][key];
            }
          });
          sublocationsArray.push(sub_array);
        }
        this.setState({location :locName,locationSelectedValue : value,sublocations :sublocationsArray, sublocationsSelectedValue:{"name": '', "id":''}, key : !this.state.key});
      }else{
        this.setState({location :'', sublocations :[{"name": '', "id":''}],locationSelectedValue:{"name": '', "id":''}, sublocationsSelectedValue:{"name": '', "id":''},key : !this.state.key});
      }
     
      
    }

    onChangeSubLocationSelect(event,value){
      if(value != null){
        this.setState({sublocation : value.name, sublocationsSelectedValue: value});
      }else{
        var locationName = this.state.locationSelectedValue.name;
        var subloc;
       for(var i=0;i<this.state.locationsSublocations.length;i++){
         var name = this.state.locationsSublocations[i].name;
         if(name === locationName){
           subloc = this.state.locationsSublocations[i].sublocation;
         }
        }
        var sublocationsArray = [];
        for(var i=0;i<subloc.length;i++){
          var sub_array = {}
          Object.keys(subloc[i]).forEach(function(key) {
            if(key==="subloc_name"){
              sub_array["name"] = subloc[i][key];
            }else if(key==="subloc_id"){
              sub_array["id"] = subloc[i][key];
            }
          });
          sublocationsArray.push(sub_array);
        }
        this.setState({sublocation : '', sublocationsSelectedValue: {"name": '', "id":''},sublocations :sublocationsArray});
      }
      
    }
    onChange(e) {
        var target = e.target;
        var targetName = target.name;
        if(targetName === "hubName"){
            this.setState({hubName:e.target.value});
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
                    console.log(uri)
                    this.setState({file:uri,image:URL.createObjectURL(uri), hasFile : true, fileName:filName});
                  },
                  'blob'
              );
            console.log(e.target.files[0]);
            //this.setState({file:e.target.files[0],image:URL.createObjectURL(e.target.files[0]), hasFile : true});
        }
       
    }
    
    componentDidMount() {  

  
      const locations = API.get('/locations');
      API.get('/location/sublocations').then(response => { 
          var data = response.data;
         
          for(var i=0;i<data.length;i++){
            var sub_arraywithsubloc = {}
            var sub_array = {}
            Object.keys(data[i]).forEach(function(key) {
              if(key=="loc_name"){
                sub_array["name"] = data[i][key];
                sub_arraywithsubloc["name"] = data[i][key];
              }else if(key=="loc_id"){
                sub_array["id"] = data[i][key];
                sub_arraywithsubloc["id"] = data[i][key];
              }else if(key=="subloc"){
                sub_arraywithsubloc["sublocation"] = data[i][key];
              }
            }); 
            this.setState({locationsSublocations: this.state.locationsSublocations.concat(sub_arraywithsubloc),locations : this.state.locations.concat(sub_array)})
            //arr.push(sub_array)
          }
          console.log(this.state.locations);
  
      });  
  
    }  

 
    render() {
        const { classes } = this.props;
        return (
            
            <div className={classes.root}>
                {this.state.success ? <Redirect to= {{ pathname: "/hubs" }} /> : (null)}
                <CssBaseline />
                <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.HubCreate.Hubs}/>
                <main className={classes.content}>
                 <div className={classes.appBarSpacer} />
                 <Container maxWidth="lg" className={classes.container}>
                 <Grid container spacing={3}>
                 <div className={classes.paper1}>
                 <Typography component="h1" variant="h5">
                    {APP_CONSTANT.APP_CONSTANTS.HubCreate.CreateHub}
                </Typography>
                <form className={classes.form1} onSubmit={this.onFormSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="hubName"
                        label={APP_CONSTANT.APP_CONSTANTS.HubCreate.HubName}
                        name="hubName"
                        autoComplete="hubName"
                        autoFocus
                        value = {this.state.hubName}
                        required
                        onChange = {this.onChange}
                    />
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label ={APP_CONSTANT.APP_CONSTANTS.HubCreate.HubDesc}
                       name ='hubdesc'
                       value = {this.state.hubdesc}
                       required
                       onChange = {this.onChange}
                    
                  />
                  <Autocomplete
                    className={classes.autoComplete}
                    id="combo-box-location"
                        value ={this.state.locationSelectedValue}
                    options={this.state.locations}
                    getOptionLabel={(option) => option.name}
                    onChange={this.onChangeSelect}
                    name="location"
                    style={{ width: 300 }}
                    onInputChange ={this.onInputChange}
                        getOptionSelected={(option, value) => {   
                            return option.name === value.name;
                        }}
                        renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.HubCreate.HubLoc} variant="outlined"  />}
                        />

                  <Autocomplete
                    className={classes.autoComplete}
                    id="combo-box-sublocation"
                    options={this.state.sublocations}
                        value ={this.state.sublocationsSelectedValue}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    key = {this.state.key}
                    onChange = {this.onChangeSubLocationSelect}
                        getOptionSelected={(option, value) => {   
                            return option.name === value.name;
                        }}
                    renderInput={(params) => <TextField {...params} name="sublocation" label={APP_CONSTANT.APP_CONSTANTS.HubCreate.HubSubLoc} variant="outlined"  onChange = {this.onChange} />}
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
                        {APP_CONSTANT.APP_CONSTANTS.HubCreate.AddImage} <IconButton color="primary" component="span">
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
                    {APP_CONSTANT.APP_CONSTANTS.HubCreate.Create}
                    </Button>
                    </form>
                 </div>
               
               
                </Grid>
                </Container>
                </main>
                
            </div>
            
        );
    }
}

export default (withStyles(styles)(HubCreate))
