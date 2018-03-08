import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  countries:any;
  
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      // the first argument is a function which runs on success
      data => { this.countries = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading countries')
    );
  }
}
