import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:FormGroup ;
  constructor(private fb:FormBuilder,private userservice:UserService,private _snackBar: MatSnackBar) {
    this.user=this.fb.group({
      username:['',[Validators.required,Validators.pattern('^[a-z0-9]*'),Validators.minLength(8)]],
      firstname: ['', [Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]],
    });
   }

  ngOnInit(): void {
  }
  


  submit(){
this.userservice.sentData(this.user.value)
this.user.reset();
this._snackBar.open("User","added", {
  duration: 2000,
});
  }
}
