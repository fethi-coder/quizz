
import { Component, HostListener, OnInit } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GoodComponent } from "./good/good.component";
import { BadComponent } from "./bad/bad.component";
import { Player } from "src/model/player";
import { PositionModel } from "src/model/position";
import { environment } from "src/environments/environment";


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
export class AppComponent implements OnInit {
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
  arrayGif: any[] = [
    "assets/images/Aneu.gif",
    "assets/images/giphy.gif",
    "assets/images/nope-pic-4.gif.webp",
    "assets/images/Aneu.gif",
    "assets/images/nope-pic-8.gif.webp",
    "assets/emoj/train.gif"
  ];
  gifPush: any;
  playerPush: any;
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
  doublon: boolean[] = [];

  ngOnInit(): void {
    this.listGif = environment.listGif

    this.arrayPositionGare = environment.arrayGare;
    this.playerRecord;
    this.players = [];
    this.playerActive;
    this.gifIndex;
    setInterval(() => {
      this.gifIndex()
    }, 6000);
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
        console.log(this.line);
        this.tre = true
      } else {
        this.tre = false
      }

    }
  }

  isResponse(event: string) {
    this.propResponse = event;
    this.startGame = true
  }

  gifPathSend(gifevent: string) {
    this.gif = gifevent;
  }

  playerRecord(eventNamePlayer: any) {
    this.doublon = this.listplayer.map(a => a.name == eventNamePlayer)
    console.log(this.doublon);

    if (eventNamePlayer != "" && this.gif != '' && !this.doublon[0]) {
      this.namePlayer.push(eventNamePlayer);
      let player: any = new Player(eventNamePlayer, this.score, this.gif);
      this.listplayer?.push(player);
      this.gifCursor = this.gif
      this.gif = "";
      this.gifFalse = false
    } else {
      alert('nope déjà utilisé 😃')
      this.gifFalse = false
    }
    this.player = "";
    this.gifFalse;
  }

  gifIndex() {
    let max = 4;
    this.gifPush = String(this.arrayGif[Math.floor(Math.random() * max)]);
    return this.gifPush;
  }

  countIndex() {
    if (this.listplayer?.length - 1 >= this.index) {
      this.nameActive = this.namePlayer[this.index];
      this.gifCursor = this.gif
    } else {
      this.index = 0;
      this.nameActive = this.namePlayer[this.index];
    }
    this.playerPush = this.nameActive;
    this.index++;
  }

  reponse(event: any) {
    if (event == this.propResponse) {
      this.good = true;
      setTimeout(() => {
        this.listplayer?.map((a) => {
          a.name == this.nameActive
            ? { ...new Player(a.name, a.point++, a.gif) }
            : { ...new Player(a.name, a.point, a.gif) }
        }, this.gifCursor = this.gif
        )
      }, 100);
      this.name = "";
    } else {

      this.bad = true;
      this.name = "";
    }
    this.name = "";
  }

  restart() {
    window.location.reload()
  }
}
