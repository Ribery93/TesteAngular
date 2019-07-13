import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ClientComponent} from "./client/client.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 constructor(private  nav : Router){}
  title = 'project';


}
