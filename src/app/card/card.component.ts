import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router ,  NavigationEnd } from '@angular/router';
import { FormControl, Validators, FormGroup ,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('title') title;
  @Input('subtitle') subtitle;
  @Input('content') content = 'THIS IS RISHAB HERE';


  @Output() btnClicked  = new EventEmitter<boolean>();


  

  ngOnInit() {
  }

handleBtnClick(){
  this.btnClicked.emit(true);
}

}
