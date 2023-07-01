import { UserService } from 'src/app/services/user.service';
import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public user = {
    username:'',
    password:'',
    nombre:'',
    apellido:'',
    email:'',
  }

  constructor(private userService:UserService, private snak:MatSnackBar){}

  ngOnInit(): void{
  }

  formSubmit(){

    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snak.open("El nombre de usuario es requerido", "Aceptar",
      {
        duration:3000
      }
      )
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("usuario guardado","usuario guardado con exito en la base de datos","success")
      },(error)=> {
        console.log(error);
        this.snak.open("ha ocurrido un error", "Aceptar",
        {
          duration:3000,
        }
        )
      } 
    )
  }
  
}
