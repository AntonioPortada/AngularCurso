import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  persona = {
    nombre: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
