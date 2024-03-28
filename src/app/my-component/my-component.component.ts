import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Elements } from '../model/dropdown-el';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  @Input()
  els = Elements;
 

  ngOnInit() {
    console.log (this.els);
  }
}
