import {
  PENDING,
  FAILED,
  SUCCESS,
  RECIPES_ACTION,
  LOGIN_ACTION,
  SET_RATING_ACTION,
  DELETE_RATING_ACTION
} from '../constants'

const parseLoginError = () => {
  let error = 'Failed to fetch.'

  return error
}

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: []
}

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case PENDING(RECIPES_ACTION):
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      }
    case FAILED(RECIPES_ACTION):
      return {
        ...state,
        loading: false,
        loaded: true,
        error: parseLoginError(action.data)
      }
    case SUCCESS(RECIPES_ACTION):
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data.sort(function (a, b) {
          return a.id - b.id
        })
      }
    case SUCCESS(SET_RATING_ACTION): // fetch data again after substential change
    case SUCCESS(DELETE_RATING_ACTION):
    case SUCCESS(LOGIN_ACTION):
      return {
        ...state,
        loaded: false,
        loading: false
      }
    default:
      return state
  }
}

export default recipes
