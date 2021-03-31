import axios from 'axios';
import { fromJS } from 'immutable';

const initAction = (res) => ({
  type: 'GET_WHOLE_PAGE',
  source: res.data.data,
});

const initLoad = (res, nextPage) => ({
  type: 'GET_LOAD_MORE',
  articleList: fromJS(res.data.articleList),
  nextPage
})

export const getWholePageFromCreator = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const action = initAction(res);
      dispatch(action) ; 
    })
  }
};

export const getLoadMoreInfo = (page) => {
  return (dispatch) => {
    axios.get('/api/homeLoadMore.json?page=' + page).then((res) => {
      const action = initLoad(res, page + 1);
      dispatch(action) ; 
    })
  }
};

export const getScrollState = (flag) => {
  return (dispatch) => {
    const action = {
      type: 'GET_SCROLL_STATE',
      flag
    }
    dispatch(action);
  }
}