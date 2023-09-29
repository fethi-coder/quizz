import { PlayerModel } from "./player.model"

export class Player {
    name: string = ''
    point: number = 0
    gif:string =""
    constructor(name: string, point: number,gif:string) {
        this.name = name
        this.point = point
        this.gif = gif
    }
}

export class ListPlayer {
    lisPlayer?: Player
    constructor(listPlayer: Player) {
        this.lisPlayer = listPlayer
    }
}