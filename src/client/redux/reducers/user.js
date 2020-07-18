import { PENDING, FAILED, SUCCESS, LOGIN_ACTION } from '../constants'

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

const user = (state = {}, action) => {
  switch (action.type) {
    case PENDING(LOGIN_ACTION):
      return {
        loading: true,
        error: null,
        user: null
      }
    case FAILED(LOGIN_ACTION):
      return {
        ...state,
        loading: false,
        error: parseLoginError(action.data)
      }
    case SUCCESS(LOGIN_ACTION):
      return {
        ...state,
        loading: false,
        ...action.data
      }
    default:
      return state
  }
}

export default user
