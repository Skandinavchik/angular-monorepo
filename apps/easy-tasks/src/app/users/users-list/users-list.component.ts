import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserCardComponent } from '../user-card/user-card.component'
import { MatListModule } from '@angular/material/list'
import { UsersService } from '../users.service'
import { User } from '../types'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, MatListModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users$: Observable<User[]>

  constructor(private readonly usersService: UsersService) {
    this.users$ = this.usersService.getUsers()
  }
}
