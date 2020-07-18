export const LOG_IN_URL = '/api/user/login'
export const LOG_OUT_URL = '/api/user/ogout'
export const RECIPES_URL = '/api/recipes'

export const PENDING = (action) => `${action}_PENDING`
export const SUCCESS = (action) => `${action}_SUCCESS`
export const FAILED = (action) => `${action}_FAILED`

export const LOGIN_ACTION = 'LOGIN'
export const CURRENT_USER_ACTION = 'CURRENT_USER'
export const RECIPES_ACTION = 'RECIPES'

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
