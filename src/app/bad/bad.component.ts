import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit{

  @Output() newItemEventBad = new EventEmitter<string>();
  iSbad: string = "";

  ngOnInit(): void {
  this.addNewItem()
  }

  addNewItem() {
    this.iSbad = "false"
    this.newItemEventBad.emit(this.iSbad);
  }

}
