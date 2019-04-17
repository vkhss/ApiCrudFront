import { Component, OnInit, Injectable } from '@angular/core';
import {ClientService} from "../../controller/client.service";
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private clientService: ClientService) { }
  
  ngOnInit() {
    this.clientService.getAll().subscribe(res =>{
      console.log(res)
    });
  }
}
