//some times we need custom errors.

module.exports = {
    errorHandler : (statusCode,message)=>{
        const error = new Error();  //create a error using JavaScript Error Method
        error.statusCode = statusCode; 
        error.message = message;
        return error;
    }
};

// After creating the custom error, to use this go to the auth.controller.js