import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-materias',
  templateUrl: './list-materias.component.html',
  styleUrls: ['./list-materias.component.css']
})
export class ListMateriasComponent implements OnInit {

  constructor(
    private router:Router
  ) {

   }

  ngOnInit(): void {
  }

}
