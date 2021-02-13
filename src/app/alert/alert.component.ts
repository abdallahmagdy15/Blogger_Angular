/**
 * The alert component passes alert messages to the template whenever a message is received from 
 * the alert service. 
 * It does this by subscribing to the alert service's getMessage() method which returns an Observable.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {  }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
          switch (message && message.type) {
              case 'success':
                  message.cssClass = 'alert alert-success';
                  break;
              case 'error':
                  message.cssClass = 'alert alert-danger';
                  break;
          }

          this.message = message;
      });
  }
  /**
   * A callback method that performs custom clean-up, invoked immediately before a directive, pipe, 
   * or service instance is destroyed.
   */
    ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
