"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guilda = void 0;
class Guilda {
    constructor(nome) {
        this.nome = nome;
        this.membros = [];
    }
    getNome() {
        return this.nome;
    }
    getMembros() {
        return this.membros;
    }
    addMembro(personagem) {
        if (this.contains(personagem)) {
            console.log("Esse personagem ja esta nesta guilda");
        }
        else {
            this.membros.push(personagem);
            personagem.grupos.push(this.nome);
        }
    }
    removeMembro(personagem) {
        if (!this.contains(personagem)) {
            console.log("Esse personagem não esta nesta guilda para ser removido");
        }
        else {
            for (let i = 0; i < this.membros.length; i++) {
                if (this.membros[i].getNome() === personagem.getNome()) {
                    this.membros.splice(i, 1);
                }
            }
            for (let i = 0; i < personagem.grupos.length; i++) {
                if (personagem.grupos[i] === this.nome) {
                    personagem.grupos.splice(i, 1);
                }
            }
        }
    }
    contains(personagem) {
        for (let i = 0; i < this.membros.length; i++) {
            if (this.membros[i].getNome() === personagem.getNome()) {
                return true;
            }
        }
        return false;
    }
}
exports.Guilda = Guilda;
//# sourceMappingURL=Guilda.js.map