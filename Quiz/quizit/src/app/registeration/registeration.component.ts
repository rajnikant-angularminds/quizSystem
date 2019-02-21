import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizServiceService } from '../quiz-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registerUrl='http://localhost:4000/quizapp/register/ ';
  registrationForm:FormGroup;
  constructor(private fb:FormBuilder,private service:QuizServiceService,private router:Router,private http:HttpClient,private toastr: ToastrService ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  register()
  {
    // console.log("inside registration");
     this.http.post<any>(this.registerUrl,this.registrationForm.value)
    .subscribe((res: any) => {
      if(res.status === 'success'){
      //  console.log("Succfully registered ");
       this.toastr.success('Record Saved successfully!', 'Success!');
       this.router.navigate(['login']);
    }
  })
  }

}
