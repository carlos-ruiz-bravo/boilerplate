import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectionsHomeComponent } from './detections/detections-home.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {path: 'detections', component: DetectionsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
