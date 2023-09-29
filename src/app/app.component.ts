import { Component, HostListener, OnInit } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GoodComponent } from "./good/good.component";
import { BadComponent } from "./bad/bad.component";
import { environment } from "src/environments/environment";
import { Player } from "src/model/player";
import { PositionModel } from "src/model/position";
import { MatSelectModule } from "@angular/material/select";

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
  namePlayer: any[] = [];
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

  ngOnInit(): void {
    this.listGif = [
      { src: "assets/emoj/8583-yoyomonkey-thinkinghard.gif" },
      { src: "assets/emoj/spongebob-pageflip.gif" },
      { src: "assets/emoj/cicimonkey-blush.gif" },
      { src: "assets/emoj/nyanparrot.gif" },
      { src: "assets/emoj/MegurineLuka_Applause1.gif" },
      { src: "assets/emoj/catgirlears.gif" },
      { src: "assets/emoj/MegurineLuka_Applause1.gif" },
      { src: "assets/emoj/giphy1.gif" },
      { src: "assets/emoj/giphy2.gif" },
      { src: "assets/emoj/giphy3.gif" },
      { src: "assets/emoj/giphy.gif" },
    ];

    this.arrayPositionGare = environment.arrayGare;
    this.playerRecord;
    this.players = [];
    this.playerActive;
    this.gifIndex;
    setInterval(() => {
      this.gifIndex();
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
    console.log(this.X = event.clientX,this.Y = event.clientY);
for (const iterator of this.arrayPositionGare) {
  if (this.Y == iterator.position_Y && this.X == iterator.position_x) {
    this.indexArray = "position_x: " + iterator.position_x + ", " + "position_Y: " + iterator.position_Y
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
    if (eventNamePlayer != "" && this.gif != '') {
      this.namePlayer.push(eventNamePlayer);
      let player: any = new Player(eventNamePlayer, this.score, this.gif);
      this.listplayer?.push(player);
      this.gif = "";
      this.gifFalse = false
    } else {
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
        this.listplayer?.map((a) =>
          a.name == this.nameActive
            ? { ...new Player(a.name, a.point++, a.gif) }
            : { ...new Player(a.name, a.point, a.gif) }
        );
      }, 200);
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
