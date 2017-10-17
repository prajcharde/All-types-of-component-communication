import { Component, OnInit, ViewChild } from "@angular/core";
import { ChildViewComponent } from "../ChildView/childview.component";

@Component({
    selector:'parentview-selector',
    templateUrl:'./parentview.component.html'
})
export class ParentViewComponent  implements OnInit{
constructor(){

}
ngOnInit(){

}
@ViewChild(ChildViewComponent)
private ChildViewComponent:ChildViewComponent;
logIn(){
    this.ChildViewComponent.sayHello();
}
logOut(){
    this.ChildViewComponent.goodBye();
}
}