import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { Configuration } from './rest/typescript-angular-client-generated (1)';
import { ApiModule } from './rest/typescript-angular-client-generated (1)/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { environment } from 'src/environments/environment';
import { GazaComponent } from './gala/gaza/gaza.component';
import { ConferencewestbankComponent } from './conference/conferencewestbank/conferencewestbank.component';
import { CommonModule } from '@angular/common';
import { ConferencegazaComponent } from './conference/conferencegaza/conferencegaza.component';
import { WestbankComponent } from './gala/westbank/westbank.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MyDialogComponent,
    ConferencewestbankComponent,
    ConferencegazaComponent,
    GazaComponent,
    WestbankComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ApiModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule
  ],
  entryComponents:[MyDialogComponent],
  providers: [    {
    provide: Configuration, useFactory:()=>{
      return new Configuration({basePath: environment.basePath})
    },
    multi : false
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
