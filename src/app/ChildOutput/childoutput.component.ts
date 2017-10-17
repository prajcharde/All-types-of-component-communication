import { Component, Input, Output, OnInit, EventEmitter,OnDestroy } from "@angular/core";
import {Observable, Subscription} from 'rxjs/Rx';
@Component({
    selector:'child-output',
    templateUrl:'./childoutput.component.html'  
})

export class ChildOutput implements OnInit{
   
    ticks=0;
    private timer;
    private Sub:Subscription;
    @Output() countDown=new EventEmitter<any>();

    constructor(){
    }

    ngOnInit(){
        this.timer=Observable.timer(1000,1000);
        this.Sub=this.timer.subscribe(t=>this.TickerFunction(t));
    }

//ticker function
    TickerFunction(tick){
        this.ticks=tick;
        this.countDown.emit(this.ticks);
    }

    ngOnDestroy(){
        console.log("Destroy Timer");
        this.Sub.unsubscribe();
    }

}