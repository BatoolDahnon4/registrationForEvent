import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GazaComponent } from './gala/gaza/gaza.component';
import { ConferencegazaComponent } from './conference/conferencegaza/conferencegaza.component';
import { ConferencewestbankComponent } from './conference/conferencewestbank/conferencewestbank.component';
import { WestbankComponent } from './gala/westbank/westbank.component';
// import { GalaGazaComponent } from './gala/galagaza/galagaza.component';
// import { WestbankComponent } from './gala/westbank/westbank.component';


const routes: Routes = [
  {path:'',component:AppComponent,
    children:[
      {path:'', redirectTo:'card', pathMatch:'full'},
      {path:'Registration',component:CardComponent},
       {path:'gala/gaza',component:GazaComponent},
       {path:'gala/westbank',component:WestbankComponent},
      {path:'conference/gaza',component:ConferencegazaComponent},
      {path:'conference/westbank',component:ConferencewestbankComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
