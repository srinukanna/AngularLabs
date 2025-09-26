import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('7a');
  student={
   name:" ",
   mail:" ",
   password:" "
  };
  onsubmit()
  {
    alert(`Registered Successfully\n:${this.student.name}\nEmail:${this.student.mail}\nPassword:${this.student.password}`);
  }
}
