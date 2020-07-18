import {
  LOG_IN_URL,
  LOGIN_ACTION,
  LOG_OUT_ACTION,
  LOG_OUT_URL,
  USER_DETAILS_URL,
  USER_DETAILS_ACTION,
  PENDING,
  SUCCESS,
  FAILED,
  RECIPES_ACTION,
  RECIPES_URL,
  FAVORITE_RECIPE_URL,
  FAVORITE_RECIPE_ACTION,
  UNFAVORITE_RECIPE_URL,
  UNFAVORITE_RECIPE_ACTION,
  SET_RATING_ACTION,
  SET_RATING_URL,
  DELETE_RATING_ACTION,
  DELETE_RATING_URL,
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

export const logout = () => {
  return (dispatch) => {
    return apiAction(dispatch)(LOG_OUT_ACTION)(LOG_OUT_URL, {
      method: 'GET'
    })
  }
}

export const userDetails = () => {
  return (dispatch) => {
    return apiAction(dispatch)(USER_DETAILS_ACTION)(USER_DETAILS_URL, {
      method: 'GET'
    })
  }
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

export const setRating = (id, rating) => {
  return (dispatch) => {
    return apiAction(dispatch)(SET_RATING_ACTION)(SET_RATING_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipe_id: id, rating })
    })
  }
}

export const deleteRating = (id) => {
  return (dispatch) => {
    return apiAction(dispatch)(DELETE_RATING_ACTION)(DELETE_RATING_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipe_id: id })
    })
  }
}

export const favoriteRecipe = (id) => {
  return (dispatch) => {
    return apiAction(dispatch)(FAVORITE_RECIPE_ACTION)(FAVORITE_RECIPE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipe_id: id })
    })
  }
}

export const unfavoriteRecipe = (id) => {
  return (dispatch) => {
    return apiAction(dispatch)(UNFAVORITE_RECIPE_ACTION)(
      UNFAVORITE_RECIPE_URL,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipe_id: id })
      }
    )
  }
}

export const getRecipes = () => {
  return (dispatch) => {
    return apiAction(dispatch)(RECIPES_ACTION)(RECIPES_URL, {
      method: 'GET'
    })
  }
}
