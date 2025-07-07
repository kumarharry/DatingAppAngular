import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../../_services/member.service';
import { Member } from '../../_models/member';
import { ActivatedRoute } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery'

@Component({
  selector: 'app-member-details',
  imports: [TabsModule, GalleryModule],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent implements OnInit {
  memberService = inject(MemberService);
  member?: Member;
  route = inject(ActivatedRoute);
  images: GalleryItem[] = [];
  ngOnInit(): void {

    this.getMemberDetail();
  }
  getMemberDetail() {
    const userName = this.route.snapshot.paramMap.get("username")
    if (!userName) return;
    this.memberService.getMember(userName).subscribe({
      next: data => {
        this.member = data;
        this.member.photos.forEach(p => {
          this.images.push(new ImageItem({ src: p.url, thumb: p.url }))
        });
      }
    });

  }
}
