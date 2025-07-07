import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  accountService = inject(AccountService);
  registeredUser: any = {};
  usersfromHomeComponent = input.required<any>();
  dataFromChild = output<boolean>();
  readonly toastr = inject(ToastrService);

  ngOnInit(): void {
    console.log(this.usersfromHomeComponent);
  }

  registerUser() {
    this.accountService.register(this.registeredUser).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
        this.toastr.success("Registered successfully!")
      },
      error: error => {
        console.log(error);
        this.toastr.error(error.error);

      }
    })
  }
  cancel() {
    this.dataFromChild.emit(false);
  }
}
