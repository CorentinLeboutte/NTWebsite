import { BreakpointObserver, Breakpoints  } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map,shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-insolite',
  templateUrl: './insolite.component.html',
  styleUrls: ['./insolite.component.scss']
})
export class InsoliteComponent implements OnInit {

  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)  
  .pipe(    map(result => result.matches),    
  shareReplay()  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }
}
