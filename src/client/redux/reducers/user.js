import {
  PENDING,
  FAILED,
  SUCCESS,
  LOGIN_ACTION,
  LOG_OUT_ACTION,
  USER_DETAILS_ACTION
} from '../constants'

const parseLoginError = (data) => {
  let error = 'Failed to login.'
  if (data.error === 'incorrect_email_format') {
    error = 'Email is not in correct format.'
  }
  if (data.error === 'incorrect_password_format') {
    error = 'Password is required.'
  }

  return error
}

const initialState = {
  loading: false,
  loaded: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case PENDING(LOGIN_ACTION):
      return {
        ...initialState,
        loading: true
      }
    case FAILED(USER_DETAILS_ACTION):
      return {
        ...state,
        loaded: true,
        loading: false
      }
    case FAILED(LOGIN_ACTION):
      return {
        ...state,
        loaded: true,
        loading: false,
        error: parseLoginError(action.data)
      }
    case SUCCESS(LOG_OUT_ACTION):
      return initialState
    case SUCCESS(USER_DETAILS_ACTION):
    case SUCCESS(LOGIN_ACTION):
      return {
        ...state,
        loaded: true,
        loading: false,
        ...action.data
      }
    default:
      return state
  }
}

export default user
