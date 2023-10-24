import Modell from "../M/Modell.js"
import View from "../V/View.js"


class Controll{



constructor(){
    console.log("edig okés")
    this.UrlapModell= new Modell()
    this.UrlapView= new View($(".urlap"),this.UrlapModell.leiro)
}

}
export default Controll