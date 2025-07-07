import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css'
})
export class ServerErrorComponent {
  serverErrors: any;
  constructor(private router: Router) {
    const navigations = router.getCurrentNavigation();
      this.serverErrors = navigations?.extras.state?.["error"];
  }

}
