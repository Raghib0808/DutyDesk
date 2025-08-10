class ApiError{
    constructor(statusCode,message='something went wrong',error=[],stack=""){

        super(message)
        this.statusCode=statusCode;
        this.message=message;
        this.sucess=false;
        this.error=error

        // stack error
        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export {ApiError}