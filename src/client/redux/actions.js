import {
  LOG_IN_URL,
  LOGIN_ACTION,
  PENDING,
  SUCCESS,
  FAILED,
  RECIPES_ACTION,
  RECIPES_URL,
  emailRegex
} from './constants'

const apiStageAction = (action, data) => ({
  type: action,
  data
})

const apiAction = (dispatch) => (action) => (url, options) => {
  dispatch(apiStageAction(PENDING(action)))

  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return dispatch(apiStageAction(FAILED(action), response))
      } else {
        return dispatch(apiStageAction(SUCCESS(action), response))
      }
    })
    .catch((error) => dispatch(apiStageAction(FAILED(action), error)))
}

export const login = (email, password) => {
  return (dispatch) => {
    if (!emailRegex.test(email)) {
      return dispatch(
        apiStageAction(FAILED(LOGIN_ACTION), {
          error: 'incorrect_email_format'
        })
      )
    } else if (!password) {
      return dispatch(
        apiStageAction(FAILED(LOGIN_ACTION), {
          error: 'incorrect_password_format'
        })
      )
    }

    return apiAction(dispatch)(LOGIN_ACTION)(LOG_IN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
  }
}

const getRecipes = () => {
  return (dispatch) => {
  return apiAction(dispatch)(RECIPES_ACTION)(RECIPES_URL, {
      method: 'GET'
    })
  }
}
