import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { environment } from 'src/environments/environment';
import { ListPlayer, Player } from 'src/model/player';
import { Position, PositionModel } from 'src/model/position';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, GoodComponent, BadComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'quizz';
  name: any = ''
  good?: boolean = false
  bad?: boolean = false;
  screenLog: any
  count?: number
  posX: number = 0
  posY: number = 0
  arrayPositionGare: Array<any> = []
  propResponse?: string;
  player: any = ""
  players: any = [];
  arraytre: PositionModel[] = [];
  arrayPlayer: Player[] = [];
  score: number = 0;
  indexPlayer: number = 0;
  playerActive: any;
  arrayGif: any[] = [
    "assets/images/Aneu.gif",
    "assets/images/giphy.gif",
    "assets/images/nope-pic-4.gif.webp",
    "assets/images/Aneu.gif",
    "assets/images/nope-pic-8.gif.webp"
  ]
  gifPush: any
  playerPush: any
  listplayer: Player[] = [];
  numPoint: number = 0;
  namePlayer: any[] = [];
  index: number = 0;
  nameActive: any = '';


  ngOnInit(): void {
    this.cursor
    this.arrayPositionGare = environment.arrayGare
    this.playerRecord
    this.players = []
    this.playerActive
    this.gifIndex
    setInterval(() => { this.gifIndex() }, 6000)
    this.countIndex
  }

  addItem(newItem: string) {
    if (newItem == "false") {
      this.good = false
      this.bad = false
    };
  }
  addItemBad(newItem: string) {
    if (newItem == "false") {
      this.bad = false
      this.good = false
    };
  }

  cursor(event: any) {
    console.log(environment.arrayGare);
  alert('position_x:'+event.x+','+ 'position_Y:'+event.y)
  }

  isResponse(event: string, index: number) {
    this.propResponse = event
  }

  playerRecord(eventNamePlayer: any) {
    if (eventNamePlayer != '') {
      this.namePlayer.push(eventNamePlayer)
      let player: any = new Player(eventNamePlayer, this.score)
      this.listplayer?.push(player)
    } else {
      alert('faut remplir les champs mecs !!!')
    }
    this.player = ''
  }

  gifIndex() {
    let max = 4
    this.gifPush = String(this.arrayGif[Math.floor(Math.random() * max)])
    return this.gifPush
  }


  countIndex() {
      if (this.listplayer?.length - 1 >= this.index) {
        this.nameActive = this.namePlayer[this.index]
      } else {
        this.index = 0
        this.nameActive = this.namePlayer[this.index]
      }
    this.playerPush = this.nameActive
    this.index++
  }

  reponse(event: any) {
    if (event == this.propResponse) {
      this.good = true
      setTimeout(() => { this.listplayer?.map(a => a.name == this.nameActive ?
         ({ ...new Player(a.name, a.point++) })
        : { ...new Player(a.name, a.point) }) }
       ,200)
      this.name = ""
    } else {
      this.bad = true
      this.name = ""
    }
    this.name = ""
  }
}

