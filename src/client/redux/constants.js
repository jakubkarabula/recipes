export const LOG_IN_URL = '/api/user/login'
export const LOG_OUT_URL = '/api/user/logout'
export const USER_DETAILS_URL = '/api/user'
export const RECIPES_URL = '/api/recipes'
export const FAVORITE_RECIPE_URL = '/api/recipes/favorite'
export const UNFAVORITE_RECIPE_URL = '/api/recipes/favorite'
export const SET_RATING_URL = '/api/recipes/rating'
export const DELETE_RATING_URL = '/api/recipes/rating'

export const PENDING = (action) => `${action}_PENDING`
export const SUCCESS = (action) => `${action}_SUCCESS`
export const FAILED = (action) => `${action}_FAILED`

export const LOGIN_ACTION = 'LOGIN'
export const LOG_OUT_ACTION = 'LOGOUT'
export const USER_DETAILS_ACTION = 'USER_DETAILS'
export const CURRENT_USER_ACTION = 'CURRENT_USER'
export const RECIPES_ACTION = 'RECIPES'
export const FAVORITE_RECIPE_ACTION = 'FAVORITE_RECIPE'
export const UNFAVORITE_RECIPE_ACTION = 'UNFAVORITE_RECIPE'
export const SET_RATING_ACTION = 'SET_RATING'
export const DELETE_RATING_ACTION = 'DELETE_RATING'

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
