import { PlayerModel } from "./player.model"

export class Player {
    name?: string
    point?: number
    constructor(name: string, point: number) {
        this.name = name
        this.point = point
    }
}