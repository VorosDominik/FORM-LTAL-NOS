import Modell from "../M/Modell.js"
import { SorModel } from "../M/SorModell.js"
import { TView } from "../V/TView.js"

export class TControll{



constructor(){
    console.log("edig okés")
    this.tablazatModell= new Modell()
    this.SorModell= new SorModel()
   
    console.log("eddig patika")
    this.DatS=new SorModel()
    this.DatS.getData("../adat.json", this.adatokMegj,this.hibamegj)
}
adatokMegj(lista)
{
    console.log(lista)
    new TView(lista.nevek, $(".lista"))
}
hibamegj(error){
    console.log(error)
    new HibaView(error, $("hiba"))
}

}