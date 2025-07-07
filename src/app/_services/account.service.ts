import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly http = inject(HttpClient);
  currentUser = signal<User | null>(null);
  baseUrl = environment.apiUrl;

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/login', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/register', model).pipe(
      map(response => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response));
          this.currentUser.set(response)
        }
        return response;
      })
    )
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUser.set(null);
  }

}
