import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {

    constructor(nome: string, level: number) {
        super(nome, level)
        this.alcance = 2
    }
}