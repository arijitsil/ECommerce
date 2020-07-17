
const STATUS_MSG = {
    ERROR: {

        INVALID_PASSWORD: {
            statusCode: 400,
            success : false,
            customMessage: 'Password you have entered does not match.',
            type: 'INVALID_PASSWORD'
        },
        ALREADY_EXIST: {
            statusCode: 400,
            success : false,
            customMessage: 'Email address you have entered is already registered with us.',
            type: 'ALREADY_EXIST'
        },
        USERNAME_EXIST: {
            statusCode: 400,
            success : false,
            customMessage: 'User name you have entered is already taken.',
            type: 'USERNAME_EXIST'
        },
        PHONE_ALREADY_EXIST: {
            statusCode: 400,
            success : false,
            customMessage: 'Phone number you have entered is already registered with us.',
            type: 'PHONE_ALREADY_EXIST'
        },
        INVALID_EMAIL: {
            statusCode: 400,
            success : false,
            customMessage: 'The email address you have entered does not match.',
            type: 'INVALID_EMAIL'
        },
        NOT_REGISTER: {
            statusCode: 400,
            success : false,
            customMessage: 'You are not registered with us.kindly signup first.',
            type: 'NOT_REGISTER'
        },
        BLOCKED: {
            statusCode:400,
            success : false,
            customMessage : 'This account is blocked by Admin. Please contact support team to activate your account.',
            type : 'BLOCKED'
        },

    }
};

let APP_CONSTANTS = {
    STATUS_MSG: STATUS_MSG,
};

module.exports = APP_CONSTANTS;
