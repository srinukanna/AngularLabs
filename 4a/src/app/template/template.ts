import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [],
  standalone:true,
  templateUrl: './template.html',
  styleUrls: ['./template.css']
})

export class Template {
imageUrl:string="hanuman.jpeg";
alttext:string='hanuman';
}
