import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  active = '';

  onUpdateStartToActive() {
    this.active = '';
    console.log(this.active);
  }

  onUpdateProfileToActive() {
    this.active = 'profile';
    console.log(this.active);
  }

  onUpdateSettingsToActive() {
    this.active = 'settings';
    console.log(this.active);
  }
}
