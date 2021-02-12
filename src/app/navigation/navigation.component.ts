import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    author: Author = new Author('', '', '', '', '', '');
    constructor(public auth: AuthenticationService, private modalService: NgbModal) { }
    showSearch:boolean=false;
    ngOnInit(): void {
        if (this.auth.getCurrUser() != undefined)
            this.author = this.auth.getCurrUser();
    }


}
