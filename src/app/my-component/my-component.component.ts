import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Elements } from '../model/dropdown-el';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  address: string = '';

  @Input()
  els = Elements;
 


  northChecked: boolean = false;
  southChecked: boolean = false;
  westChecked: boolean = false;
  eastChecked: boolean = false;

  buttonHover: boolean =false;
  buttonHovertxt:string ='Продължи';

  constructor() { }

  toggleCheckbox(direction: string) {
    switch (direction) {
      case 'north':
        this.northChecked = !this.northChecked;
        break;
      case 'south':
        this.southChecked = !this.southChecked;
        break;
      case 'west':
        this.westChecked = !this.westChecked;
        break;
      case 'east':
        this.eastChecked = !this.eastChecked;
        break;
    }
  }

  btnMouseIn() {
    this.buttonHover = true;
    this.buttonHovertxt ='Нормален бутон';
  }
  btnMouseOut() {
    this.buttonHover = false;
    this.buttonHovertxt ='Продължи';
  }
}