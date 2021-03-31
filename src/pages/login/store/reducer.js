import { fromJS } from 'immutable';

const defaultState = fromJS({
  login: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_LOGIN':
      return state.set('login', true);
    case 'LOGOUT': 
      return state.set('login', action.value)
    default: 
      return state;
  }
}