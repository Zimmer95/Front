import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService){

    }

    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        const token = this.login.getToken()
        if(token != null){

            authRequest = authRequest.clone({
                setHeaders : {Authorization : `Bearer ${token}`}
            })
        }
        return next.handle(authRequest);
    }

}
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi:true
    }
]


