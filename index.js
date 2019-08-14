
exports.cdn=function(inputCdns,inputHttps){
    this.get = function(){
        let before = "";
        if(https ===1)
            before = "https://";
        return (before+cdns[countCdn()]);
    }
    var currentNumber = 0,
        cdns = inputCdns,
        https = 0;
    if((typeof inputHttps !== "undefined")&&(inputHttps === 1))
        https=1;
    var countCdn = function(){
        let now = currentNumber;
        currentNumber++;
        if(currentNumber > cdns.length-1)
            currentNumber = 0;
        return now;
    }
    var mixCdn = function(){
        currentNumber=Math.floor(Math.random() * cdns.lenth);
    }
}
