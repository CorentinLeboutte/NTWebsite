import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  constructor(private _dateAdapter: DateAdapter<any>,) { 

    
  }

  ngOnInit(): void {
    this._dateAdapter.setLocale('fr');
  }

}
