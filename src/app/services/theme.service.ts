import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThemeLite } from '../models/theme-lite';
import { ThemeDetailed } from '../models/theme-detailed';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http:HttpClient) { }

  public GetAll() : Observable<ThemeLite[]>{
    return this.http.get<ThemeLite[]>("http://localhost:5000/api/theme");
  }

  public GetById(id : number) : Observable<ThemeDetailed>{
    return this.http.get<ThemeDetailed>("http://localhost:5000/api/theme/getbyid/" + id);
  }

  public GetByTypeTheme(id : number) : Observable<ThemeLite[]>{
    return this.http.get<ThemeLite[]>("http://localhost:5000/api/theme/getbytypetheme/"+ id);
  }
}
