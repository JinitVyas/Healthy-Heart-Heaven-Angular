// import { CommonModule } from '@angular/common'; //Nthi jarur
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Data Transfer
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel

@Component({
  selector: 'app-prediction-model',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './prediction-model.component.html',
  styleUrl: './prediction-model.component.css'
})
export class PredictionModelComponent {
  userData: number[] = new Array(13).fill(0);
  prediction : number | undefined;

  constructor(private http: HttpClient) { }
  sendData(data : number[]){
    // console.log(data)
    const url = "http://localhost:5000/predict"
    return this.http.post<any>(url, data);
  }
  sendUserData(data : number[]) {
    console.log("sending..")
    this.sendData(data)
    .subscribe(response => {
      console.log('Data received from backend:', response);
      this.prediction = response.prediction;
      if (this.prediction) {
        alert("The patient is in danger")
      }
      else{
        alert("The patient is safe")
      }
    },
    error => {
      console.log('Error sending user data:', error);
    });
  }
  
}
