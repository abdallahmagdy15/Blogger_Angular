import { Author } from './../_models/author';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() author: Author = new Author("", "", "", "", "", "");
  constructor() { }

  ngOnInit(): void {
  }

}
