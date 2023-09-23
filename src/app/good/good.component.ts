import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-good',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent {
  text:string="bonne réponse"

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    let iSgood = "false"
    this.newItemEvent.emit(iSgood);
  }
}
