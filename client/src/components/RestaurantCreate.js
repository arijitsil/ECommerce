import React, { Component } from 'react'
import API from '../api';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarApp from './AppBarApp'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RestaurantBasicDetails from './RestaurantBasicDetails'
import RestaurantHappyHours from'./RestaurantHappyHours'
import RecommendedMenu from './RecommendedMenu';
import OperatingHours from'./OperatingHours';
import RestaurantConfirmation from './RestuarantConfirmation'
import Resizer from 'react-image-file-resizer';
import axios from 'axios'
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
      },
      autoComplete :{
          marginTop : theme.spacing(3)
      }
  });


class RestaurantCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            rest_name : '',
            images:[],
            files:[],
            fileNames :[],
            image:null,
            file:null,
            hasFile: false,
            hubdesc: '',
            specialConditions : '',
            location : '',
            sublocation :'',
            locationsSublocations : [],
            locationSubLocationsHubs : [],
            locations : [],
            sublocations : [{"name": '', "id":''}],
            locationSelectedValue :[{"name": '', "id":''}],
            sublocationsSelectedValue :[{"name": '', "id":''}],
            hubs : [{"name": '', "id":''}],
            hubsSelectedValue : [{"name":'',"id" : ''}],
            cuisine : '',
            cuisines : [],
            segment : '',
            segments : [],
            hub :'',
            brand : '',
            brands : [],
            key : false,
            keyhub : 0,
            costtype : '',
            costtypes : [],

            cuisinesSubmitValue : [],
            segmentSubmitValue : [],
            locationSubmitValue : [],
            sublocationSubmitValue : [],
            hubSubmitValue : [],
            brandSubmitValue : [],
            costTypeSubmitValue : [],
            steps : 1,
            discountHours : [],
            discountValue : 0,
            seatValue : 1,
            discountHour : '',
            showDiscountText : false,
            showAddButton: false,
            menuitem : '',
            price: 0,
            recommendedMenus : [],
            operatingHours: [],
            mondayChecked : false,
            tuesdayChecked : false,
            wednesdayChecked : false,
            thursdayChecked : false,
            fridayChecked : false,
            saturdayChecked : false,
            sundayChecked : false,
            openhoursMonday : '',
            closehoursMonday : '',
            breakopenMonday : '',
            breakcloseMonday :'',
            openhoursTuesday : '',
            closehoursTuesday:'',
            breakopenTuesday :'',
            breakcloseTuesday :'',
            openhoursWed :'',
            closehoursWed :'',
            breakopenWed : '',
            breakcloseWed : '',
            openhoursThus : '',
            closehoursThus :'',
            breakopenThus :'',
            breakcloseThus : '',
            openhoursFri : '',
            closehoursFri : '',
            breakopenFri :'',
            breakcloseFri :'',
            openhoursSat : '',
            closehoursSat:'',
            breakopenSat : '',
            breakcloseSat :'',
            openhoursSun : '',
            closehoursSun :'',
            breakopenSun :'',
            breakcloseSun:'',
            loading : false,
            lat : '',
            long : '',
            paymentmode : '',
            spoken_languages : '',
            address : '',
            email_address : '',
            phone_number : '',
            pricing_level : '',
            pricingLevelSelectedValue : [{"text" : '', "value" : ''}],
            pricinglevels : [],

          };
          this.onFormSubmit = this.onFormSubmit.bind(this);
          this.onChange = this.onChange.bind(this);
          this.onChangeSelect = this.onChangeSelect.bind(this);
          this.onChangePricingLevel = this.onChangePricingLevel.bind(this);
          this.onChangeSubLocationSelect = this.onChangeSubLocationSelect.bind(this);
          this.onChangeCuisines = this.onChangeCuisines.bind(this);
          this.onChangeSegment = this.onChangeSegment.bind(this);
          this.onChangebrandSelect = this.onChangebrandSelect.bind(this);
          this.onChangecostSelect = this.onChangecostSelect.bind(this);
          this.onChangeHub = this.onChangeHub.bind(this);
          this.onChangediscounthours = this.onChangediscounthours.bind(this);
          this.onChangeDiscountText = this.onChangeDiscountText.bind(this);
          this.onChangeSeatValue = this.onChangeSeatValue.bind(this);
          this.addHappyHours = this.addHappyHours.bind(this);
          this.deleteHappyHours = this.deleteHappyHours.bind(this);
          this.onChangePrice= this.onChangePrice.bind(this);
          this.onChangeMenuItem = this.onChangeMenuItem.bind(this);
          this.addMenu = this.addMenu.bind(this);
          this.deleteMenu = this.deleteMenu.bind(this);
          this.mondayChecked = this.mondayChecked.bind(this);
          this.openhourMonday = this.openhourMonday.bind(this);
          this.closehoursMonday = this.closehoursMonday.bind(this);
          this.breakopenhourMonday = this.breakopenhourMonday.bind(this);
          this.breakclosehoursMonday = this.breakclosehoursMonday.bind(this);
          this.tuesdayChecked = this.tuesdayChecked.bind(this);
          this.openhourTuesday = this.openhourTuesday.bind(this);
          this.closehoursTuesday = this.closehoursTuesday.bind(this);
          this.breakopenhourTuesday = this.breakopenhourTuesday.bind(this);
          this.breakclosehoursTuesday = this.breakclosehoursTuesday.bind(this);
          this.wednesdayChecked= this.wednesdayChecked.bind(this);
          this.openhourWednesday = this.openhourWednesday.bind(this);
          this.closehoursWednesday = this.closehoursWednesday.bind(this);
          this.breakopenhourWednesday = this.breakopenhourWednesday.bind(this);
          this.breakclosehoursWednesday = this.breakclosehoursWednesday.bind(this);
          this.thursdayChecked = this.thursdayChecked.bind(this);
          this.openhourThursday = this.openhourThursday.bind(this);
          this.closehoursThursday = this.closehoursThursday.bind(this);
          this.breakopenhourThursdday = this.breakopenhourThursdday.bind(this);
          this.breakclosehoursThursday = this.breakclosehoursThursday.bind(this);
          this.fridayChecked = this.fridayChecked.bind(this);
          this.openhourFriday = this.openhourFriday.bind(this);
          this.closehoursFriday = this.closehoursFriday.bind(this);
          this.breakopenhourFriday= this.breakopenhourFriday.bind(this);
          this.breakclosehoursFriday= this.breakclosehoursFriday.bind(this);
          this.saturdayChecked= this.saturdayChecked.bind(this);
          this.openhoursSaturday= this.openhoursSaturday.bind(this);
          this.closehoursSaturday= this.closehoursSaturday.bind(this);
          this.breakopenhoursSaturday = this.breakopenhoursSaturday.bind(this);
          this.breakclosehoursSaturday= this.breakclosehoursSaturday.bind(this);
          this.sundayChecked= this.sundayChecked.bind(this);
          this.openhourSunday= this.openhourSunday.bind(this);
          this.closehoursSunday = this.closehoursSunday.bind(this);
          this.breakopenhourSunday = this.breakopenhourSunday.bind(this);
          this.breakclosehoursSunday = this.breakclosehoursSunday.bind(this);
          this.addOperatingHours = this.addOperatingHours.bind(this);
    }
    // Go to the next step
    nextStep = () => {
        const {steps} = this.state;
        this.setState({
            steps : steps + 1
        })
    }

    // Go to the prev step
    prevStep = () => {
        const {steps} = this.state;
        this.setState({
            steps : steps - 1
        })
    }

    onChangeHub(event,value){
        this.setState({hubsSelectedValue : value});
    }
    onChangePricingLevel(event,value){
        console.log(value);
        this.setState({pricingLevelSelectedValue : value})
    }
    onChangebrandSelect(event,value){
        this.setState({brandSubmitValue : value});
    }
    onChangecostSelect(event,value){
        this.setState({costTypeSubmitValue : value});
    }
    onChangeCuisines(event,value){
        this.setState({cuisinesSubmitValue : value});
    }
    onChangeSegment(event,value){

        this.setState({segmentSubmitValue : value});
    }

    onChangediscounthours(event,value){
        if(value != null){
            this.setState({showDiscountText : true,discountHour: value.time})
        }else{
            this.setState({discountHour:''})
        }
    }
    onChangePrice(event){
        if(event.target.value != null){
            this.setState({price:event.target.value})
        }else{
            this.setState({price : 0})
        }
    }
    onChangeMenuItem(event){
        if(event.target.value != null){
            this.setState({menuitem:event.target.value})
        }else{
            this.setState({menuitem : ''})
        }
    }

    onChangeDiscountText(event){
        if(event.target.value != null){
            this.setState({showAddButton : true,discountValue:event.target.value})
        }else{
            this.setState({showAddButton : false,discountValue:''})
        }
    }
    onChangeSeatValue(event){
        if(event.target.value != null){
            this.setState({seatValue:event.target.value})
        }else{
            this.setState({seatValue:1})
        }
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
             this.setState({location :'', sublocations :[{"name": '', "id":''}],locationSelectedValue:{"name": '', "id":''}, hubsSelectedValue:{"name": '', "id":''},sublocationsSelectedValue:{"name": '', "id":''},key : !this.state.key});
           }
    }
      onChangeSubLocationSelect(event,value){

       if(value !== null){
       
        var hubArray;
        for(var i=0;i<this.state.locationSubLocationsHubs.length;i++){
            console.log(this.state.locationSubLocationsHubs[i]);
            var name = this.state.locationSubLocationsHubs[i].subloc_name;
            if(name === value.name){
                console.log(this.state.locationSubLocationsHubs[i].hub);
                hubArray  = this.state.locationSubLocationsHubs[i].hub;
                
            }

        }
        if(this.state.sublocationsSelectedValue !== value){
            this.setState({sublocation : value.name, hubsSelectedValue:{"name": '', "id":''}, sublocationsSelectedValue: value,hubs:hubArray,keyhub : this.state.keyhub+1})
        }else{
            this.setState({sublocation : value.name, sublocationsSelectedValue: value,hubs:hubArray,keyhub : this.state.keyhub+1})
        }
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
            this.setState({sublocation : '',  hubsSelectedValue:{"name": '', "id":''},sublocationsSelectedValue: {"name": '', "id":''},sublocations :sublocationsArray, });
        }
    }


    async componentDidMount() {

        const hubs = API.get('/hubs');
        const cuisines = API.get('/menutypes');
        const segments = API.get('/segmenttypes');
        const brands = API.get('/brands');
        const costtype = API.get('/costtypes');

        axios.all([cuisines,segments,brands,costtype])
        .then(
            axios.spread((...responses) => {
                    const cuisines = responses[0].data;
                    const segments = responses[1].data;
                    const brands = responses[2].data;
                    const costtype = responses[3].data;
                    for(var i=0;i<cuisines.length;i++){
                        var sub_array = {}
                        Object.keys(cuisines[i]).forEach(function(key) {
                          if(key=="menu_type_name"){
                            sub_array["name"] = cuisines[i][key];
                          }else if(key=="menutype_id"){
                            sub_array["id"] = cuisines[i][key];
                          }
                        });
                        this.setState({cuisines : this.state.cuisines.concat(sub_array)})
                        //arr.push(sub_array)
                    }
                    for(var i=0;i<segments.length;i++){
                        var sub_array = {}
                        Object.keys(segments[i]).forEach(function(key) {
                          if(key=="segment_type_name"){
                            sub_array["name"] = segments[i][key];
                          }else if(key=="segment_type_id"){
                            sub_array["id"] = segments[i][key];
                          }
                        });
                        this.setState({segments : this.state.segments.concat(sub_array)})
                        //arr.push(sub_array)
                    }
                    for(var i=0;i<costtype.length;i++){
                        var sub_array = {}
                        Object.keys(costtype[i]).forEach(function(key) {
                          if(key=="cost_type_name"){
                            sub_array["name"] = costtype[i][key];
                          }else if(key=="cost_type_id"){
                            sub_array["id"] = costtype[i][key];
                          }
                        });
                        this.setState({costtypes : this.state.costtypes.concat(sub_array)})
                        //arr.push(sub_array)
                    }
                    for(var i=0;i<brands.length;i++){
                        var sub_array = {}
                        Object.keys(brands[i]).forEach(function(key) {
                          if(key=="brand_name"){
                            sub_array["name"] = brands[i][key];
                          }else if(key=="brand_id"){
                            sub_array["id"] = brands[i][key];
                          }
                        });
                        this.setState({brands : this.state.brands.concat(sub_array)})
                        //arr.push(sub_array)
                    }


            })

        ).catch(errors => {
                  // react on errors.
                  console.error(errors);
        });
        API.get('/location/sublocations').then(response => {
            var data = response.data;
           
            for(var i=0;i<data.length;i++){
              var sub_arrayLochub = [];
              var sub_arraywithsubloc = {}
              var sub_array = {}
              var sub_arraywithhub = {};
              Object.keys(data[i]).forEach(function(key) {
                if(key=="loc_name"){
                  sub_array["name"] = data[i][key];
                  sub_arraywithsubloc["name"] = data[i][key];
                }else if(key=="loc_id"){
                  sub_array["id"] = data[i][key];
                  sub_arraywithsubloc["id"] = data[i][key];
                }else if(key=="subloc"){
                  sub_arraywithsubloc["sublocation"] = data[i][key];
                  for(var j=0;j<data[i][key].length;j++){
                      sub_arrayLochub.push(data[i][key][j]);
                  }
                }
              }); 
              this.setState({locationSubLocationsHubs: this.state.locationSubLocationsHubs.concat(sub_arrayLochub),locationsSublocations: this.state.locationsSublocations.concat(sub_arraywithsubloc),locations : this.state.locations.concat(sub_array)})
              //arr.push(sub_array)
            }
            console.log(this.state.locations);
    
        });
        

        this.setState({loading : true})
      }
    addMenu(e){
        e.preventDefault();
        var menus = this.state.recommendedMenus;
        var alreadyHas = false;
        for(var i=0;i<menus.length;i++){
            var item = menus[i];
            if(item.menuitem == this.state.menuitem){
                alreadyHas = true;
            }
        }
        const recommendedMenu = {};
        if(alreadyHas){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.MenuItemAlreadyAdded);
        }else if(this.state.menuitem === null || this.state.menuitem === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.MenuItemNameError);
            return false;
        }else if(this.state.price=== null || this.state.price === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.MenuItemPriceError);
            return false;
        }else{
            recommendedMenu["menuitem"] = this.state.menuitem;
            recommendedMenu["price"] = this.state.price;

            this.setState({recommendedMenus : this.state.recommendedMenus.concat(recommendedMenu)})
        }
    }
    deleteMenu(e,value){
        this.setState(state => {
            const recommendedMenus = state.recommendedMenus.filter((item) => item.menuitem !== value);
            return {
                recommendedMenus,
            };
          });
    }
    deleteHappyHours(e, value){

        this.setState(state => {
            const discountHours = state.discountHours.filter((item) => item.DiscountHours !== value);
            return {
                discountHours,
            };
          });
    }


    addHappyHours(e){
        e.preventDefault();
        var discountedHours =  this.state.discountHours;
        console.log(discountedHours);
        var alreadyHas = false;
        for(var i=0;i<discountedHours.length;i++){
            var item = discountedHours[i];
            console.log(item);
            if(item.DiscountHours == this.state.discountHour){
                alreadyHas = true;
            }
        }
        const happyHoursArr = {};
        if(alreadyHas){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.DiscountHourAlreadyAdded);
        }else if(this.state.discountValue === null || this.state.discountValue === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.DiscountValueError);
            return false;
        }else if(this.state.discountHour=== null || this.state.discountHour === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.DiscountHourError);
            return false;
        }else if(this.state.seatValue === null || this.state.seatValue === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.DiscountSeatError);
        }else{
            happyHoursArr["DiscountHours"] = this.state.discountHour;
            happyHoursArr["DiscountValue"] = this.state.discountValue;
            happyHoursArr["SeatCount"] = this.state.seatValue;
            this.setState({discountHours : this.state.discountHours.concat(happyHoursArr)})
        }

    }

    onFormSubmit(e){
        e.preventDefault();
        if(this.state.locationSelectedValue.name === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.LocError);
            return false;
        }
        
        if(this.state.sublocationsSelectedValue.name === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.SubLocError);
            return false;
        }
        if(this.state.cuisinesSubmitValue.length == 0){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.CuisineError);
            return false;
        }

        if(this.state.segmentSubmitValue.length == 0){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.SegmentError);
            return false;
        }
        if(this.state.files.length === 0){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.ImageError);
            return false;
        }
        if(this.state.lat === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.LatError);
            return false;
        }
        if(this.state.long === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.LongError);
            return false;
        }
        if(this.state.rest_name.trim() === ''){
            alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.NameError);
            return false;
        }


        var cuisineId='';
        var segmentId='';
        var cuisineName = '';
        var segmentName ='';
        for(var i=0;i<this.state.cuisinesSubmitValue.length;i++){
            var value = this.state.cuisinesSubmitValue[i];
            if(cuisineId == ''){
                cuisineId = value.id
            }else{
                cuisineId = cuisineId + '|' + value.id;
            }

        }
        for(var i=0;i<this.state.cuisinesSubmitValue.length;i++){
            var value = this.state.cuisinesSubmitValue[i];
            if(cuisineName == ''){
                cuisineName = value.name
            }else{
                cuisineName = cuisineName + '|' + value.name;
            }

        }
        for(var i=0;i<this.state.segmentSubmitValue.length;i++){
            var value = this.state.segmentSubmitValue[i];
            if(segmentName == ''){
                segmentName = value.name
            }else{
                segmentName = segmentName + '|' + value.name;
            }
        }
        for(var i=0;i<this.state.segmentSubmitValue.length;i++){
            var value = this.state.segmentSubmitValue[i];
            if(segmentId == ''){
                segmentId = value.id
            }else{
                segmentId = segmentId + '|' + value.id;
            }
        }
        var operatinghours='';

        for(var i=0;i<this.state.operatingHours.length;i++){
            var weekday = this.state.operatingHours[i].weekday;
            var openfrom = this.state.operatingHours[i].openfrom;
            var opento = this.state.operatingHours[i].opento;
            var breakfrom = this.state.operatingHours[i].breakfrom;
            var breakto = this.state.operatingHours[i].breakto;
            var finalWeekdayString = weekday+"-"+openfrom+"-"+opento+"-"+breakfrom+"-"+breakto;
            if(operatinghours===''){
                if(i==this.state.operatingHours.length-1){
                    operatinghours = finalWeekdayString

                }else{
                    operatinghours = finalWeekdayString+"|";
                }
            }else{
                if(i==this.state.operatingHours.length-1){
                    operatinghours = operatinghours +  finalWeekdayString;
                }else{
                    operatinghours = operatinghours +  finalWeekdayString+"|";
                }
            }
        }
        var discountValues="";
        for(var i=0;i<this.state.discountHours.length;i++){
            var discountHour = this.state.discountHours[i].DiscountHours;
            var discountValue = this.state.discountHours[i].DiscountValue;
            var seatCout = this.state.discountHours[i].SeatCount;
            var finalString = discountHour + "-" + discountValue + '-' + seatCout;
            if(discountValues===''){
                if(i==this.state.discountHours.length-1){
                    discountValues = finalString

                }else{
                    discountValues = finalString+"|";
                }
            }else{
                if(i==this.state.discountHours.length-1){
                    discountValues = discountValues +  finalString;
                }else{
                    discountValues = discountValues +  finalString+"|";
                }
            }
        }
        var menus = "";
        for(var i=0;i<this.state.recommendedMenus.length;i++){
            var menuitem = this.state.recommendedMenus[i].menuitem;
            var itemprice = this.state.recommendedMenus[i].price;
            var finalString = menuitem + "-" +itemprice;
            if(menus===''){
                if(i==this.state.recommendedMenus.length-1){
                    menus = finalString

                }else{
                    menus = finalString+"|";
                }
            }else{
                if(i==this.state.recommendedMenus.length-1){
                    menus = menus +  finalString;
                }else{
                    menus = menus +  finalString+"|";
                }
            }
        }
        const formData = new FormData();
        console.log(this.state.fileNames)
        console.log(this.state.files)
        for(var i=0;i<this.state.files.length;i++){

            formData.append('images[]',this.state.files[i],this.state.fileNames[i]);
        }

        formData.append("address", this.state.address);
        formData.append('rest_name',this.state.rest_name);
        formData.append('lat', this.state.lat);
        formData.append('long', this.state.long);
        formData.append('paymentmode', this.state.paymentmode);
        formData.append('spokenlanguages', this.state.spoken_languages);
        formData.append('rest_desc',this.state.hubdesc);
        formData.append('rest_spec', this.state.specialConditions);
        formData.append('location', this.state.locationSelectedValue.name);
        formData.append('sublocation', this.state.sublocationsSelectedValue.name);
        formData.append('email', this.state.email_address);
        formData.append('phone', this.state.phone_number);
        formData.append('pricing_level', this.state.pricingLevelSelectedValue.value)
        formData.append('pricing_level_text', this.state.pricingLevelSelectedValue.text)
        //formData.append('location', this.state.locationSubmitValue.name);
        formData.append('locationid', this.state.locationSelectedValue.id);
        //formData.append('sublocation', this.state.sublocationSubmitValue.name);
        formData.append('sublocationid', this.state.sublocationsSelectedValue.id);
        formData.append('hub', this.state.hubsSelectedValue.name);
        formData.append('hubid', this.state.hubsSelectedValue.id);
        formData.append('cuisine',cuisineId);
        formData.append('segment',segmentId);
        formData.append('cuisinename',cuisineName);
        formData.append('segmentname',segmentName);
        formData.append('costtype', this.state.costTypeSubmitValue.name);
        formData.append('costtypeid', this.state.costTypeSubmitValue.id);
        formData.append('operatinghours',operatinghours);
        formData.append('happyhours',discountValues);
        formData.append('menu', menus);
        if(this.state.brandSubmitValue != null){
            formData.append('brandtype', this.state.brandSubmitValue.name);
            formData.append('brandtypeid', this.state.brandSubmitValue.id);
        }

        //formData.append('hub_d1esc', this.state.hubdesc);
        const config = {
            headers: {
                'content-type': 'multipart/form-data;boundary="----arbitrary boundary"',
                'authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
            }
        };
        API.post("/restaurant/create",formData,config)
            .then((response) => {
                alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.RestSuccess);
            }).catch((error) => {
                console.log(error)
        });
    }
    onChange(e) {
        var target = e.target;
        var targetName = target.name;

        if(targetName === "rest_name"){
            this.setState({rest_name:e.target.value});
        }else if(targetName === "hubdesc"){
          this.setState({hubdesc:e.target.value});
        }else if(targetName === "specialConditions"){
            this.setState({specialConditions : e.target.value})
        }else if(targetName === "lat"){
            this.setState({lat : e.target.value})
        }else if(targetName === "long"){
            this.setState({long : e.target.value})
        }else if(targetName === "paymentmode"){
            this.setState({paymentmode : e.target.value})
        }else if(targetName === "spoken_languages"){
            this.setState({spoken_languages : e.target.value})
        }else if(targetName === "address"){
            this.setState({address : e.target.value})
        }else if(targetName === "email"){
            this.setState({email_address : e.target.value})
        }else if(targetName === "phone"){
            this.setState({phone_number : e.target.value})
        }else{
            e.preventDefault();
            if(Array.from(e.target.files).length>5){

                alert(APP_CONSTANT.APP_CONSTANTS.RestCreate.ImageSizeError);
            }else{
                var fileNameArray = []
                for(var i=0;i<Array.from(e.target.files).length;i++){
                    var fileName = e.target.files[i].name;
                    fileNameArray.push(fileName);
                }
                this.setState({fileNames : fileNameArray})
                for(var i=0;i<Array.from(e.target.files).length;i++){


                    Resizer.imageFileResizer(

                        e.target.files[i],
                        345,
                        200,
                        'JPEG',
                        100,
                        0,
                        uri => {
                            this.setState(state => {
                                const images = state.images.concat(URL.createObjectURL(uri));
                                const files = state.files.concat(uri);
                                return {
                                    images,
                                    files,
                                    hasFile: true
                                }
                            })

                        },
                        'blob'
                    ) ;
                }
            }
        }

    }
    addOperatingHours(e){
        var operatingHoursArr = [];
        if(this.state.mondayChecked){
            var weekday = {};
            weekday["weekday"] = "Monday";
            weekday["openfrom"] =this.state.openhoursMonday
            weekday["opento"] = this.state.closehoursMonday
            weekday["breakfrom"] = this.state.breakopenMonday
            weekday["breakto"] =this.state.breakcloseMonday
            operatingHoursArr.push(weekday)
        }

        if(this.state.tuesdayChecked){
            var weekday = {};
            weekday["weekday"] = "Tuesday";
            weekday["openfrom"] =this.state.openhoursTuesday
            weekday["opento"] = this.state.closehoursTuesday
            weekday["breakfrom"] = this.state.breakopenTuesday
            weekday["breakto"] =this.state.breakcloseTuesday
            operatingHoursArr.push(weekday)
        }

        if(this.state.wednesdayChecked){
            var weekday = {};
            weekday["weekday"] = "Wednesday";
            weekday["openfrom"] =this.state.openhoursWed
            weekday["opento"] = this.state.closehoursWed
            weekday["breakfrom"] = this.state.breakopenWed
            weekday["breakto"] =this.state.breakcloseWed
            operatingHoursArr.push(weekday)
        }

        if(this.state.thursdayChecked){
            var weekday = {};
            weekday["weekday"] = "Thursday";
            weekday["openfrom"] =this.state.openhoursThus
            weekday["opento"] = this.state.closehoursThus
            weekday["breakfrom"] = this.state.breakopenThus
            weekday["breakto"] =this.state.breakcloseThus
            operatingHoursArr.push(weekday)
        }
        if(this.state.fridayChecked){
            var weekday = {};
            weekday["weekday"] = "Friday";
            weekday["openfrom"] =this.state.openhoursFri
            weekday["opento"] = this.state.closehoursFri
            weekday["breakfrom"] = this.state.breakopenFri
            weekday["breakto"] =this.state.breakcloseFri
            operatingHoursArr.push(weekday)
        }
        if(this.state.saturdayChecked){
            var weekday = {};
            weekday["weekday"] = "Saturday";
            weekday["openfrom"] =this.state.openhoursSat
            weekday["opento"] = this.state.closehoursSat
            weekday["breakfrom"] = this.state.breakopenSat
            weekday["breakto"] =this.state.breakcloseSat
            operatingHoursArr.push(weekday)
        }
        if(this.state.sundayChecked){
            var weekday = {};
            weekday["weekday"] = "Sunday";
            weekday["openfrom"] =this.state.openhoursSun
            weekday["opento"] = this.state.closehoursSun
            weekday["breakfrom"] = this.state.breakopenSun
            weekday["breakto"] =this.state.breakcloseSun
            operatingHoursArr.push(weekday)
        }
        this.setState({operatingHours : operatingHoursArr});
    }
    mondayChecked(e){
        this.setState({mondayChecked : !this.state.mondayChecked})
    }
    openhourMonday(event,value){
        this.setState({openhoursMonday: value.time})
    }
    closehoursMonday(e,value){
        this.setState({closehoursMonday: value.time})
    }
    breakopenhourMonday(e,value){
        this.setState({breakopenMonday : value.time})
    }
    breakclosehoursMonday(e,value){
        this.setState({breakcloseMonday : value.time})
    }
    tuesdayChecked(e){
        this.setState({tuesdayChecked : !this.state.tuesdayChecked})
    }
    openhourTuesday(e,value){
        this.setState({openhoursTuesday: value.time})
    }
    closehoursTuesday(e,value){
        this.setState({closehoursTuesday: value.time})
    }
    breakopenhourTuesday(e,value){
        this.setState({breakopenTuesday : value.time})
    }
    breakclosehoursTuesday(e,value){
        this.setState({breakcloseTuesday : value.time})
    }
    wednesdayChecked(e){
        this.setState({wednesdayChecked : !this.state.wednesdayChecked})
    }
    openhourWednesday(e,value){
        this.setState({openhoursWed : value.time})
    }
    closehoursWednesday(e,value){
        this.setState({closehoursWed : value.time})
    }
    breakopenhourWednesday(e,value){
        this.setState({breakopenWed : value.time})
    }
    breakclosehoursWednesday(e,value){
        this.setState({breakcloseWed : value.time})
    }
    thursdayChecked(e){
        this.setState({thursdayChecked : !this.state.thursdayChecked})
    }
    openhourThursday(e,value){
        this.setState({openhoursThus : value.time})
    }
    closehoursThursday(e,value){
        this.setState({closehoursThus : value.time})
    }
    breakopenhourThursdday(e,value){
        this.setState({breakopenThus : value.time})
    }
    breakclosehoursThursday(e,value){
        this.setState({breakcloseThus: value.time})
    }
    fridayChecked(e){
        this.setState({fridayChecked : !this.state.fridayChecked})
    }
    openhourFriday(e,value){
        this.setState({openhoursFri : value.time})
    }
    closehoursFriday(e,value){
        this.setState({closehoursFri : value.time})
    }
    breakopenhourFriday(e,value){
        this.setState({breakopenFri : value.time})
    }
    breakclosehoursFriday(e,value){
        this.setState({breakcloseFri : value.time})
    }
    saturdayChecked(e){
        this.setState({saturdayChecked : !this.state.saturdayChecked})
    }
    openhoursSaturday(e,value){
        this.setState({openhoursSat : value.time})
    }
    closehoursSaturday(e,value){
        this.setState({closehoursSat : value.time})
    }
    breakopenhoursSaturday(e,value){
        this.setState({breakopenSat : value.time})
    }
    breakclosehoursSaturday(e,value){
        this.setState({breakcloseSat : value.time})
    }
    sundayChecked(e){
        this.setState({sundayChecked : !this.state.sundayChecked})
    }
    openhourSunday(e,value){
        this.setState({openhoursSun : value.time})

    }
    closehoursSunday(e,value){
        this.setState({closehoursSun : value.time})
    }
    breakopenhourSunday(e,value){
        this.setState({breakopenSun : value.time})
    }
    breakclosehoursSunday(e,value){
        this.setState({breakcloseSun : value.time})
    }



    render() {
        const { classes } = this.props;
        const {steps} = this.state;
        const {images} = this.state;
        const {rest_name,image, file, hasFile,files,
             hubdesc, address,specialConditions ,location ,locationSelectedValue,sublocationsSelectedValue,hubsSelectedValue,
              sublocation ,locations, sublocations ,cuisine ,
              cuisines , segment ,segments ,hub ,hubs,brand, brands, key , keyhub , costtype ,costtypes ,
              cuisinesSubmitValue , segmentSubmitValue , locationSubmitValue , sublocationSubmitValue ,
              hubSubmitValue,brandSubmitValue,costTypeSubmitValue,discountHours,
              showDiscountText,showAddButton,discountHour,discountValue,seatValue,
              menuitem,price,recommendedMenus,
              openhoursMonday,closehoursMonday,breakopenMonday,breakcloseMonday,
              openhoursTuesday,closehoursTuesday, breakopenTuesday, breakcloseTuesday,
              openhoursWed,closehoursWed,breakopenWed,breakcloseWed,openhoursThus,
              closehoursThus,breakopenThus,breakcloseThus,openhoursFri,closehoursFri,
              breakopenFri,breakcloseFri, openhoursSat,closehoursSat,
              breakopenSat, breakcloseSat,openhoursSun,closehoursSun,
              breakopenSun , breakcloseSun,
              mondayChecked,tuesdayChecked,wednesdayChecked,thursdayChecked,
            fridayChecked, saturdayChecked,sundayChecked,operatingHours,loading,lat,long,paymentmode,spoken_languages,
            email_address,phone_number,pricingLevelSelectedValue,pricinglevels} = this.state;
        const values = { rest_name,image, file, hasFile,files,
            hubdesc, address,specialConditions ,location ,locationSelectedValue,sublocationsSelectedValue,hubsSelectedValue,
             sublocation ,locations, sublocations ,cuisine ,
             cuisines , segment ,segments ,hub ,hubs,brand, brands, key , keyhub , costtype ,costtypes ,
             cuisinesSubmitValue , segmentSubmitValue , locationSubmitValue , sublocationSubmitValue ,
             hubSubmitValue,brandSubmitValue,costTypeSubmitValue,discountHours,
             showDiscountText,showAddButton,discountHour,discountValue,seatValue,
             menuitem,price,recommendedMenus,openhoursMonday,closehoursMonday,breakopenMonday,breakcloseMonday,
             openhoursTuesday,closehoursTuesday, breakopenTuesday, breakcloseTuesday,
             openhoursWed,closehoursWed,breakopenWed,breakcloseWed,openhoursThus,
             closehoursThus,breakopenThus,breakcloseThus,openhoursFri,closehoursFri,
             breakopenFri,breakcloseFri, openhoursSat,closehoursSat,
             breakopenSat, breakcloseSat,openhoursSun,closehoursSun,
             breakopenSun , breakcloseSun,mondayChecked,tuesdayChecked,wednesdayChecked,thursdayChecked,
             fridayChecked, saturdayChecked,sundayChecked,operatingHours,loading,lat,long,paymentmode,spoken_languages,
             email_address,phone_number,pricingLevelSelectedValue,pricinglevels};
        const utility = {classes}

        switch(steps){
            case 1:
                return (
                    <div className={classes.root}>
                    <CssBaseline />
                    <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.RestCreate.Restaurant}/>
                    <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    <div className={classes.paper1} style={{width : '80%'}}>
                    <Typography component="h1" variant="h5">
                        {APP_CONSTANT.APP_CONSTANTS.RestCreate.CreateRest}
                    </Typography>
                    <RestaurantBasicDetails
                        nextStep = {this.nextStep}
                        onChange = {this.onChange}
                        onChangeSelect = {this.onChangeSelect}
                        onChangeSubLocationSelect = {this.onChangeSubLocationSelect}
                        onChangeCuisines = {this.onChangeCuisines}
                        onChangeSegment = {this.onChangeSegment}
                        onChangebrandSelect = {this.onChangebrandSelect}
                        onChangecostSelect = {this.onChangecostSelect}
                        onChangeHub = {this.onChangeHub}
                        onFormSubmit = {this.onFormSubmit}
                        onChangePricingLevel = {this.onChangePricingLevel}
                        values = {values}
                        utility = {utility}
                        images = {this.state.images}
                    />
                    </div>
                    </Grid>
                    </Container>
                    </main>

                    </div>
                )
            case 2:
                return(
                    <div className={classes.root}>
                    <CssBaseline />
                    <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.RestCreate.Restaurant}/>
                    <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    <div className={classes.paper1} style={{width : '80%'}}>
                    <Typography component="h1" variant="h5">
                        {APP_CONSTANT.APP_CONSTANTS.RestCreate.AddDiscointHours}
                    </Typography>
                    <RestaurantHappyHours
                        nextStep = {this.nextStep}
                        values = {values}
                        utility = {utility}
                        prevStep = {this.prevStep}
                        onChangediscounthours = {this.onChangediscounthours}
                        onChangeDiscountText = {this.onChangeDiscountText}
                        addHappyHours = {this.addHappyHours}
                        deleteHappyHours = {this.deleteHappyHours}

                        onChangeSeatValue = {this.onChangeSeatValue}
                    />
                    </div>
                    </Grid>
                    </Container>
                    </main>

                    </div>
                )
            case 3 :
                return (
                    <div className={classes.root}>
                    <CssBaseline />
                    <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.RestCreate.Restaurant}/>
                    <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    <div className={classes.paper1} style={{width : '80%'}}>
                    <Typography component="h1" variant="h5">
                        {APP_CONSTANT.APP_CONSTANTS.RestCreate.AddRecommendedMenu}
                    </Typography>
                    <RecommendedMenu
                        nextStep = {this.nextStep}
                        values = {values}
                        utility = {utility}
                        prevStep = {this.prevStep}
                        onChangeMenuItem = {this.onChangeMenuItem}
                        onChangePrice= {this.onChangePrice}
                        addMenu = {this.addMenu}
                        deleteMenu = {this.deleteMenu}
                    />
                    </div>
                    </Grid>
                    </Container>
                    </main>

                    </div>
                )
            case 4 :
                return (
                    <div className={classes.root}>
                    <CssBaseline />
                    <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.RestCreate.Restaurant}/>
                    <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    <div className={classes.paper1} style={{width : '80%'}}>
                    <Typography component="h1" variant="h5">
                        {APP_CONSTANT.APP_CONSTANTS.RestCreate.AddOpHours}
                    </Typography>
                    <OperatingHours
                        nextStep = {this.nextStep}
                        values = {values}
                        utility = {utility}
                        prevStep = {this.prevStep}
                        mondayChecked = {this.mondayChecked}
                        openhourMonday = {this.openhourMonday}
                        closehoursMonday = {this.closehoursMonday}
                        breakopenhourMonday = {this.breakopenhourMonday}
                        breakclosehoursMonday = {this.breakclosehoursMonday}
                        tuesdayChecked = {this.tuesdayChecked}
                        openhourTuesday = {this.openhourTuesday}
                        closehoursTuesday = {this.closehoursTuesday}
                        breakopenhourTuesday = {this.breakopenhourTuesday}
                        breakclosehoursTuesday = {this.breakclosehoursTuesday}
                        wednesdayChecked= {this.wednesdayChecked}
                        openhourWednesday = {this.openhourWednesday}
                        closehoursWednesday = {this.closehoursWednesday}
                        breakopenhourWednesday = {this.breakopenhourWednesday}
                        breakclosehoursWednesday = {this.breakclosehoursWednesday}
                        thursdayChecked = {this.thursdayChecked}
                        openhourThursday = {this.openhourThursday}
                        closehoursThursday = {this.closehoursThursday}
                        breakopenhourThursdday = {this.breakopenhourThursdday}
                        breakclosehoursThursday = {this.breakclosehoursThursday}
                        fridayChecked = {this.fridayChecked}
                        openhourFriday = {this.openhourFriday}
                        closehoursFriday = {this.closehoursFriday}
                        breakopenhourFriday= {this.breakopenhourFriday}
                        breakclosehoursFriday= {this.breakclosehoursFriday}
                        saturdayChecked= {this.saturdayChecked}
                        openhoursSaturday= {this.openhoursSaturday}
                        closehoursSaturday= {this.closehoursSaturday}
                        breakopenhoursSaturday = {this.breakopenhoursSaturday}
                        breakclosehoursSaturday= {this.breakclosehoursSaturday}
                        sundayChecked= {this.sundayChecked}
                        openhourSunday= {this.openhourSunday}
                        closehoursSunday = {this.closehoursSunday}
                        breakopenhourSunday = {this.breakopenhourSunday}
                        breakclosehoursSunday = {this.breakclosehoursSunday}
                        addOperatingHours = {this.addOperatingHours}
                    />
                    </div>
                    </Grid>
                    </Container>
                    </main>

                    </div>
                )
            case 5 :
                return (
                    <div className={classes.root}>
                    <CssBaseline />
                    <AppBarApp name={APP_CONSTANT.APP_CONSTANTS.RestCreate.Restaurant}/>
                    <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    <div className={classes.paper1} style={{width : '80%'}}>
                    <Typography component="h1" variant="h4" style={{alignSelf:'center', marginBottom : '30px'}}>
                        {APP_CONSTANT.APP_CONSTANTS.RestCreate.RestConfirm}
                    </Typography>
                    <RestaurantConfirmation
                        prevStep = {this.prevStep}
                        values = {values}
                        utility = {utility}
                        onFormSubmit = {this.onFormSubmit}
                    />
                    </div>
                    </Grid>
                    </Container>
                    </main>

                    </div>
                )
        }

    }
}

export default (withStyles(styles)(RestaurantCreate))
