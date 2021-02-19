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
        this.data = {
          labels: ['O_neg', 'O_pos', 'A_neg', 'A_pos', 'B_neg', 'B_pos', 'AB_neg','AB_pos'],
          datasets: [
            {
                label: 'Donneurs',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [this.responses.o_neg_offre, this.responses.o_pos_offre, this.responses.a_neg_offre, this.responses.a_pos_offre, this.responses.b_neg_offre, this.responses.b_pos_offre, this.responses.ab_neg_offre,this.responses.ab_pos_offre]
            },
            {
                label: 'Receveurs',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [this.responses.o_neg_demande, this.responses.o_pos_demande, this.responses.a_neg_demande, this.responses.a_pos_demande, this.responses.b_neg_demande, this.responses.b_pos_demande, this.responses.ab_neg_demande,this.responses.ab_pos_demande]
            }
        ]
      }
    });


   }

  ngOnInit(): void {
  }

}
