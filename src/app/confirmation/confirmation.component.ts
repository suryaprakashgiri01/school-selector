import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  selectedCountry: any;
  selectedCity: any;
  selectedSchool: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const state = history.state;
    this.selectedCountry = state?.country;
    this.selectedCity = state?.city;
    this.selectedSchool = state?.school;
  }
}
