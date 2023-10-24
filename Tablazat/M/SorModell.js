
export class SorModel {
    #list = []
    constructor(){





    }
    
    
    getData(apivegpont, callbackth,callbacker){
    
        axios.get(apivegpont)
        .then(function (response) {
          // handle success
          //console.log("Válasz obj",response)
          //console.log("adatok",response.date)
          //console.log("statu szov",response.status)
          //console.log("válasz statu szov",response.statusText)
          //console.log("Válasz fejléc",response.headers)
          //console.log("Válasz conf",response.config)
          //console.log(response);
          callbackth(response.data.nevek)
        })
        .catch(function (error) {
          
          callbacker(error);
        })
        .finally(function () {
          // always executed
        });
    
    
    
    };
}
