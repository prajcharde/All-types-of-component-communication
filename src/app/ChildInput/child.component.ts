import { Component,Input,Output,OnInit } from "@angular/core";

@Component({
    selector:'child-input',
    templateUrl:'./child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildInput implements OnInit{


@Input() employeeDetails:any;
constructor(){
}

ngOnInit(){
}

}