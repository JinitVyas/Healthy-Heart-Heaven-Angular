import { Component } from '@angular/core';
import { RouterOutlet, Router  } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AwarenessComponent } from './awareness/awareness.component';
import { PredictionModelComponent } from './prediction-model/prediction-model.component';
import { HearFromPatientsComponent } from './hear-from-patients/hear-from-patients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,FooterComponent,AwarenessComponent, PredictionModelComponent, HearFromPatientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HealthyHeartHeaven';

  constructor (private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

}
