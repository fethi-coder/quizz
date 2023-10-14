import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { BrowserModule } from '@angular/platform-browser';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-bad',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {
  gif: string = ''
  session: any

  @Output() newItemEventBad = new EventEmitter<any>();
  iSbad: String = "";

  @Input() gifPush: any
  close: boolean = true;
  arrayGif: any[] = [
    "assets/images/Aneu.gif",
    "assets/images/giphy.gif",
    "assets/images/nope-pic-4.gif.webp",
    "assets/images/Aneu.gif",
    "assets/images/nope-pic-8.gif.webp",
    "assets/emoj/train.gif"
  ];

  max = this.arrayGif.length;

  ngOnInit(): void {
    this.gifIndex()
  }

  addNewItem() {
    let iSbad = "false"
    this.newItemEventBad.emit(iSbad);
  }

  gifIndex() {
    setTimeout(() => { this.gifPush = String(this.arrayGif[Math.floor(Math.random() * this.max)]) }, 100)
    return this.gifPush;
  }

}
