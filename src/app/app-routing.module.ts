import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes =[
  {path:'facesnaps', component:FaceSnapListComponent},
  {path:'', component:LandingPageComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
}
)
export class AppRoutingModule{}
