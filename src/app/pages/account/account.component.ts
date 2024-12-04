import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHeaderComponent } from "../../components/user-header/user-header.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterOutlet, UserHeaderComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  links = [
    {name: 'Overview', link: '/account/overview'},
    {name: 'Settings', link: '/account/settings'},
  ]
}
