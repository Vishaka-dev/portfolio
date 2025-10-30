import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root', // used to identify this component in HTML
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, NavComponent, RouterOutlet]
})
export class AppComponent {
  title = 'My angular portfolio';
}
