import { Component, OnInit } from '@angular/core';
import {RolService} from './rol.service';	

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService]
})
export class RolComponent implements OnInit {

  constructor(private rolServie:RolService) { }

  ngOnInit() {
  }

}
