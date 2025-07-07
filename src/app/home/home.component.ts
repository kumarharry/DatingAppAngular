import { Component, inject } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  http = inject(HttpClient);
  registerMode = false;
  users: any;
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  gettingValueFromChild(event: boolean) {
    this.registerMode = event;
  }
}
