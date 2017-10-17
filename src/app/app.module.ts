import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildInput } from "./ChildInput/child.component";
import { ParentInput } from "./ParentInput/parent.component";
import { ChildOutput } from "./ChildOutput/childoutput.component";
import { ParentOutput } from "./ParentOutput/parentoutput.component";
import { ChildRefComponent } from "./ChidRef/childref.component";
import { ParentRefComponent } from "./ParentRef/parentref.component";
import { ParentViewComponent } from "./ParentView/parentview.component";
import { ChildViewComponent } from "./ChildView/childview.component";

@NgModule({
  declarations: [
    AppComponent,ParentInput,ChildInput,ChildOutput, ParentOutput,ChildRefComponent,ParentRefComponent,ParentViewComponent,ChildViewComponent
],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
