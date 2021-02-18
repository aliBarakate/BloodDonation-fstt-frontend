import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceveurService {
  nom: string;
  prenom: string;
  cin: string;
  ville: string;
  groupeSanguin: string;
  tel: string;
  mail: string;
  constructor() { }

  getNom(){
    return this.nom;
  }

  getPrenom(){
    return this.prenom;
  }

  getCin(){
    return this.cin;
  }

  getVille(){
    return this.ville;
  }

  getGroupeSanguin(){
    return this.groupeSanguin;
  }

  getTel(){
    return this.tel;
  }

  getMail(){
    return this.mail;
  }

  setNom(nom){
     this.nom=nom;
  }

  setPrenom(prenom){
    this.prenom=prenom;
  }

  setCin(cin){
    this.cin=cin;
  }

  setVille(ville){
    this.ville=ville;
  }

  setGroupeSanguin(groupeSanguin){
    this.groupeSanguin=groupeSanguin;
  }

  setTel(tel){
    this.tel=tel;
  }

  setMail(mail){
    this.mail=mail;
  }

}
