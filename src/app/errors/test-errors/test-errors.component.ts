import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-test-errors',
  imports: [RouterLink],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  http = inject(HttpClient);
  accountService = inject(AccountService);
  toastr = inject(ToastrService);
  readonly baseUrl = environment.apiUrl;
  errorMessages: string[] = [];  
  
  testGetAuthError() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(
      {
        next: res => { console.log(res) },
        error: error => {
          console.log(error.error)
        }
      }
    )
  }

  testNotFoundError() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(
      {
        next: res => { console.log(res) },
        error: error => {
          console.log(error.error)
        }
      }
    )
  }


  testServerError() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(
      {
        next: res => { console.log(res) },
        error: error => {
          console.log(error.error)
        }
      }
    )
  }

  testBadRequestError() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(
      {
        next: res => { console.log(res) },
        error: error => {
          console.log(error)
        }
      }
    )
  }

    testValidationError() {
    this.http.post(this.baseUrl + 'account/register',{}).subscribe(
      {
        next: res => { console.log(res) },
        error: error => {
          console.log(error);
          this.errorMessages = error;
        }
      }
    )
  }
}
