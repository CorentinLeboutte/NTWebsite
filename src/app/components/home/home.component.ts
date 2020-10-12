import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TypeTheme } from 'src/app/models/theme-with-type-theme';
import { TypeThemeService } from '../../services/type-theme.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  TypeThemes : TypeTheme[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)  
  .pipe(    map(result => result.matches),    
  shareReplay()  );

  constructor(private breakpointObserver: BreakpointObserver,private Service:TypeThemeService ) { }

  ngOnInit(): void {

    console.log("homeloaded")

    this.Service.getall().subscribe((data)=> {this.TypeThemes = data;
    console.log(data);
  console.log(this.TypeThemes)});

  }

}
