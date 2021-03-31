import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  page: 1,
  showScroll: true
})

const getWholePage = (state, action) => {
  return(
    state.merge({
      topicList: fromJS(action.source).get('topicList'),
      articleList: fromJS(action.source).get('articleList'),
      recommendList: fromJS(action.source).get('recommendList'),
    })
  )
}

const getLoadMore = (state, action) => {
  return( 
    state.merge({
      articleList: state.get('articleList').concat(action.articleList),
      page: action.nextPage
    })
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_WHOLE_PAGE': 
      return getWholePage(state, action);
    case 'GET_LOAD_MORE':
      return getLoadMore(state, action);
    case 'GET_SCROLL_STATE':
      return(
        state.set('showScroll', action.flag)
      )
    default: 
      return state;
  }
}