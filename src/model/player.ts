import { PlayerModel } from "./player.model"

export class Player {
    id:number =0
    name: string = ''
    point: number = 0
    gif:string =""
    isPresent = false
    constructor(id:number,name: string, point: number,gif:string,isPresent:boolean) {
        this.id = id
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