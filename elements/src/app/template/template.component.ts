import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  coursechange: string = 'Python';

  coursename() {
    this.coursechange = 'Cpp';
  }
}
