import { TabelOsz } from "./TabelOsz.js";
import { Tabelsor } from "./TabelSor.js";
export class TView {
    #leiro = {};

    constructor(szulE, leiro, janoslista) {
        console.log("MUHHAHAHAHAHA");
        this.#leiro = leiro;
        this.SzulELEM = $(szulE);
        this.Tabel = $("<table></table>");
        this.trtag =$("<tr></tr>")
        this.list = janoslista
        this.SzulELEM.append(this.Tabel);
        console.log(this.Tabel);
        this.#urlaplétrehoz();
    }
    #urlaplétrehoz() {
        let txt = "";
        for (const key in this.#leiro) {
            
         new TabelOsz(key, this.#leiro[key], this.trtag);
         
         
         for (const key in this.list) {
            
            new Tabelsor(key, this.list[key], this.Tabel);
                   
           }
        }
        

        

        this.Tabel.append(this.trtag);
    }
}