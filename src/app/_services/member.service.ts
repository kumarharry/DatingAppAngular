import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  readonly http = inject(HttpClient);
  readonly baseUrl = environment.apiUrl;
  constructor() { }

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }
  getMember(userName: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + userName);
  }
}
