import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Elements } from '../model/dropdown-el';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() els = Elements;

  hoveredElementLabels: { [key: number]: string | null } = {};

  onHover(name: number) {
    this.hoveredElementLabels[name] = 'Изберете'; // Set "Изберете" when hovered
  }

  onLeave(name: number) {
    this.hoveredElementLabels[name] = null; // Reset to defaultOption when not hovered
  }

  ngOnInit() {
  }
}
