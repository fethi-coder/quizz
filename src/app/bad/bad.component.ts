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

  ngOnInit(): void {
  this.addNewItem()
  }

  addNewItem() {
    let iSbad = "false"
    this.newItemEventBad.emit(iSbad);
  }

}
