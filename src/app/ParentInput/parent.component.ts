import { Component, Input,Output,OnInit} from "@angular/core";
import { Employee } from "./employee";

@Component({
    selector:'parent-input',
    templateUrl:'./parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentInput implements OnInit{
    title = 'parent';
    
    empDetails:Employee;

    employees:Employee[]=[

    {empId:1,empName:'abc',empEmail:'abc@gmail.com'},
    {empId:2,empName:'pqr',empEmail:'pqr@gmail.com'},
    {empId:3,empName:'xyz',empEmail:'xyz@gmail.com'}

    ];

constructor(){

}

ngOnInit(){

}
//log details
logDetails(model){
    this.empDetails=model;
}


}