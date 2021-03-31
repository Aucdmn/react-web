import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: ''
})

// eslint-disable-next-line import/no-anonymous-default-export
export default(state = defaultState, action) => {
  switch(action.type){
    case 'UPDATE_LIST':
      return (
        state.merge({
          title: action.title,
          content: action.content
        })
      )
    default:
      return state;
  }
    
}