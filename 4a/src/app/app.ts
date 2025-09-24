import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Template } from "./template/template";

@Component({
  selector: 'app-root',
  imports: [Template],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('4a');
}
