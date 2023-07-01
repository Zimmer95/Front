import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginService, public router:Router){}

  ngOnInit(): void {}

  public logOut(){
    this.login.logOut();
    window.location.reload();
  }

  public selectProfile(){

    if(this.login.getUserRol() == "ADMIN"){
      this.router.navigate(['admin']);
    }else if(this.login.getUserRol() == "NORMAL"){
      this.router.navigate(['userDashboard']);
    }

  }

}
