import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeTheme } from '../models/theme-with-type-theme';

@Injectable({
  providedIn: 'root'
})
export class TypeThemeService {

  constructor(private http:HttpClient) { 


  }
  public getall() : Observable <TypeTheme[]> {
    return this.http.get<TypeTheme[]>("http://localhost:5000/api/TypeTheme");
    
  }
}
