import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  public miPortfolio:any;
  constructor(private datos:PortfolioService, private login:LoginService){}
    
  ngOnInit(): void{

    this.login.currentUser().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
      console.log(this.miPortfolio.nombre);
    });
    
  }

}

