import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template',
  imports: [CommonModule,FormsModule],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
text=" ";
bg='black';
color='white';
size=18;

reset()
{

}
}
