import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-etqw-smurf-checker',
  templateUrl: './etqw-smurf-checker.component.html',
  styleUrls: ['./etqw-smurf-checker.component.scss']
})
export class EtqwSmurfCheckerComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    // tslint:disable-next-line:only-arrow-functions
    fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      // The API call was successful!
      return response.json();
      // tslint:disable-next-line:only-arrow-functions
    }).then(function (data) {
      // This is the JSON from our response
      console.log(data);
      // tslint:disable-next-line:only-arrow-functions
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });

    // this.http.get('https://cors-anywhere.herokuapp.com/https://www.gs4u.net/ru/s/147096.html', {
    // })
    //   .subscribe(res => console.log(res));


    // this.http.get('https://cors-anywhere.herokuapp.com/https://www.gs4u.net/ru/s/147096.html', {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // })
    //   .subscribe(res => console.log(res));

  }
}
