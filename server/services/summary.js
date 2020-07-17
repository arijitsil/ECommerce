const Hubs = require('../models/Hubs');
const RestaurantMenuType = require('../models/RestaurantMenuType')
const Category = require('../models/Category')
const SegmentType = require('../models/SegmentType')
const Brand = require('../models/Brands')
const Image = require('../models/Images');
const CostType = require('../models/CostType')
const Restaurant = require('../models/Restaurant')
const { Op } = require("sequelize");
const Promotion = require("../models/Notification")
const moment = require('moment');

const getSummaryData = async(req) => {
    var data = req.query;
    var limit = 7;
    var offset = 0;
    var location = data.location;
    var sublocation = data.sublocation;
    var summaryJSON = [];

    

    var finalHubJson = {};
    finalHubJson["title"] ="Hub"
    finalHubJson["data"] = [];
   
    await Hubs.findAll({
        limit,
        offset,
        where : {
            location_name : location,
            sub_location_name : sublocation
        },
        order : [
            ['id', 'ASC']
        ]
    }).then(async response => {
        for(var i =0;i<response.length;i++){
             var hub = response[i];
             var json = {};
             json["name"] = hub.dataValues.hub_name;
             json["id"] = hub.dataValues.id;
             await Image.findOne({
                where : {
                    object_id : hub.dataValues.id,
                    object_type : 'Hub'
                }
            }).then(result => {
                json["imageURL"] = result.dataValues.imageURL;
            })
             if(hub.dataValues.restaurant_id == null){
                 json["restaurant_count"] = 0;
             }else{
                 json["restaurant_count"] = hub.dataValues.restaurant_id.length;
             }
             finalHubJson["data"].push(json);
        }
       return  finalHubJson["data"];
     
    });
    summaryJSON.push(finalHubJson);

     var finalMenuJson = {};
     finalMenuJson["title"] ="Cuisine"
     finalMenuJson["data"] = [];
    await RestaurantMenuType.findAll({
        limit,
        offset,
        order : [
            ['id', 'ASC']
        ]
    })
    .then(async response => {
        for(var i =0;i<response.length;i++){
            var menutype = response[i];
            var json = {};
            var menu_type = menutype.dataValues.menu_type;
            json["name"] = menutype.dataValues.menu_type;
            json["id"] = menutype.dataValues.id;
            await Image.findOne({
                where : {
                    object_id : menutype.dataValues.id,
                    object_type : 'MenuType'
                }
            }).then(result => {
                json["imageURL"] = result.dataValues.imageURL;
            })
            var rest_count = await Restaurant.count({
                where : {
                    rest_location : location, 
                    rest_sublocation : sublocation,
                    rest_cuisine_name : {[Op.contains] : [menu_type]}
                }
            });
            json["restaurant_count"] = rest_count;
            finalMenuJson["data"].push(json);
       }
      return finalMenuJson["data"];
      });
      summaryJSON.push(finalMenuJson);

      var finalBrandJson = {};
      finalBrandJson["title"] ="Brand"
      finalBrandJson["data"] = [];
      await Brand.findAll({
        limit,
        offset,
        order : [
            ['id', 'ASC']
        ]
      }).then(async response => {
        for(var i =0;i<response.length;i++){
            var brand = response[i];
            var json = {};
            json["name"] = brand.dataValues.brand_name;
            json["id"] = brand.dataValues.id;
            await Image.findOne({
                where : {
                    object_id : brand.dataValues.id,
                    object_type : 'Brand'
                }
            }).then(result => {
                json["imageURL"] = result.dataValues.imageURL;
            })
            var rest_count = await Restaurant.count({
                where : {
                    rest_location : location, 
                    rest_sublocation : sublocation,
                    rest_brand_name : brand.dataValues.brand_name
                }
            });
            json["restaurant_count"] = rest_count;
            // if(brand.dataValues.restaurant_id == null){
            //     json["restaurant_count"] = 0;
            // }else{
            //     json["restaurant_count"] = brand.dataValues.restaurant_id.length;
            // }
           
            finalBrandJson["data"].push(json);

       }
      return  finalBrandJson["data"];
      });
     
      summaryJSON.push(finalBrandJson);

      var finalCostCategoryJson = {};
      finalCostCategoryJson["title"] = "Pricing Category"
      finalCostCategoryJson["data"] = [];
      await CostType.findAll({
          limit,
          offset,
          order : [
            ['id', 'ASC']
          ]
      }).then(async response => {
        for(var i =0;i<response.length;i++){
            var costcategory = response[i];
            var json = {};
            json["name"] = costcategory.dataValues.cost_type;
            json["id"] = costcategory.dataValues.id;
            await Image.findOne({
                where : {
                    object_id : costcategory.dataValues.id,
                    object_type : 'CostType'
                }
            }).then(result => {
                json["imageURL"] = result.dataValues.imageURL;
            })
            var rest_count = await Restaurant.count({
                where : {
                    rest_location : location, 
                    rest_sublocation : sublocation,
                    rest_costType : costcategory.dataValues.cost_type
                }
            });
            json["restaurant_count"] = rest_count;
            finalCostCategoryJson["data"].push(json);
       }
      return finalCostCategoryJson["data"];
      });
      summaryJSON.push(finalCostCategoryJson);
      
      var finalCategoryJson = {};
      finalCategoryJson["title"] ="Catergories"
      finalCategoryJson["data"] = [];
      await Category.findAll({
        limit,
        offset,
        order : [
            ['id', 'ASC']
        ]
      }).then(async response => {
        for(var i =0;i<response.length;i++){
            var category = response[i];
            var json = {};
            json["name"] = category.dataValues.category_name;
            json["id"] = category.dataValues.id;
            await Image.findOne({
                where : {
                    object_id : category.dataValues.id,
                    object_type : 'OtherCategories'
                }
            }).then(result => {
                json["imageURL"] = result.dataValues.imageURL;
            })
            var rest_count = await Restaurant.count({
                where : {
                    rest_location : location, 
                    rest_sublocation : sublocation,
                    rest_brand_name : category.dataValues.category_name
                }
            });
            json["restaurant_count"] = rest_count;
            // if(category.dataValues.restaurant_id == null){
            //     json["restaurant_count"] = 0;
            // }else{
            //     json["restaurant_count"] = category.dataValues.restaurant_id.length;
            // }
            
            finalCategoryJson["data"].push(json);
       }
      return finalCategoryJson["data"];
      });
      summaryJSON.push(finalCategoryJson);

      var finalSegmentJson = {};
      finalSegmentJson["title"] ="Segment"
      finalSegmentJson["data"] = [];
      
      await SegmentType.findAll({
        limit,
        offset,
        order : [
            ['id', 'ASC']
        ]
      }).then(async response => {
        for(var i =0;i<response.length;i++){
            var segmenttype = response[i];
            var json = {};
            var segment_type = segmenttype.dataValues.segment_type;
            json["name"] = segmenttype.dataValues.segment_type;
            json["id"] = segmenttype.dataValues.id;
            await Image.findOne({
                where : {
                    object_id : segmenttype.dataValues.id,
                    object_type : 'Segment'
                }
            }).then(result => {
                json["imageURL"] = result.dataValues.imageURL;
            })
            var rest_count = await Restaurant.count({
                where : {
                    rest_location : location, 
                    rest_sublocation : sublocation,
                    rest_segment_name : {[Op.contains] : [segment_type]}
                }
            });
            json["restaurant_count"] = rest_count;
            // if(segmenttype.dataValues.restaurant_id == null){
            //     json["restaurant_count"] = 0;
            // }else{
            //     json["restaurant_count"] = segmenttype.dataValues.restaurant_id.length;
            // }
            finalSegmentJson["data"].push(json);
       }
      return  finalSegmentJson["data"];
      });
     summaryJSON.push(finalSegmentJson);

    return JSON.stringify(summaryJSON);
}

module.exports = {
    getSummaryData
}
