import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandreDev/utils" ;


import {Entity_passport_strategie } from "./passport_strategie"


/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
*/
export class Entity_passport_strategie_facebook extends   Entity_passport_strategie    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'passport_strategie_facebook' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_passport_strategie.cast(obj , true)
    
    
        
        if(obj["lib"] != undefined){
          
           obj["lib"] = obj["lib"].toString() ;
           
        }
        
    
        
        if(obj["strategieName"] != undefined){
          
           obj["strategieName"] = obj["strategieName"].toString() ;
           
        }
        
    
        
        if(obj["clientID"] != undefined){
          
           obj["clientID"] = obj["clientID"].toString() ;
           
        }
        
    
        
        if(obj["clientSecret"] != undefined){
          
           obj["clientSecret"] = obj["clientSecret"].toString() ;
           
        }
        
    
        
        if(obj["callbackURL"] != undefined){
          
           obj["callbackURL"] = obj["callbackURL"].toString() ;
           
        }
        
    
        
        if(obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])){
          
           obj["scope"] = obj["scope"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["profileFields"] != undefined && obj["profileFields"] != null && _.isArray(obj["profileFields"])){
          
           obj["profileFields"] = obj["profileFields"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["enableProof"] != undefined){
          
           obj["enableProof"] = new Boolean(obj["enableProof"]).valueOf() ;
          
        }
        
    
  }


 

public static checklib(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkstrategieName(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkclientID(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkclientSecret(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcallbackURL(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkscope(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkprofileFields(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkenableProof(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_passport_strategie.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.lib == null || target.lib == undefined) ){
                err.push(path + ".lib is required") ;
              }
              

              if(target.lib != null && target.lib != undefined ){
                
                
                res = Entity_passport_strategie_facebook.checklib(target.lib , `${path}.lib`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.strategieName == null || target.strategieName == undefined) ){
                err.push(path + ".strategieName is required") ;
              }
              

              if(target.strategieName != null && target.strategieName != undefined ){
                
                
                res = Entity_passport_strategie_facebook.checkstrategieName(target.strategieName , `${path}.strategieName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.clientID == null || target.clientID == undefined) ){
                err.push(path + ".clientID is required") ;
              }
              

              if(target.clientID != null && target.clientID != undefined ){
                
                
                res = Entity_passport_strategie_facebook.checkclientID(target.clientID , `${path}.clientID`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.clientSecret == null || target.clientSecret == undefined) ){
                err.push(path + ".clientSecret is required") ;
              }
              

              if(target.clientSecret != null && target.clientSecret != undefined ){
                
                
                res = Entity_passport_strategie_facebook.checkclientSecret(target.clientSecret , `${path}.clientSecret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.callbackURL == null || target.callbackURL == undefined) ){
                err.push(path + ".callbackURL is required") ;
              }
              

              if(target.callbackURL != null && target.callbackURL != undefined ){
                
                
                res = Entity_passport_strategie_facebook.checkcallbackURL(target.callbackURL , `${path}.callbackURL`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.scope == null || target.scope == undefined) ){
                err.push(path + ".scope is required") ;
              }
              

              if(target.scope != null && target.scope != undefined ){
                
                
                target.scope.forEach((data, index)=>{
                  res = Entity_passport_strategie_facebook.checkscope(target.scope[index] , `${path}.scope.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.profileFields != null && target.profileFields != undefined ){
                
                
                target.profileFields.forEach((data, index)=>{
                  res = Entity_passport_strategie_facebook.checkprofileFields(target.profileFields[index] , `${path}.profileFields.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.enableProof != null && target.enableProof != undefined ){
                
                
                res = Entity_passport_strategie_facebook.checkenableProof(target.enableProof , `${path}.enableProof`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'lib':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'strategieName':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'clientID':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'clientSecret':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'callbackURL':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'scope':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'profileFields':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'enableProof':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
         
          default:
            return Entity_passport_strategie  .castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'lib':
       
             return null ;
       
        
       
      
      
      case 'strategieName':
       
             return null ;
       
        
       
      
      
      case 'clientID':
       
             return null ;
       
        
       
      
      
      case 'clientSecret':
       
             return null ;
       
        
       
      
      
      case 'callbackURL':
       
             return null ;
       
        
       
      
      
      case 'scope':
       
             return null ;
       
        
       
      
      
      case 'profileFields':
       
             return null ;
       
        
       
      
      
      case 'enableProof':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_passport_strategie  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }


