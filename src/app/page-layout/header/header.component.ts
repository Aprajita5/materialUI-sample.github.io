import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/core/helpers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  isLoggedIn = false;
  userId: any;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    
  }

  btnClick(route) {
    if(route=='add'){
      this.router.navigateByUrl("/emplyee-detail");
    }
    if(route=='list'){
      this.router.navigateByUrl("/emplyeelist");
    }
    if(route=='home'){
      this.router.navigateByUrl('');
    }
    
  }

}
