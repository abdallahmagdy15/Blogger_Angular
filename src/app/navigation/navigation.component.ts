import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { SearchService } from '../_services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    author: Author = new Author('', '', '', '', '', '');
    faSearch = faSearch;
    constructor(public auth: AuthenticationService, private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }
    showSearch: boolean = false;

    searchForm: FormGroup = new FormGroup({});
    ngOnInit(): void {
        console.log(this.auth.isAuthenticated());

        this.searchForm = new FormGroup({
            searchText: new FormControl('')
        });

        if (this.auth.getCurrUser() != undefined)
            this.author = this.auth.getCurrUser();
    }

    public onSubmit(form: FormGroup) {
        if (this.searchForm.valid) {
            this.searchService.query = form.value.searchText;
            this.searchService.keyword = form.value.searchText;
            const url = this.router.url.slice(1).split('/');
            if (url[0] == "search") {
                this.searchService.source = url[1];
            }
            else {
                if (url[0] == "author") {
                    if (url.length > 2) {
                        this.searchService.source = url[2];
                        this.searchService.id = url[1];
                    } else {
                        this.searchService.source = "author-blogs";
                        this.searchService.id = url[1];
                    }
                }
                else {
                    this.searchService.source = url[0];
                    this.searchService.id = this.auth.getCurrUser()._id;
                }

                this.router.navigate(['/search/' + this.searchService.source]);
            }

            this.searchService.search();
        }
    }

    login() {
        if (this.auth.isAuthenticated())
            this.auth.logout()
        else
            this.router.navigate(['/login'])

    }
}
