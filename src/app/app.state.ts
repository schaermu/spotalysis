import { SpotifyUserProfile } from '../models'

export interface IUserState {
  currentUser: SpotifyUserProfile
}

export let initialUserState: IUserState = {
  currentUser: null
}

export interface IAppState {
  user: IUserState
}

export let initialAppState: IAppState = {
  user: initialUserState
}
