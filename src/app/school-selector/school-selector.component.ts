// school-selector.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-selector',
  templateUrl: './school-selector.component.html',
  styleUrls: ['./school-selector.component.css']
})
export class SchoolSelectorComponent implements OnInit {
  schoolForm: FormGroup;
  countries: any[] = []; // Initialize the variable here
  cities: any[] = [];
  schools: any[] = [];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.schoolForm = this.formBuilder.group({
      country: [''],
      city: [''],
      school: ['']
    });
  }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe(data => {
      this.countries = data.countries;
    });
  }

  onCountryChange(): void {
    const countryId = this.schoolForm.value.country;
    if (countryId) {
      this.apiService.getCities(countryId).subscribe(data => {
        this.cities = data.country.Cities;
        this.schoolForm.get('city')!.setValue('');
        this.schoolForm.get('school')!.setValue('');
      });
    }
  }

  onCityChange(): void {
    const cityId = this.schoolForm.value.city;
    if (cityId) {
      this.apiService.getSchools(cityId).subscribe(data => {
        this.schools = data.city.Schools;
        this.schoolForm.get('school')!.setValue('');
      });
    }
  }

  onSubmit(): void {
    const selectedCountry = this.countries.find(country => country.id === this.schoolForm.value.country);
    const selectedCity = this.cities.find(city => city.id === this.schoolForm.value.city);
    const selectedSchool = this.schools.find(school => school.id === this.schoolForm.value.school);

    // Navigate to confirmation page with selected data
    this.router.navigate(['/confirmation'], {
      state: {
        country: selectedCountry,
        city: selectedCity,
        school: selectedSchool
      }
    });
  }
}
