import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchByHashtagForm;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.searchByHashtagForm = this.formBuilder.group({
      hashtag: ''
    });
  }

  onSubmit() {
    console.warn('You want to search posts by hashtag',this.searchByHashtagForm.controls.hashtag.value);
    this.searchByHashtagForm.reset();
  }

}
