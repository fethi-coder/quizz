import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

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
  inter = interval(4000)

  ngOnInit(): void {    
this.inter.subscribe(()=>{
      this.close = false;
      this.newItemEvent.emit("false");
    })
  }

  addNewItem() {
    this.playerPush = []
    this.newItemEvent.emit("false");
  }
}
