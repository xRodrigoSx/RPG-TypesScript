"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    constructor(nome, level) {
        super(nome, level);
        this.alcance = 2;
    }
}
exports.Guerreiro = Guerreiro;
//# sourceMappingURL=Guerreiro.js.map