import { Component, OnInit, ApplicationConfig } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { environment } from 'src/environments/environment';
import { PlayerModel } from 'src/model/player.model';
import { Player } from 'src/model/player';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, GoodComponent, BadComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'quizz';
  name: any = ""
  good?: boolean = false
  bad?: boolean = false;
  screenLog:any
count?:number
posX:number = 0
posY:number = 0
arrayPositionGare:Array<any> =[]
  propResponse?: string;
  player?:any

  ngOnInit(): void {
    this.cursor
    this.arrayPositionGare = environment.arrayGare
    console.log(environment.arrayGare);
    this.playerRecord
  }

  reponse(event: any) {
    if(event === this.propResponse){
      this.good = true
      this.name = ''
      setTimeout(() => { this.good = !this.good }, 5500)
    }else{
      this.bad = true
      this.name = ''
      setTimeout(() => { this.bad = !this.bad }, 500)
    }

  }

  addItem(newItem: string) {
    if(newItem == "false"){
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


  cursor(event:any){
    this.posX = event.clientX
    this.posY = event.clientY
    console.log(" position x : " + this.posX," position Y : " + this.posY)
  }

  isResponse(event:string){
    this.propResponse = event
  }

  playerRecord(event:any){
    let tre = new Player(event,0)
    sessionStorage.setItem('player',JSON.stringify(tre))
    console.log(event);
  }
}

