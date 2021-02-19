import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  data: any;
  responses : any;
  constructor(http: HttpClient) {
    http.get('http://localhost:8080/Statistiques')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    this.data = {
      labels: ['O_neg', 'O_pos', 'A_neg', 'A_pos', 'B_neg', 'B_pos', 'AB_neg','AB_pos'],
        datasets: [
            {
              data: [this.responses.o_neg_demande, this.responses.o_pos_demande, this.responses.a_neg_demande, this.responses.a_pos_demande, this.responses.b_neg_demande, this.responses.b_pos_demande, this.responses.ab_neg_demande,this.responses.ab_pos_demande],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
      });
}

  ngOnInit(): void {
  }

}
