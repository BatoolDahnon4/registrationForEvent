import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MyDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ApiModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents:[MyDialogComponent],
  providers: [    {
    provide: Configuration, useFactory:()=>{
      return new Configuration({basePath: 'https://localhost:7110'})
    },
    multi : false
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
