import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Classlistcomponent } from "./classlistcomponent/classlistcomponent";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [Classlistcomponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('5c');
  showcourses=false;
  toggle()
  {
    this.showcourses=!this.showcourses;
  }
}
