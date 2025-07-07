import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/member';
import { AccountService } from '../../_services/account.service';
import { MemberService } from '../../_services/member.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-edit',
  imports: [TabsModule, FormsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm? : NgForm; 
  member?: Member;
  accountService = inject(AccountService);
  memberService = inject(MemberService);
  readonly toastr = inject(ToastrService);
  ngOnInit(): void {
    this.loadMemberDetail();
  }
  loadMemberDetail() {
    const username = this.accountService.currentUser()?.username;
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => this.member = member
    })
  }
  updateMemberDetails() {
    console.log(this.member);
    this.toastr.success("Profile updated successfully");
    this.editForm?.reset(this.member);
  }
}
