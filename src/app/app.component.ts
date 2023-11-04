
import { Component, HostListener, OnDestroy, OnInit, signal } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GoodComponent } from "./good/good.component";
import { BadComponent } from "./bad/bad.component";
import { Player } from "src/model/player";
import { PositionModel } from "src/model/position";
import { environment } from "src/environments/environment";
import { interval } from 'rxjs';
import { BrowserModule, Title } from "@angular/platform-browser";
import { log } from "console";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoodComponent,
    BadComponent,
    NgFor
  ],
  providers:[Title],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
[x: string]: any;

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
  playerActive: Player[] = [];
  playerPush: any[] = [];
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
  line?: number
  tracker: number = 0;
  gifCursor: string = "assets/emoj/bullet.png"
  cursor_X: any;
  cursor_Y: any;
  doublon = signal<any>([]);
  gifCursorObs = interval(200)
  visiblecity: boolean = false
  playerActuel: any
  Reponse?: string;
  isVoirReponse: boolean = false;
  display:any =[]
  ArrayConvert:any = []


  constructor(private titles:Title){}

  ngOnInit(): void {
    this.listGif = environment.listGif
    sessionStorage.setItem('gif', "assets/emoj/bullet.png")
    this.gifCursorObs?.subscribe(() => this.gifCursor = String(sessionStorage.getItem('gif')))
    this.arrayPositionGare = environment.arrayGare;
    this.playerRecord;
    this.players = [];
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
    for (const [iterator, i] of this.arrayPositionGare.entries()) {
      if (i.position_Y <= this.Y && i.position_x <= this.X) {
        this.line = 0
        this.line = iterator + 4
      }
    }
  }

  isResponse(event: string,index:number) {
    console.log(index);
    this.display.push(index)
    this.ArrayConvert = [...new Set(this.display)]
    
    console.log(this.display);
     this.titles.setTitle("nouvelle partie")
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
    this.visiblecity = false
  }

  playerRecord(eventNamePlayer: any) {
    if (this.listplayer.length < 5 && !this.namePlayer.includes(eventNamePlayer) && this.gif !== "" ) {
      this.namePlayer.push(eventNamePlayer);
      let player: Player = new Player(this.index++, eventNamePlayer, this.score, this.gif, false);
      this.listplayer?.push(player);
      this.gifFalse = false
    } else {
      alert('=> nope déjà utilisé 😃\n=> le nombre de joueur est limité a 5 participants 😠 \n=> vous devez choisir une image pour commencer la partie 😝')
      this.gifFalse = false
    }
    this.player = "";
    this.listGifCss
  }



  countIndex() {
    if (this.listplayer?.length - 1 >= this.index) {
      this.nameActive = this.namePlayer[this.index];
      this.gifCursor = this.gif
      this.listGifCss(this.nameActive)
    } else {
      this.index = 0;
      this.nameActive = this.namePlayer[this.index];
      this.listGifCss(this.nameActive)
    }
    this.index++;
  }

  reponse(event: string) {
    console.log(this.display);
    
    this.playerPush = []
    this.isVoirReponse = false
    if (event.toLowerCase() == this.propResponse?.toLowerCase() && this.propResponse) {
      this.name = ""
      this.good = true;
      setTimeout(() => {
        this.listplayer?.map((a) => {
          if (a.name == this.nameActive) {
            let gif = new Player(a.id, a.name, a.point++, a.gif, true)
            sessionStorage.setItem('gif', gif.gif)
            this.name = ""
            this.playerPush = [a.name, a.gif];
          } else {
            this.name = ""
           let giffalse = new Player(a.id, a.name, a.point, a.gif, true)
         }
        },)
      }, 100);
      this.name = "";
    } else {
      this.good = false
      this.bad = true;
      this.name = "";
      this.isVoirReponse = true
    }
    this.name = "";
    this.propResponse = ""
    setTimeout(() => { this.isVoirReponse = false }, 1000)
  }

  restart() {
    sessionStorage.clear()
    window.location.reload()
  }

  visibleCity() {
    this.visiblecity = !this.visiblecity
  }


    listGifCss(data: any) {
      let findid = 0
   this.listplayer.forEach((a) => {
        if (a.name == data) {
          findid = a.id + 1
          if (findid >= this.listplayer.length) {
            this.playerActuel = this.listplayer.find(b => b.id == 0)
            this.titles.setTitle(this.playerActuel.name)
          } else {
            this.playerActuel = this.listplayer.find(b => b.id == findid)
            this.titles.setTitle(this.playerActuel.name)
          }
        }
      }
      )
    }

  ngOnDestroy(): void { 
  }
}
