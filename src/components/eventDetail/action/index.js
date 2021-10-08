import { FETCH_EVENTS, ACCEPT_SHOW_REQUEST } from 'rdx/constants/actionTypes'
import { createAction } from 'redux-actions'

export const fetch_events = createAction(FETCH_EVENTS)
export const acceptShowRequest = createAction(ACCEPT_SHOW_REQUEST)
