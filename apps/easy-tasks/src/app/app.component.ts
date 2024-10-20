import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UsersListComponent } from './users/users-list/users-list.component'

@Component({
  standalone: true,
  imports: [RouterModule, UsersListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
