import { Injectable } from '@angular/core';
import { Project } from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[];

  constructor() {
      this.projects = [
        {
          titulo: "prueba",
          descripcion: "Prueba de proyecto",
          imagenes: [],
          url:"string",
          fecha: 2020,
          cliente:"nadie",
          urlCliente:"blablabla",
          categoría: "desarrollo",
          tecnologías: "MEAN", 
        }
      ]
    }

    getProjects(){
      return this.projects
    }


}

