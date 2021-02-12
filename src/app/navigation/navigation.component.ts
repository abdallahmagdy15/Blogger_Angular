import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../_services/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    author: Author = new Author('', '', '', '', '', '');
    constructor(public auth: AuthenticationService, private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }
    showSearch: boolean = false;
    ngOnInit(): void {
        if (this.auth.getCurrUser() != undefined)
            this.author = this.auth.getCurrUser();
    }

    public submit() {
        this.searchService.query = "the";
        const url = this.router.url.slice(1).split('/');
        if (url[0] == "author") {
            if (url.length > 2)
                this.searchService.source = url[2];
            else
                this.searchService.source = "author-blogs";
        }
        else
            this.searchService.source = url[0];

        this.router.navigate(['/search']);
    }


}
