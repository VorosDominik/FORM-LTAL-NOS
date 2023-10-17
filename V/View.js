import { Texturlapelem } from "./Texturlapelem.js";

class View {
    #leiro = {};
  
    constructor(szulE, leiro) {
      console.log("MUHHAHAHAHAHA");
      this.#leiro = leiro;
      this.SzulELEM = $(szulE);
      this.formelem = $("<form></form>");
      this.SzulELEM.append(this.formelem);
      console.log(this.formelem);
      this.#urlaplétrehoz();
    }
  
    #urlaplétrehoz() {
      let txt = "";
      for (const key in this.#leiro) {
        switch (this.#leiro[key].type) {
          case "text":
            new Texturlapelem(key, this.#leiro[key], this.formelem);
            break;
          case "number":
            this.#numberElem(key);
            break;
          default:
            break;
        }
      }
      txt += "<input type='submit' value='ok'>";
  
      this.formelem.append(txt);
    }
  
    #textElem(key) {
      let txt = `
      <div class="mb-3 mt-3">
        <label for="${key}" class="form-label">${this.#leiro[key].megj}:</label>
        <input type="${this.#leiro[key].type}" class="form-control" id="${key}" placeholder="${this.#leiro[key].placeholder}" name="${key}" value="${this.#leiro[key].value}" pattern="${this.#leiro[key].regex}">
        <div class="valid lathatosag">ok</div>
        <div class="invalid lathatosag">${this.#leiro[key].valid}</div>
      </div>
      `;
      this.formelem.append(txt);
    }
  
    #numberElem(key) {
      let txt = `
      <div class="mb-3 mt-3">
        <label for="${key}" class="form-label">${this.#leiro[key].megj}:</label>
        <input type="${this.#leiro[key].type}" class="form-control" id="${key}" placeholder="${this.#leiro[key].placeholder}" name="${key}" value="${this.#leiro[key].value}" min="${this.#leiro[key].min}" max="${this.#leiro[key].max}">
        <div class="valid lathatosag">ok</div>
        <div class="invalid lathatosag">${this.#leiro[key].valid}</div>
      </div>
      `;
      this.formelem.append(txt);
    }
  }
  
  export default View;