"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    toString() {
        return `{nome: ${this.nome}, cpf: ${this.cpf}}`;
    }
}
exports.Autor = Autor;
//# sourceMappingURL=Autor.js.map