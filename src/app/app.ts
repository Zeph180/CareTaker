import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Services } from "./services/services";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule, Services],
  template: `<app-services></app-services>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('care-taker');
}
