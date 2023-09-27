import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bad',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {
  gif: string = ''


  @Output() newItemEventBad = new EventEmitter<any>();
  iSbad: String = "";

  @Input() gifPush:any
  close: boolean = true;

  ngOnInit(): void {
    this.gifRandom()
    setInterval(() => { this.close = false }, 3500)
    
    
  }

  addNewItem() {
    let iSbad = "false"
    this.newItemEventBad.emit(iSbad);
  }

  gifRandom() {
  }

}
