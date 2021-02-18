import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';

interface Categorie {
  nomCategorie: string,
}

interface groupeSanguin{
  nomGroupe: string,
}

@Component({
  selector: 'app-inscription-donneur',
  templateUrl: './inscription-donneur.component.html',
  styleUrls: ['./inscription-donneur.component.css']
})
export class InscriptionDonneurComponent implements OnInit {

  categories: Categorie[];

  groupeSanguins: groupeSanguin[];

    selectedCategorie: Categorie;
    selectedGroupeSanguin: groupeSanguin;
    groupeSanguin:string;
    suivantactivated =false;

  constructor(private http: HttpClient) { this.categories = [
    {nomCategorie: 'Choisir un type de compte'},
    {nomCategorie: 'Receveur'},
    {nomCategorie: 'Donneur'},
    {nomCategorie: 'Medecin'}
];
this.groupeSanguins = [
  {nomGroupe : "Choisir un groupe sanguin" },
  {nomGroupe : "O_neg" },
  {nomGroupe : "O_pos" },
  {nomGroupe : "A_neg" },
  {nomGroupe : "A_pos" },
  {nomGroupe : "B_neg" },
  {nomGroupe : "B_pos" },
  {nomGroupe : "AB_neg" },
  {nomGroupe : "AB_pos" }
];

}

  onCreatePost(postData: {nom: string;
                          prenom: string;
                          cin: string;
                          ville: string;
                          groupeSanguin: string;
                          tel: string;
                          mail: string;
                          adresse: string;  }) {
    // Send Http request
    postData.groupeSanguin=this.groupeSanguin;
    this.http
      .post(
        'http://localhost:8080//addDonneur',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onSelectedElementList(){
    console.log(this.selectedGroupeSanguin.nomGroupe);
    this.groupeSanguin=this.selectedGroupeSanguin.nomGroupe;
  }
  activatesuivant(){
    this.suivantactivated=true;
  }
  relocate_home()
{
     location.href = "receveur";
}

  ngOnInit(): void {

  }

}
