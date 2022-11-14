import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componenteb',
  templateUrl: './componenteb.component.html',
  styleUrls: ['./componenteb.component.css']
})
export class ComponentebComponent implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {
  }
atras(){
this.nav.navigate(['home'])
}
}
