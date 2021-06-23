import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { from, fromEvent, zip, forkJoin } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit,AfterViewInit {
  
// sources
nameSource=['Hiren', 'Gaurang', '1Rivet'];
colorSource=['red', 'green','blue'];

// Template ref

@ViewChild('name',{static:false}) public name:ElementRef;
@ViewChild('color',{static:false}) public color:ElementRef;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // const nameObservables = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event=> event.target.value));
    // const colorObservables= fromEvent<any>(this.color.nativeElement,'change').pipe(
    //      map(event=> event.target.value));    

  const nameObs=  fromEvent<any>(this.name.nativeElement,'change').pipe(
     map(event=> event.target.value),take(2));
     const colorObs= fromEvent<any>(this.color.nativeElement,'change').pipe(
     map(event=> event.target.value),take(1));

  //    // ex-01
  //    zip(nameObs,colorObs).subscribe(([name, color])=>{
  //      console.log('zip',name,color);
  //     //  this. creteBox(name, color,'elContainer');
  //    })
     // ex-02
     forkJoin(nameObs,colorObs).subscribe(([name, color])=>{
       debugger
       console.log('fork-join',name,color);
      //  this. creteBox(name, color,'elContainer');
     })
  }

//   creteBox(name, color,containerId){
// let el = document.createElement('div');
// el.innerText = name;
// el.setAttribute('class', color);
// document.getElementById(containerId).appendChild(el);
//   }
}
