import { PlayerModel } from "./player.model"

export class Player {
    name: string = ''
    point: number = 0
    constructor(name: string, point: number) {
        this.name = name
        this.point = point
    }
}

export class ListPlayer {
    lisPlayer?: Player
    constructor(listPlayer: Player) {
        this.lisPlayer = listPlayer
    }
}