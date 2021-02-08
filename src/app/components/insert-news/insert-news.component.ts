import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
export class Mynews {
    author: any;
    title: any;
    description: any;
    url: any;
    urlToImage: any;
    publishedAt: any;
}
@Component({
    selector: 'app-insert-news',
    templateUrl: './insert-news.component.html',
    styleUrls: ['./insert-news.component.css']
})
export class InsertNewsComponent implements OnInit {

    selectnews: any;
    details: any;
    data: any;
    searhing: any;
    selectChannel: any;
    selectedPage: any;
    apiKey = 'b5c5edf35c5d4ce69c4a4afe73724fdc';

    p = 1;
    // collection: any[] = someArrayOfThings;
    constructor(public api: AppService) {
        this.details = new Mynews();
    }
    getnews() {
        const pageSize = 100;
        this.api.getdata('top-headlines?sources=' + this.selectnews  + '&pageSize=' + pageSize + '&sortBy=publishedAt'  + '&apikey=' + this.apiKey ).subscribe( res => {
            this.details = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getTopdata() {
        const page = 100;
        this.api.getdata('top-headlines?sources=' + 'buzzfeed,cnbc,cnn,abc-news-au,bbc-news,bbc-sport,espn,business-insider'
        + '&pageSize=' + page  + '&sortBy=publishedAt' + '&apikey=' + this.apiKey ).subscribe( res => {
            this.details = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getSearch() {
        const pageSize = 100;
        this.api.getdata('top-headlines?sources=' + this.selectChannel.toString()  + '&pageSize=' + pageSize  + '&sortBy=publishedAt' + '&apikey=' + this.apiKey).subscribe( res => {
                this.details = res;
                console.log(res);
            }, err => {
                console.log(err);
            });
    }
    getsearchdata() {
        const pageSize = 100;
        this.api.getdata('everything?' + 'q=' + this.searhing  + '&pageSize=' + pageSize  + '&sortBy=publishedAt' + '&apikey=' + this.apiKey).subscribe( res => {
            this.details = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {
        this.getTopdata();
    }
}
