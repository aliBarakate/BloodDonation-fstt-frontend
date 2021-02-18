import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data: any;
  responses : any;
  constructor(http: HttpClient) {

    http.get('http://localhost:8080/Statistiques')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });

    this.data = {
      labels: ['O_neg', 'O_pos', 'A_neg', 'A_pos', 'B_neg', 'B_pos', 'AB_neg','AB_pos'],
      datasets: [
          {
              label: 'Donneurs',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40,21]
          },
          {
              label: 'Receveurs',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90,74]
          }
      ]
  }
   }

  ngOnInit(): void {
  }

}
