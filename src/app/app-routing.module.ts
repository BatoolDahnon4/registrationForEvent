import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {path:'',component:AppComponent,
    children:[
      {path:'', redirectTo:'card', pathMatch:'full'},
      {path:'Registration',component:CardComponent},
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
