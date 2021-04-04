import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectsService } from "../../services/projects.service";
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectService:ProjectsService) {

   }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

}
