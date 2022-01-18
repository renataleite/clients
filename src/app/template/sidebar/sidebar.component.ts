import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  loggedUser!:string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getAuthenticatedUser();
  }
  ngAfterViewInit(): void {

  }
  logout(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
