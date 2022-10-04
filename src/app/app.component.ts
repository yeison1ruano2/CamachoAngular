import { Component } from '@angular/core';
//import {Database,set,ref,update} from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'camachoAngularFirebase';
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
}
