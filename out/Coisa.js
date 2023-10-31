"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coisa = void 0;
class Coisa {
    constructor(nome, vida) {
        this.vivo = true;
        this.nome = nome;
        this.vida = vida;
    }
    status() {
        return `{nome: ${this.nome}, vida: ${this.vida}, vivo: ${this.vivo}}`;
    }
}
exports.Coisa = Coisa;
//# sourceMappingURL=Coisa.js.map