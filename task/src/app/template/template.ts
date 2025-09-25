import { Component } from '@angular/core';
import { Test} from "../test/test";

@Component({
  selector: 'app-template',
  imports: [Test],
  standalone:true,
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
   imgurl:string="kitsakshar.jpeg";
   alt:string="kitsakshar";

}
