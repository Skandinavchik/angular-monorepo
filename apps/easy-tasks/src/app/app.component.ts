import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserCardComponent } from './users/user-card/user-card.component'

@Component({
  standalone: true,
  imports: [RouterModule, UserCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
