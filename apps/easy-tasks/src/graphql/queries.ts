import { gql } from 'apollo-angular'

export const GET_USERS = gql `
  query FindUsers {
	users {
		id
		name
		imgPath
	}
}
`
