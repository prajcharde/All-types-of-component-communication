import { Component, OnInit } from "@angular/core";

@Component({
    selector:'childview-selector',
    templateUrl:'./childview.component.html'
})
export class ChildViewComponent implements OnInit{
message:string;
constructor(){

}
ngOnInit(){

}
sayHello(){
    this.message="welcome";
}
goodBye(){
    this.message="bye";
}
}