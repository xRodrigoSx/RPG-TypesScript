import { Arqueiro } from "./Arqueiro";
import { Coisa } from "./Coisa";
import { Guerreiro } from "./Guerreiro";
import { Guilda } from "./Guilda";
import { Personagem } from "./Personagem";

let legolas = new Arqueiro ("Legolas", 5)
let passolargo = new Guerreiro ("Passo Largo", 5)
let frodo = new Guerreiro ("Frodo", 1)
let copo = new Coisa ("Copo", 1)

let cavaleirosnegros = new Guilda ("Cavaleiros Negros")

cavaleirosnegros.addMembro(legolas)
cavaleirosnegros.addMembro(passolargo)
cavaleirosnegros.removeMembro(passolargo)

//console.log(copo.status())

//frodo.machucar(1, 2, copo)

//console.log(copo.status())