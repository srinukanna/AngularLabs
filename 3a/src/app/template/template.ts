import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  templateUrl: './template.html',
  styleUrls: ['./template.css'],
  imports: [CommonModule]
})

export class Template {
mystyle={
  'color':'white',
  'background-color':'blue'
};

}
