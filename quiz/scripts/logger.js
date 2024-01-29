// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.


let logMsg = function (){
    console.log(this.errMsg);
}

const err = {
    errMsg: "Baka!!!"
}

logMsg(logMsg.call(err));