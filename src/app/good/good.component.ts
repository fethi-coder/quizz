import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-good',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit{
 
  text:string="bonne réponse"
  close:boolean = true

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() playerPush:any
  session?: string | null;

  ngOnInit(): void {
    console.log("fdszfef");
    
    setInterval(() => { this.close = false }, 4000)
  }

  addNewItem() {
    let iSgood = "false"
    this.newItemEvent.emit(iSgood);
  }
}
