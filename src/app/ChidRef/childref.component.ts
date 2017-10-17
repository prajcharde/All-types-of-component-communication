import { Component } from "@angular/core";

@Component({
selector:'childref-selector',
templateUrl:'./childref.component.html'
})
export class ChildRefComponent{
Constructor(){

}
ngOnInit(){

}

logIn(){
alert("Login successful");
}
logOut(){
alert("Logout successful");
}
}