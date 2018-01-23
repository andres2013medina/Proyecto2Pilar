import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  private signIn(): void {  
       this.auth.signIn();
        this.router.navigate(['/']);       
      }
    
    
    
      private afterSignIn(): void {
       this.router.navigate(['/']);
      }
        
      logout() {
        this.auth.signOut();  
      }

}
