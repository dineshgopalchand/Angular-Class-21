import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

  menuSelected = 'course';
  constructor() { }

  ngOnInit(): void {
  }
  updateMenu(newMenu: string): void {
    this.menuSelected = newMenu;
  }

}
