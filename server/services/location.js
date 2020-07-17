var sequelize = require('../config/db');
const Location = require('../models/Location');
const SubLocation = require('../models/SubLocation');
const Hubs = require('../models/Hubs')
const createLocation = async(req) => {
    const body = req.body;
    let count = await Location.count({ where: { location_name: body.location_name } });
    if(count != 0){
        return "The location already Exists";
    }else{
        const locationValue = Location.build({ location_name: body.location_name });
        await locationValue.save();
        return "Location Created Successfully";
    }
      
}

const getLocationByName = async(location_name)=>{
    await Location.findOne({
        attributes : ['id'],
        where :{location_name : location_name}
    }).then(response => {
        if(response != null){
            return ("id",response.dataValues.id);
        }
        return ("id",0);
    }).catch(error =>{
        console.log(error);
        return ("id",0);
    })
}

const getLocation = async(req,res) => {

    let location_id;
    let finalJSON = [];
    
    await Location.findAll()
    .then(async response => {
        
        for(const location of response){
            let json = {};
            json["loc_name"] = location.dataValues.location_name;
            json["loc_id"] = location.dataValues.id;
            location_id = location.dataValues.id;
            json["subloc"] = []
            await SubLocation.findAll({
                where:{
                        location_id: location_id
                }
            }).then( async response => {
            
                for(var sublocation of response){
                    console.log(sublocation.dataValues.sub_location_name)
                    let subLocationJSON = {};
                    subLocationJSON["subloc_name"] = sublocation.dataValues.sub_location_name;
                    subLocationJSON["subloc_id"] = sublocation.dataValues.id;
                    subLocationJSON["hub"] = [];
                  
                    await Hubs.findAll({
                        where : { location_name : location.dataValues.location_name, sub_location_name : sublocation.dataValues.sub_location_name}
                    }).then(async response => {
                        for(var i =0;i<response.length;i++){
                            let hubJSON = {}
                            var hub = response[i];
                            hubJSON["name"] = hub.dataValues.hub_name;
                            hubJSON["id"] = hub.dataValues.id;
                            subLocationJSON["hub"].push(hubJSON);
                        }
                    });
                    json["subloc"].push(subLocationJSON);
                
                }
            });
            finalJSON.push(json);
        }
         return finalJSON;
       
    }).then(()=>{
        return JSON.stringify(finalJSON);
    });
    return JSON.stringify(finalJSON);
}

// Api call for Admin App while creating Restaurants
const getLocationList = async(req,res) => {

    let finalJSON = [];
    await Location.findAll()
    .then(async response => {
        response.every(async (location) => {
        let json = {};
        json["loc_name"] = location.dataValues.location_name;
        json["loc_id"] = location.dataValues.id;
        finalJSON.push(json)
        });
       return finalJSON
    });
    return JSON.stringify(finalJSON);

}

module.exports = {
    getLocation,
    createLocation,
    getLocationByName,
    getLocationList
}
