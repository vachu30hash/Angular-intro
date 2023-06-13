import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../services/log.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Update the import statement for FormGroup, FormControl, and Validators.


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeid:any;
  password:string="";
  error?:string;
  userList:any[]=[];
  logform:boolean=true;
  errorEmpId?: string;
  errorPassword? :string;
  employeeDetails: any;
  currentPassword:string="";
  errorCurrentPassword?:string;
  newPassword:string="";
  errorNewPassword?:string;
  retypenewPassword:string="";
  errorRetypenewPassword?:string;
  
  constructor(private log:LogService,private route:Router) { 
  }

    
  ngOnInit(): void {
      this.log.getUserDetails().subscribe( data => {
        this.employeeDetails = data; 
        this.userList=data;
      })

  }
  

  toggle(){
    this.logform=this.logform?false:true;
    this.clear()
  }
clear(){
  this.errorEmpId ="";
  this.errorCurrentPassword ="";
  this.errorNewPassword ="";
  this.newPassword = ""
  this.retypenewPassword = ""
  this.employeeid = ""
  this.password=""
  this.currentPassword = ""
  this.errorRetypenewPassword ="";

}




 login():void{
  this.errorEmpId ="";
  this.errorPassword ="";
   if(this.employeeid ==  null || this.employeeid == undefined || this.employeeid == "" ){
      this.errorEmpId="Please enter the emp ID";
   }
   if( this.password == null || this.password == undefined || this.password == "" ) {
       this.errorPassword="Please enter the password";
   }
   else{
  let user= this.userList.filter((a)=>a.employeeid==this.employeeid)
    if(user.length>0){
        if(user[0].employeeid == this.employeeid && user[0].password == this.password){
          console.log("vaild")
              alert("login successfully")
          // sessionStorage.setItem("username",response.user.username);
          // sessionStorage.setItem("usertype",response.user.type);
          // sessionStorage.setItem("token",response.accessToken);
          // sessionStorage.setItem("employeeid",response.user.employeeid);
          // this.log.username=response.user.username;
          // this.log.usertype=response.user.type;
          // this.log.token=response.accessToken;
          this.route.navigate(['admin/home']);
        }else{
          alert("invaild credential")
          console.log("invaild credential")
        }
    }else{
      alert("invaild credential")
      console.log("invaild employeeId/password")
    }
    }
 }
validate(){
  
  this.errorEmpId ="";
  this.errorCurrentPassword ="";
  this.errorNewPassword ="";
  this.errorRetypenewPassword ="";
    if(this.employeeid ==  null || this.employeeid == undefined || this.employeeid == ""){
      this.errorEmpId="Please enter the emp ID";
    }
     if(this.currentPassword == null || this.currentPassword == undefined || this.currentPassword == "") {
        this.errorCurrentPassword="Please enter the current password";
    }
     if(this.newPassword == null || this.newPassword == undefined || this.newPassword == "") {
      this.errorNewPassword="Please enter the  NewPassword";
  }
   if(this.retypenewPassword == null || this.retypenewPassword == undefined|| this.retypenewPassword == "") {
    this.errorRetypenewPassword="Please enter the Retype newPassword ";
    }
    else(this.newPassword != this.retypenewPassword)
      this.errorRetypenewPassword ="password not match";
    
}



onchange(n:any){
  switch(n){
    case 0:
        this.errorEmpId="";
        break;
    case 1:
        this.errorCurrentPassword="";
        break;
    case 2:
          this.errorNewPassword="";
          break;
    case 3:
            this.errorRetypenewPassword="";
            break;
    case 4:
              this.errorPassword="";
              break;
  }
 
  
 
 
}














 //new User Registration 

//  register():void{
//     alert("Called");
//      this.rerror="";
//      let emailregex:RegExp=/^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/


//      if(this.rusername.length==0 || this.rpassword.length==0 || this.vpassword.length==0 )
//      this.rerror="Fill all the fields";

//      else if(this.rusername.length<4)
//      this.rerror="Username should be atleast 4 charectars long"

//      else if(this.rpassword.length<6)
//      this.rerror="password should be atleast 6 charectars long"

//      else if(this.rpassword!=this.vpassword)
//      this.rerror="Username and password should match"
     
//      else if(!emailregex.test(this.remail))
//      this.rerror="not in email format"

    
//      else{
//          this.rstatus=true;
       
//                   this.rstatus=true;
//                   let obj={username:this.rusername,password:this.rpassword,type:"user",email: this.remail}
//                   this.log.register(obj).subscribe({
//                     next: (result:any)=>{
//                          if(result.success == false)
//                            alert("User already exists")
//                          else{
//                          alert("User successfully registered");
//                          this.logform=true;
//                          this.rstatus=false;
//                          }
//                      },
//                      error: ()=>{
//                          alert("There is problem , Please try again or later")
//                          this.rstatus=false;
//                      }}
//                   )
//               }
}