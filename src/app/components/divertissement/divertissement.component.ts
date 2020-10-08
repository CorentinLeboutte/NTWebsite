import { BreakpointObserver, Breakpoints  } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map,shareReplay } from 'rxjs/operators';
import { ThemeLite } from 'src/app/models/theme-lite';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-divertissement',
  templateUrl: './divertissement.component.html',
  styleUrls: ['./divertissement.component.scss']
})
export class DivertissementComponent implements OnInit {

  typetheme: number;
  themes : ThemeLite[] = [];
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)  
  .pipe(    map(result => result.matches),    
  shareReplay()  );

  constructor(private breakpointObserver: BreakpointObserver, private service: ThemeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
       this.typetheme = param ['cat'];
        this.service.GetByTypeTheme(this.typetheme).subscribe(data =>{this.themes = data
    console.log(data)});
        });
  }
}

// }
// export class ExpansionOverviewExample {
//   panelOpenState = false;}