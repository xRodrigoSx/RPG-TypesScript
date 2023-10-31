"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arqueiro_1 = require("./Arqueiro");
const Coisa_1 = require("./Coisa");
const Guerreiro_1 = require("./Guerreiro");
const Guilda_1 = require("./Guilda");
let legolas = new Arqueiro_1.Arqueiro("Legolas", 5);
let passolargo = new Guerreiro_1.Guerreiro("Passo Largo", 5);
let frodo = new Guerreiro_1.Guerreiro("Frodo", 1);
let copo = new Coisa_1.Coisa("Copo", 1);
let cavaleirosnegros = new Guilda_1.Guilda("Cavaleiros Negros");
cavaleirosnegros.addMembro(legolas);
cavaleirosnegros.addMembro(legolas);
cavaleirosnegros.addMembro(passolargo);
//# sourceMappingURL=App.js.map