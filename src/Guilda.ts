import { Personagem } from "./Personagem";

export class Guilda {
    nome: string;
    membros: Array<Personagem>;

    constructor(nome: string) {
        this.nome = nome;
        this.membros = [];
    }

    getNome(): string {
        return this.nome;
    }

    getMembros(): Array<Personagem> {
        return this.membros;
    }

    addMembro(personagem: Personagem): void {
        if (this.contains(personagem)) {
            console.log("Esse personagem ja esta nesta guilda")
        } else {
            this.membros.push(personagem);
            personagem.grupos.push(this.nome);
        }
    }

    removeMembro(personagem: Personagem) {
        if (!this.contains(personagem)) {
            console.log("Esse personagem não esta nesta guilda para ser removido")
        } else {
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

    contains(personagem: Personagem): boolean {
        for (let i = 0; i < this.membros.length; i++) {
            if (this.membros[i].getNome() === personagem.getNome()) {
                return true
            }
        }
        return false
    }
}