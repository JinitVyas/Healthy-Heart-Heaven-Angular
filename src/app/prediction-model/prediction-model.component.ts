import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-prediction-model',
  standalone: true,
  imports: [NgModule],
  templateUrl: './prediction-model.component.html',
  styleUrl: './prediction-model.component.css'
})
export class PredictionModelComponent {

  constructor(private http: HttpClient) { }

  sendData(age: Number){
    const url = "http://localhost:4200/app"
  }
}
