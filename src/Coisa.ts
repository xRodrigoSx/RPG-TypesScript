export class Coisa{
    nome: string;
    vida: number;
    vivo: boolean = true

    constructor(nome: string, vida: number){
        this.nome = nome
        this.vida = vida
    }
    status(): string {
        return `{nome: ${this.nome}, vida: ${this.vida}, vivo: ${this.vivo}}`
    }
}