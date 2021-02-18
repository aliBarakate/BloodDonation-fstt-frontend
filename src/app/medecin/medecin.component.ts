import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {


  responses : any;
  http2 :any;
  //url:any;
  texturl='http://localhost:8080/findAllDonneursForReceveur';
  constructor(http: HttpClient) {
    this.http2=http
    //this.responses = new Array<any>();
    http.get('http://localhost:8080/findAllDonneurs')
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

onClickDelete(id){
  this.http2.delete('http://localhost:8080/deleteByCin/'+id)
  .subscribe(responses => {
      console.log(responses);
      this.responses=responses;
  });
}


  ngOnInit(): void {
  }

}
