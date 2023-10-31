"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = require("./Personagem");
class Arqueiro extends Personagem_1.Personagem {
    constructor(nome, level) {
        super(nome, level);
        this.alcance = 20;
    }
}
exports.Arqueiro = Arqueiro;
//# sourceMappingURL=Arqueiro.js.map