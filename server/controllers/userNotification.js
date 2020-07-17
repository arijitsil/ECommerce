const UserNotificationService = require('../services/userNotification')

function getUserNotifcation(req,res){
    UserNotificationService.getNotification(req).then(data=> {
        res.send(data);
    })
}

function getNotificationUnReadCount(req,res){
    UserNotificationService.getNotificationUnReadCount(req).then(data=> {
        res.send(data);
    })
}
function updateNotificationRead(req,res){
    UserNotificationService.updateReadFlag(req).then(data=> {
        res.send(data);
    })
}

module.exports = {
    getUserNotifcation,
    getNotificationUnReadCount,
    updateNotificationRead
}