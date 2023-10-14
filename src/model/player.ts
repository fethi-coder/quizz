import { PlayerModel } from "./player.model"

export class Player {
    name: string = ''
    point: number = 0
    gif:string =""
    isPresent = false
    constructor(name: string, point: number,gif:string,isPresent:boolean) {
        this.name = name
        this.point = point
        this.gif = gif
        this.isPresent = isPresent
    }
}

export class ListPlayer {
    lisPlayer: Player
    constructor(listPlayer: Player) {
        this.lisPlayer = listPlayer
    }
}