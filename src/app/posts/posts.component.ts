import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  responses : any;
  http2 :any;
  //url:any;
  texturl='http://localhost:8080/findAllDonneursForReceveur';
  constructor(http: HttpClient) {
    this.http2=http
    //this.responses = new Array<any>();
    http.get('http://localhost:8080/findAllDonneursForReceveur'+'/?ville=RABAT'+'&grpSanguin=AB_pos')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });
  }

  onClickElement(mail) {
        //this.responses = new Array<any>();
        this.http2.get('http://localhost:8080/sendmail?mail='+mail)
        .subscribe(responses => {
            console.log(responses);
            this.responses=responses;
        });
    console.log(mail)
  }

  ngOnInit(): void {
  }

}
