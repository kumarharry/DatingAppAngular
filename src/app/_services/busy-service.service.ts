import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyServiceService {

 busyRequestCount = 0;
 readonly spinnerService  = inject(NgxSpinnerService);
 busy()
 {
  this.busyRequestCount++;
  this.spinnerService.show(undefined,{

    type:'line-scale-party',
    bdColor: 'rgba(255, 255, 255, 0)',
    color: '#333333'
  });
 }

 idle(){
  this.busyRequestCount--;
  if(this.busyRequestCount <= 0){
    this.busyRequestCount = 0;
    this.spinnerService.hide();
  }
 }
}
