
import { Component, HostListener, OnDestroy, OnInit, signal } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GoodComponent } from "./good/good.component";
import { BadComponent } from "./bad/bad.component";
import { Player } from "src/model/player";
import { PositionModel } from "src/model/position";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { interval } from 'rxjs';


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoodComponent,
    BadComponent,
    NgFor,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit,OnDestroy {

  title = "quizz";
  name: any = "";
  good?: boolean = false;
  bad?: boolean = false;
  screenLog: any;
  count?: number;
  posX: number = 0;
  posY: number = 0;
  arrayPositionGare: Array<any> = [];
  propResponse?: string;
  player: any = "";
  players: any = [];
  arraytre: PositionModel[] = [];
  arrayPlayer: Player[] = [];
  score: number = 0;
  indexPlayer: number = 0;
  playerActive: any;
  playerPush: any[] =[];
  listplayer: Player[] = [];
  numPoint: number = 0;
  namePlayer: Player[] = [];
  index: number = 0;
  nameActive: any = "";
  listGif: any[] = [];
  gifPath: string = "";
  gif: string = "";
  gifFalse: boolean = false;
  startGame?: boolean = false;
  X: any;
  Y: any;
  indexArray: any;
  tre?: boolean = true;
  line?: number
  tracker: number = 0;
  gifCursor: string = '';
  cursor_X: any;
  cursor_Y: any;
  doublon = signal<any>([]);
  gifCursorObs =interval(200) 


  Reponse?: string;
  isVoirReponse: boolean = false;

  ngOnInit(): void {
    this.listGif = environment.listGif
    sessionStorage.setItem('gif', "assets/emoj/bullet.png")
    this.gifCursorObs?.subscribe(() => this.gifCursor = String(sessionStorage.getItem('gif')))
    this.arrayPositionGare = environment.arrayGare;
    this.playerRecord;
    this.players = [];
    this.playerActive;
    this.countIndex;
  }

  addItem(newItem: string) {
    if (newItem == "false") {
      this.good = false;
      this.bad = false;
    }
  }
  addItemBad(newItem: string) {
    if (newItem == "false") {
      this.bad = false;
      this.good = false;
    }
  }


  @HostListener('mousemove', ['$event']) onMouseMove(event: { clientX: any; clientY: any; }) {
    this.X = event.clientX
    this.Y = event.clientY
    this.tracker = this.X * this.Y - 119
    let ineee = 0
    for (const [iterator, i] of this.arrayPositionGare.entries()) {
      ++ineee
      if (i.position_Y <= this.Y  && i.position_x <= this.X ) {
       this.line = 0
        this.indexArray = "position_x: " + i.position_x + ", " + "position_Y: " + i.position_Y  
        this.line = iterator + 4
        this.tre = true
      } else {
        this.tre = false
      }

    }
  }

  isResponse(event: string) {
    if (this.listplayer.length !== 0) {
      this.startGame = true;
      this.name = ""
    }
    this.propResponse = event;
    this.Reponse = event
    this.name = ""
  }

  gifPathSend(gifevent: string) {
    this.gif = gifevent;
  }

  playerRecord(eventNamePlayer: any) {

    if (this.listplayer.length < 5 && !this.namePlayer.includes(eventNamePlayer)) {
      this.namePlayer.push(eventNamePlayer);
      let player: Player = new Player(eventNamePlayer, this.score,this.gif,true);
      this.listplayer?.push(player);
      this.gifFalse = false
    } else {
      alert('nope déjà utilisé 😃')
      this.gifFalse = false
    }
    this.player = "";
    this.gifFalse;
  }

 

  countIndex() {
    if (this.listplayer?.length - 1 >= this.index) {
      this.nameActive = this.namePlayer[this.index];
      this.gifCursor = this.gif
    } else {
      this.index = 0;
      this.nameActive = this.namePlayer[this.index];
    }
    this.index++;
  }

  reponse(event: any) {
    this.playerPush =[]
    this.isVoirReponse = false
    if (event == this.propResponse && this.propResponse ) {
      this.name =""
      this.good = true;
      setTimeout(() => {
        this.listplayer?.map((a,e) => {   
          if (a.name == this.nameActive){
           let gif =  new Player(a.name, a.point++, a.gif,true)
            sessionStorage.setItem('gif', gif.gif)
            this.name = ""
            this.playerPush = [a.name, a.gif];
          }else{
            this.name =""
            new Player(a.name, a.point, a.gif,false)
          }
        },)}, 100);
      this.name = "";
    } else {
      this.good = false
      this.bad = true;
      this.name = "";
      this.isVoirReponse = true
    }
    setTimeout(() => { this.isVoirReponse = false },1500)
    this.name = "";
    this.propResponse =""
    console.log(this.name);
    
  }

  restart() {
    sessionStorage.clear()
    window.location.reload()
  }

voirReponse(){
  
}

  ngOnDestroy(): void {

  }
}
