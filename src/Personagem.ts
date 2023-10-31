import { Arqueiro } from "./Arqueiro"
import { Coisa } from "./Coisa"
import { Guerreiro } from "./Guerreiro"
import { Guilda } from "./Guilda"

export class Personagem extends Coisa {
    level: number
    alcance: number = 0
    grupos: Array<string> = []

    constructor(nome: string, level: number) {
        super(nome, 1000)
        this.level = level
    }

    getNome() {
        return this.nome
    }

    machucar(dano: number, distancia: number, alvo: Coisa) {
        if (!(alvo instanceof Personagem)) {
            this.causaDano(alvo, dano)
            if(alvo.vivo == false){
                console.log("A coisa foi destruída")
            }
        } else {
            if (this.heAliado(alvo)) {
                console.log("Ataque fracassado, aliados não podem se ferir")
            } else {
                if (this.alcance < distancia) {
                    console.log("Ataque fracassado,", this.nome, "não tem alcance o suficiente")
                } else {
                    if (alvo.level >= this.level + 5) {
                        dano = dano * 0.5
                    } else if (alvo.level <= this.level - 5) {
                        dano = dano * 1.5
                    } else {
                        dano = dano
                    }
                    this.causaDano(alvo, dano)
                }
            }
        }
    }

    private heAliado(alvo: Personagem) {
        for (let i = 0; i < this.grupos.length; i++) {
            for (let j = 0; j < alvo.grupos.length; j++) {
                if (this.grupos[i] == alvo.grupos[j]) {
                    return true
                }
            }
        }
        return false
    }

    curar(cura: number, alvo: Personagem) {
        if (this.heAliado(alvo) == false) {
            console.log("Cura fracassado, só aliados podem se curar")
        } else {
            if (alvo.vida == 1000) {
                console.log("Cura fracassada, a vida ja esta full")
            } else {
                if (alvo.vivo == true) {
                    alvo.vida = alvo.vida + cura
                    if (alvo.vida > 1000) {
                        alvo.vida = 1000
                    }
                } else {
                    console.log("\n")
                    console.log("Cura fracassada,", alvo.nome, "esta morto")
                }
            }
        }
    }

    status(): string {
        return `{nome: ${this.nome}, alcance: ${this.alcance}, vida: ${this.vida}, level: ${this.level}, Guildas: ${this.grupos}, vivo: ${this.vivo}}`
    }
    
    causaDano(alvo: Coisa, dano: number) {
        if (alvo.vivo == true) {
            alvo.vida = alvo.vida - dano
            if (alvo.vida > 0) {
                alvo.vivo = true
            } else {
                alvo.vivo = false
                alvo.vida = 0
            }
        } else {
            console.log("\n")
            console.log("Ataque fracassado,", alvo.nome, "esta morto")
        }
    }
}
    