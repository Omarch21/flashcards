import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatButtonBase } from '@angular/material/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flashcards';
  showFiller = false;
  
}
