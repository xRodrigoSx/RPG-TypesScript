import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {

    constructor(nome: string, level: number) {
        super(nome, level)
        this.alcance = 20
    }
}