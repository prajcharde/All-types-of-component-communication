import { Component, Input,Output,OnInit} from "@angular/core";

@Component({
    selector:'parent-output',
    templateUrl:'./parentoutput.component.html'
})

export class ParentOutput implements OnInit{
ticks;

constructor(){
}

ngOnInit(){
}

OnTick(tik){
    this.ticks=tik;
}

}