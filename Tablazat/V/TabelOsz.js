export class TabelOsz{
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
        
        <th>${this.#elemleiro.megj}</th>
       


        `;
        this.szuloelem.append(txt);
      }
}