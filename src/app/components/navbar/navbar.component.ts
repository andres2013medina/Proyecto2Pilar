
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
  }

 ngOnInit() {
 }

 private signIn(): void {  
      this.auth.signIn();
       this.router.navigate(['/lista']);       
     }
   
   
   
     private afterSignIn(): void {
      this.router.navigate(['/']);
     }
       
     logout() {
       this.auth.signOut();  
     }
}
