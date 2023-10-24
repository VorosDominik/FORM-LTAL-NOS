export class Tabelsor{
    #key;
    #elemleiro = {};
    constructor(key, elemleiro, szuloelem) 
    {
        this.szuloelem = szuloelem;
        this.#key = key;
        this.#elemleiro = elemleiro;
    
        this.#textElem();
    }


    #textElem() {
        let txt = `
        
        <td>${this.#elemleiro.nev}</td>
       


        `;
        this.szuloelem.append(txt);
      }
}