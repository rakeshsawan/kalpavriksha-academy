import {Request,Response,NextFunction} from 'express';
import Jwt  from 'jsonwebtoken';

const authenticate:any = (req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers.authorization
    if(!token){
        res.send({
            success:false,
            statusCode:401,
            message:'no token found or invalid token!'
        })
    }
    else{
        const tokenSecret='Pooja@@9004'
        Jwt.verify(token.split('')[1],tokenSecret,(err:any,value:any)=>{
            if(err){
                res.send({
                    success:false,
                    statusCode:401,
                    message:'Invalid Token!'
                })
            }
            else{
                (<any>req).user =value.data
                console.log((<any>req).user);
                next()
            }
        })
    }
}

export default authenticate;