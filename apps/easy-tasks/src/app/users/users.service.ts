import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { catchError, map, Observable, throwError } from 'rxjs'
import { User } from './types'
import { GET_USERS } from '../../graphql/queries'

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private readonly apollo: Apollo) {}

  getUsers(): Observable<User[]> {
    return this.apollo.watchQuery<{ users: User[] }>({
      query: GET_USERS,
    }).valueChanges.pipe(
      map(({ data }) => data.users),
      catchError(() => throwError(() => new Error())),
    )
  }
}
