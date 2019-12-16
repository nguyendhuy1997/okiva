import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ContactComponent} from './components/contact/contact.component';
import {SupportComponent} from './components/support/support.component';
import {RecruitmentComponent} from './components/recruitment/recruitment.component';
import {FeatureComponent} from './components/feature/feature.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'recruitment', component: RecruitmentComponent },
  { path: 'feature', component: FeatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
