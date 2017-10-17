import { Component } from "@angular/core";

@Component({
    selector:'parentref-selector',
    templateUrl:'./parentref.component.html'
})
export class ParentRefComponent{
constructor(){

}
ngOnInit(){

}
ShowReferenceVariable(child){
console.log(child);
}
}