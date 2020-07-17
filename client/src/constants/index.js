var langfile = require('../langauge/translate')
console.log(langfile)
var lang = null;
if(lang === null){
    var userlang = navigator.language || navigator.userLanguage;
    lang = userlang;
}
let APP_CONSTANTS;
if(lang === 'en' || lang === 'en-US'){
    APP_CONSTANTS = langfile.default.json[0].en;
}else{
    APP_CONSTANTS = langfile.default.json[0].ja;
}

const langConstants = {
    APP_CONSTANTS
 }

 export default langConstants

