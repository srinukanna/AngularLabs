import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [CommonModule],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {

    isPrimary=true;
    isitalic=false;
    isBold=true;

    toggleitalic()
    {
      this.isitalic=!this.isitalic;
    }
}
