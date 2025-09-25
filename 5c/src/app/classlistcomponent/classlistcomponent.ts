import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-classlistcomponent',
  imports: [CommonModule],
  templateUrl: './classlistcomponent.html',
  styleUrl: './classlistcomponent.css'
})
export class Classlistcomponent {
  courses=['Angular','cpp','javascript'];
}
