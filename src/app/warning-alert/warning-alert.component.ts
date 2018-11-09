import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'app-warning-component',
    template: `
    <h3> Warning </h3>  
    `,
    styles: [` h3 { color : red; border : 1px solid red }`]
  })

  export class WarningAlertComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
  
  }
  