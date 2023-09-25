import { Component, OnInit, ApplicationConfig } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { environment } from 'src/environments/environment';
import { PlayerModel } from 'src/model/player.model';
import { Player } from 'src/model/player';
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
  name: any = ""
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
  playerActive: string | undefined;


  ngOnInit(): void {
    this.cursor
    this.arrayPositionGare = environment.arrayGare
    this.playerRecord
    this.players = []
    this.playerActive = this.arrayPlayer[this.indexPlayer-1].name
  }

  reponse(event: any) {
    if (event === this.propResponse) {
      this.good = true
      this.name = ''
      if (this.indexPlayer >= 0 && this.indexPlayer <= this.arrayPlayer.length - 1) {
        let num: any = 0
        num = this.arrayPlayer[this.indexPlayer].point
        this.score = num
        this.arrayPlayer[this.indexPlayer].point = ++this.score
        this.playerActive = this.arrayPlayer[this.indexPlayer].name
        sessionStorage.setItem('players', JSON.stringify(this.arrayPlayer))
        this.indexPlayer++
      } else {
        this.indexPlayer = this.indexPlayer - this.arrayPlayer.length
        this.arrayPlayer[this.indexPlayer].point = ++this.score
        sessionStorage.setItem('players', JSON.stringify(this.arrayPlayer))
        this.indexPlayer++
      }
      setTimeout(() => { this.good = !this.good }, 500)
    } else {
      this.bad = true
      this.name = ''
        this.indexPlayer++
      setTimeout(() => { this.bad = !this.bad }, 500)
    }
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
    sessionStorage.setItem('', '')
    this.posX = event.clientX
    this.posY = event.clientY
    let tre = new Position(event.clientX, event.clientY, '')
    this.arraytre.push(tre)
    sessionStorage.setItem('position', JSON.stringify(this.arraytre))
  }

  isResponse(event: string, index: number) {
    this.propResponse = event
  }

  playerRecord(eventNamePlayer: any) {
    let tre = new Player(eventNamePlayer, this.score)
    this.arrayPlayer.push(tre)
    if (this.arrayPlayer.length < 4 && this.player != "") {
      sessionStorage.setItem('players', JSON.stringify(this.arrayPlayer))
      this.players = [sessionStorage.getItem('players')]
    }
    this.player = ""
  }
}

