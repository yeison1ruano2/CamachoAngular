import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.services';

@Component({
  selector: 'app-list-materias',
  templateUrl: './list-materias.component.html',
  styleUrls: ['./list-materias.component.css']
})
export class ListMateriasComponent implements OnInit {
  headers=['Codigo','Descripción','Grupo','Semestre','IH'];
  constructor(
    public materiaService:MateriaService,
    private router:Router
  ) {

   }

   tableData:any;

  ngOnInit(): void {
    this.getAllMaterias();
  }


  
  getAllMaterias(){
    this.materiaService.readMaterias().subscribe(res=>{
      this.tableData=res;
    });
  }
}
