import { Component, inject } from '@angular/core';
import { MemberService } from '../../_services/member.service';
import { Member } from '../../_models/member';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
readonly memberService = inject(MemberService);
members: Member[] = [];

constructor() {
  this.loadMembres();
}
loadMembres(){
  this.memberService.getMembers().subscribe({
    next: data => this.members= data
  });
}
}
