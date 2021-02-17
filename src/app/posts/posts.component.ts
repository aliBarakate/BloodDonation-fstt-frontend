import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [MessageService]
})
export class PostsComponent implements OnInit {
  responses : any;
  http2 :any;
  //url:any;
  texturl='http://localhost:8080/findAllDonneursForReceveur';
  constructor(http: HttpClient,private messageService: MessageService) {
    this.http2=http
    //this.responses = new Array<any>();
    http.get('http://localhost:8080/findAllDonneursForReceveur'+'/?ville=RABAT'+'&grpSanguin=AB_pos')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });
  }

  onClickElement(response) {
        //this.responses = new Array<any>();
        this.http2.get('http://localhost:8080/sendmail?mail='+response.mail)
        .subscribe(responses => {
            console.log(responses);
            this.responses=responses;
        });
    console.log(response.mail)
    this.showSuccess(response);
  }

  showSuccess(response) {
    this.messageService.add({severity:'success', summary: 'Email envoyé à '+response.nom, detail: response.nom+' à était notifié au mail suivant '+response.mail});
}

  ngOnInit(): void {
  }

}
