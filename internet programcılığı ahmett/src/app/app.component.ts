import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  image1="https://pin.it/2dVqug2"
  constructor(
    public servis: DataService
  ) { }
  ngOnInit(): void {
  }
  OturumKapat() {
    localStorage.clear();
    location.href = "/";
  }
}
