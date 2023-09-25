export class Position{
    position_x?:string 
    position_Y?: number 
    gare_station?: string
    cursor:string
    constructor(position_x?: string, 
    position_Y?: number, 
    gare_station?: string,
    cursor?: string){
        this.position_x = position_x
        this.position_Y = position_Y
        this.gare_station = gare_station
        this.cursor = 'pointer'
    }
}

export interface PositionModel{
    [x: string]: any
    position_x?: string 
    position_Y?: number
    gare_station?: string
}