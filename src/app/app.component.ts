import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, GoodComponent,BadComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'quizz';
  name: any = ""
  good?: boolean
  bad?: boolean;
  ngOnInit(): void {
    this.good = false
    this.bad = false
  }

  reponse(event: any) {
    if(event === 'a'){
      this.good = true
      setTimeout(() => { this.good = false }, 5500)
    }else{
      setTimeout(() => { this.bad = false }, 5500)
      this.bad = true
    }

  }

  addItem(newItem: string) {
    if(newItem == "false"){
      this.good = false
    };
  }
  addItemBad(newItem: string) {
    if (newItem == "false") {
      this.bad = false
    };
  }

}
