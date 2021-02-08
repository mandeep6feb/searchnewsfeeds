import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AppService {
  private baseurl = 'https://newsapi.org/v2/';
  // public baseUrl = 'localhost:3400/api/';

  News = [
    {name: 'ABC News' ,  value: 'abc-news-au'},
    {name: 'BBC News' ,  value: 'bbc-news'},
    {name: 'BBC Sport' ,  value: 'bbc-sport'},
    {name: 'ESPN' ,  value: 'espn'},
    {name: 'Business Insider' ,  value: 'business-insider'},
    {name: 'Buzzfeed' ,  value: 'buzzfeed'},
    {name: 'CNBC' ,  value: 'cnbc'},
    {name: 'CNN' ,  value: 'cnn'},
  ];
  constructor(public http: HttpClient) {}
  getdata(url) {
    const getUrl = this.baseurl;
    return this.http.get(getUrl + url);
  }

}
