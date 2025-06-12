import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'smgn-cyber-fe';
}
