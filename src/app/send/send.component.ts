import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  constructor(private http: HttpClient) { }

  onCreatePost(postData: {nom: string;
                          prenom: string;
                          cin: string;
                          ville: string;
                          groupeSanguin: string;
                          tel: string
                          mail: string;  }) {
    // Send Http request
    this.http
      .post(
        'http://localhost:8080/addDonneur',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  ngOnInit(): void {
  }

}
