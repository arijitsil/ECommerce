import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import ImageList from './ImageList'
import CircularProgress from '@material-ui/core/CircularProgress';
import APP_CONSTANT from '../constants'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
var pricingLevel = [
    {"text": "Pocket Friendly", "value" : 1},
    {"text": "Budget", "value" : 2},
    {"text": "Expensive", "value" : 3},
    {"text": "Premium", "value" : 4}
   
]
export class RestaurantBasicDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values} = this.props;
        return (
                //<form className={this.props.utility.classes.form1} onSubmit={this.props.onFormSubmit} style={{width:'80%'}}>
               
                    <React.Fragment>
                        {values.loading ? 
                        <React.Fragment>
                        <Container style={{border: "1px solid darkcyan", marginTop: '10px', padding : '20px'}}>
                        <Typography component="h1" variant="h5">
                        {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestBasic}
                        </Typography>
                            <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="rest_name"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.RestName}
                                name="rest_name"
                                autoComplete="rest_name"
                                autoFocus
                                value = {values.rest_name || ''}
                                onChange = {this.props.onChange}
                            />
                            <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.RestEmailAddress}
                                name="email"
                                autoComplete="email"
                                
                                value = {values.email_address || ''}
                                onChange = {this.props.onChange}
                            />
                             <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.ContactNumber}
                                name="phone"
                                autoComplete="phone"
                                
                                value = {values.phone_number || ''}
                                onChange = {this.props.onChange}
                            />
                            <Autocomplete
                            className={this.props.utility.classes.autoComplete}
                            id="combo-pricing"
                            options={pricingLevel}
                            value = {values.pricingLevelSelectedValue}
                            getOptionLabel={(option) => option.text}
                            onChange={this.props.onChangePricingLevel}
                            name="pricinglevel"
                            style={{ width: 300 }}
                            onInputChange ={this.props.onInputChange}
                            getOptionSelected={(option, value) => {
                                return option.text === value.text;
                            }}
                            renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.RestBasic.PricingLevel} variant="outlined"  />}
                          />
                            <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lat"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.RestaurantLatitude}
                                name="lat"
                                autoComplete="lat"
                                
                                value = {values.lat || ''}
                                onChange = {this.props.onChange}
                            />
                            <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="long"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.RestaurantLongitude}
                                name="long"
                                autoComplete="long"
                                
                                value = {values.long || ''}
                                onChange = {this.props.onChange}
                            />
                            <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="paymentmode"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.Payment}
                                name="paymentmode"
                                autoComplete="paymentmode"
                                
                                value = {values.paymentmode || ''}
                                onChange = {this.props.onChange}
                            />
                             <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="spoken_languages"
                                label={APP_CONSTANT.APP_CONSTANTS.RestBasic.Spoken}
                                name="spoken_languages"
                                autoComplete="spoken_languages"
                                
                                value = {values.spoken_languages || ''}
                                onChange = {this.props.onChange}
                            />
                             <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                fullWidth
                                label ={APP_CONSTANT.APP_CONSTANTS.RestBasic.About}
                               name ='hubdesc'
                               value = {values.hubdesc || ''}
                               required
                               onChange = {this.props.onChange}
                            
                          />
                          <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                fullWidth
                                label ={APP_CONSTANT.APP_CONSTANTS.RestBasic.SpecialConditions}
                               name ='specialConditions'
                               value = {values.specialConditions || ''}
                               required
                               onChange = {this.props.onChange}
                            
                          />
                           <TextField style={{width:'80%'}}
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                fullWidth
                                label ={APP_CONSTANT.APP_CONSTANTS.RestBasic.Address}
                               name ='address'
                               value = {values.address || ''}
                               required
                               onChange = {this.props.onChange}
                            
                          />
                          </Container>
                          <Container style={{border: "1px solid darkcyan", marginTop: '10px', padding : '20px'}}>
                        <Typography component="h1" variant="h5">
                            {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestLocDetails}
                        </Typography>
                           <Autocomplete
                            className={this.props.utility.classes.autoComplete}
                            id="combo-box-location"
                            options={values.locations}
                            value = {values.locationSelectedValue}
                            getOptionLabel={(option) => option.name}
                            onChange={this.props.onChangeSelect}
                            name="location"
                            style={{ width: 300 }}
                            onInputChange ={this.props.onInputChange}
                            getOptionSelected={(option, value) => {
                                return option.name === value.name;
                            }}
                            renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.RestBasic.RestLoc} variant="outlined"  />}
                          />
        
                          <Autocomplete
                            className={this.props.utility.classes.autoComplete}
                            id="combo-box-sublocation"
                            options={values.sublocations}
                            value = {values.sublocationsSelectedValue}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 300 }}
                            key = {values.key}
                            onChange = {this.props.onChangeSubLocationSelect}
                            getOptionSelected={(option, value) => {
                                return option.name === value.name;
                            }}
                            renderInput={(params) => <TextField {...params} name="sublocation" label={APP_CONSTANT.APP_CONSTANTS.RestBasic.SubLocationName} variant="outlined"  onChange = {this.onChange} />}
                          />
                           <Autocomplete
                            className={this.props.utility.classes.autoComplete}
                            id="combo-box-hubs"
                            options={values.hubs}
                            required
                            value = {values.hubsSelectedValue}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 300 }}
                            key = {values.keyhub}
                            onChange = {this.props.onChangeHub}
                            getOptionSelected={(option, value) => {
                                return option.name === value.name;
                            }}
                            renderInput={(params) => <TextField {...params} name="hubname" label={APP_CONSTANT.APP_CONSTANTS.RestBasic.HubName} variant="outlined"  onChange = {this.onChange} />}
                          />
                          </Container>
                          <Container style={{border: "1px solid darkcyan", marginTop: '10px', padding : '20px'}}>
                        <Typography component="h1" variant="h5">
                           {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestCatDet}
                        </Typography>
                        <Autocomplete
                            multiple
                            className={this.props.utility.classes.autoComplete}
                            id="cuisines"
                            required
                            value ={values.cuisinesSubmitValue}
                            options={values.cuisines}
                            disableCloseOnSelect
                            onChange={this.props.onChangeCuisines}
                            getOptionLabel={(option) => option.name}
                            renderOption={(option, { selected,inputValue, value }) => (
                                <React.Fragment>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.name}
                                </React.Fragment>
                            )}
                            getOptionSelected={(option, value) => {
                               
                                    return option.name === value.name;
        
                                
                            }}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label={APP_CONSTANT.APP_CONSTANTS.RestBasic.Cusines} placeholder="Favorites" />
                            )}
                            />
                            <Autocomplete
                            multiple
                            className={this.props.utility.classes.autoComplete}
                            id="segments"
                            required
                            value ={values.segmentSubmitValue}
                            options={values.segments}
                            disableCloseOnSelect
                            onChange={this.props.onChangeSegment}
                            getOptionLabel={(option) => option.name}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.name}
                                </React.Fragment>
                            )}
                            getOptionSelected={(option, value) => {
                                return option.name === value.name;
                            }}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label={APP_CONSTANT.APP_CONSTANTS.RestBasic.RestaurantTypes} placeholder="Favorites" />
                            )}
                            />
                            <Autocomplete
                            className={this.props.utility.classes.autoComplete}
                            id="costtype"
                            required
                            options={values.costtypes}
                            value ={values.costTypeSubmitValue}
                            getOptionLabel={(option) => option.name}
                            onChange={this.props.onChangecostSelect}
                            name="costtype"
                            style={{ width: 300 }}
                            onInputChange ={this.onInputChange}
                            getOptionSelected={(option, value) => {
                                return option.name === value.name;
                            }}
                            renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.RestBasic.CostCategory} variant="outlined"  />}
                          />
                           <Autocomplete
                            className={this.props.utility.classes.autoComplete}
                            id="brand"
                            value ={values.brandSubmitValue}
                            options={values.brands}
                            getOptionLabel={(option) => option.name}
                            onChange={this.props.onChangebrandSelect}
                            name="brand"
                            style={{ width: 300 }}
                            onInputChange ={this.onInputChange}
                            getOptionSelected={(option, value) => {
                                if(typeof value !== 'undefined')
                                return option.name === value.name;
                            }}
                            renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.RestBasic.Brand} variant="outlined"  />}
                          />
                        </Container>
                            <input
                                accept="image/*"
                                name = "file"
                                className={this.props.utility.classes.input}
                                id="icon-button-photo"
                                onChange={this.props.onChange}
                                type="file"
                                multiple
                            />
                            <label htmlFor="icon-button-photo" className={this.props.utility.classes.label}>
                               {APP_CONSTANT.APP_CONSTANTS.RestBasic.ImageAdd} <IconButton color="primary" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            {
                            values.hasFile ? 
                            
                            <div style={{'display': 'flex','flexDirection':'column', 'marginBottom' : '10px'}}> 
                            <ImageList images={this.props.images}/>
                            {/* <img src={values.image} alt="recipe thumbnail"/> */}
                            </div>
                            
                            : 
                            null
                            }
                            <Button
                            onClick = {this.continue}
                            variant="contained"
                            color="primary"
                            style={{width: '20%'}}
                            className={this.props.utility.classes.submit}
                            >
                            {APP_CONSTANT.APP_CONSTANTS.RestBasic.Continue}
                            </Button>
                            </React.Fragment>
                        :
                        <React.Fragment>
                        <CircularProgress />
                            <CircularProgress color="secondary" />    
                            </React.Fragment>
                    }
                    
                    </React.Fragment>
               
                   // </form>
                 
            
        );
    }
}

export default RestaurantBasicDetails
