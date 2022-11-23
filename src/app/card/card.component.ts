import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import{FormControl,FormGroup, NgForm} from '@angular/forms';
import { Guest, GuestService } from '../rest/typescript-angular-client-generated (1)';
import {MatTableDataSource } from '@angular/material/table'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


export interface DialogData {
 sucsses:any;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
 errorMessage:any;
 isHidden = true;

registration:Guest = {name:"", position:"",email:"",companyName:"",phoneNumber:"",source:"westBank"}
dataSource: MatTableDataSource<Guest> = new MatTableDataSource<Guest>([]);
email: string='';  
isSubmitted = false;
constructor(private http : HttpClient , private gstServ :GuestService ,public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  register(form:NgForm){
    this.isSubmitted = true;
  

    if (!form.form.valid) {
       form.form.markAllAsTouched();
       
    }
    
    else  {
     this.errorMessage=''
      this.gstServ.apiGuestAddGuestPost(this.registration).subscribe(res=>{
        console.log(res);
        this.openDialog();
        console.log(res)
        var data= this.registration;
        console.log(this.registration);

        }, 
        error=>{
          console.log(error);
          this.errorMessage=error.error;
          this.isHidden=false;

        })
      
      }
  }

  openDialog() {
  this.dialog.open(MyDialogComponent);
  console.log("Hii")
    };
   
  
}

