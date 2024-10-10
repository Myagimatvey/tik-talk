import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";
import { ProfileService } from './data/services/profile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileSevice = inject(ProfileService);
  profiles: any = [];

  constructor() {
    this.profileSevice.getTestAccounts()
    .subscribe(val => {
      this.profiles = val;
    })
  }
}
