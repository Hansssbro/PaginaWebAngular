import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("inicialapaginasonsote")
  }
  navegacion1(){
    this.router.navigate(['web2'])
  }

}
