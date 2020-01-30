
exports.cdn=function(){
    this.get = function(){
        return getUrl(
            cdns[
                logicFunctions[
                    logic
                ]()
            ]
        );
    };
    /*
     *   @input String 
     *   
     *    ->cdns
     *    ->cdnDB
     *
     *   @out  boolean
     *
     */
    
    this.add = function(cdn){
         if( typeof cdn !== "string")
             return false;
         if( cdns.indexOf(cdn) !== -1){
             return false;
         }
         cdns.push(cdn);
         cdnDB[cdn] = {
             live    :false, // tested
             ping    :0, // ping messure
             counter :0, // used time
             last    :0, // last time
             priority:0  // priority 
         }
         return true
    }
    this.getHttpsForce = function(){
        return httpsForce;
    }
    this.setHttpsForce=function(https){
        if(typeof https === "boolean"){
            httpsForce = https;
            return true;
        }
        return false;
    };
    this.getLogic=function(){
        return logic; 
    };
    this.setLogic=function(newLogic){
        if(typeof newLogic === "undefined")
            return false;
        if(
            (newLogic.isInteger)||
            (newLogic > -1)||
            (logicFunctions.length > newLogic)
        ){
            logic = newLogic;
            return true;
        }
        return false;
    };
    let currentNumber = 0;
    let cdns = [] ; // performance is everything
    let cdnDB = {};
    let logic = 0; //  cdn sort logic: first, serial, random, closest
    let httpsForce = false; // force https
    let getUrl = function(url){
        if(httpsForce){
            return "https://"+url+"/";
        }
        return "//"+url+"/";
    }
    let logicSerial = function(){
        let now = currentNumber;
        currentNumber++;
        if(currentNumber > cdns.length-1)
            currentNumber = 0;
        return now;
    };
    let logicRandom = function(){
        currentNumber=Math.floor(Math.random() * cdns.lenth);
        return logicSerial();
    };
    let logicFirst = function(){
       return 0;
    }
    let logicFunctions = [
        logicFirst,
        logicSerial,
        logicRandom
    ];

};
