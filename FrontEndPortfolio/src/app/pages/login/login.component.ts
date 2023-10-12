import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  loginData = {
    username:'',
    password:''
  }

  constructor(private snak:MatSnackBar, private login:LoginService,private router:Router){}

  ngOnInit(): void{}

  formSubmit(){
    if (this.loginData.username.trim() == '' || this.loginData.username.trim() ==  null){
      this.snak.open('El nombre de usuario es requerido', 'Aceptar',{
      duration:3000
    })
      return
    }
    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snak.open('La contraseña es requerida', 'Aceptar',{
      duration:3000
    })
      return
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=> {
        console.log(data);

        this.login.loginUser(data.token);
        this.login.currentUser().subscribe((user:any) => {
          this.login.setUser(user);
          console.log(user);

          if(this.login.getUserRol() == "ADMIN"){
            //window.location.href = '/admin'
            this.router.navigate(['admin']);
            this.login.LoginStatusSubject.next(true);
          }else if(this.login.getUserRol() == "NORMAL"){
            //window.location.href = '/userDashboard'
            this.router.navigate(['userDashboard']);
            this.login.LoginStatusSubject.next(true);
          }else{
            this.login.logOut()
          }
        })
      },(error)=>{
        console.log(error);
        this.snak.open("Datos incorrectos, intente nuevamente ", "Aceptar"),{
          duration:3000
        }
      })
  }
}
