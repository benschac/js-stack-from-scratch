import * as Immutable from 'immutable'

import { SAY_HELLO } from '../action/hello'

const initalState = Immutable.fromJS({
  message: 'Inital reducer message',
})

const helloReducer = (state: Object = initalState, action: { type: string, payload: any}) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    default:
      return state
  }
}


export default helloReducer
