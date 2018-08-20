import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workshop';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAfSsum37ZLs95LTdEc57nOA5JHCFFvS4E",
      authDomain: "ng-recipes-32b7d.firebaseapp.com",
    })
  }
}
