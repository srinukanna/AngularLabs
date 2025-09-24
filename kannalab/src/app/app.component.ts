import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagesComponent } from "./images/images.component";
import { TextComponent } from "./text/text.component";

@Component({
  selector: 'app-root',
  imports: [ImagesComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kannalab';
}
