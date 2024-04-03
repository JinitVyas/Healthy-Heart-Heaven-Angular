import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwarenessComponent } from './awareness/awareness.component';
import { HearFromPatientsComponent } from './hear-from-patients/hear-from-patients.component';
import { PredictionModelComponent } from './prediction-model/prediction-model.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'Awareness', component: AwarenessComponent },
    { path: 'PatientsSpeaks', component: HearFromPatientsComponent },
    { path: 'QuickCheckup', component: PredictionModelComponent },
    { path: 'predict', component: PredictionModelComponent },
    { path: '', redirectTo: '/home', pathMatch:'full' },
];
