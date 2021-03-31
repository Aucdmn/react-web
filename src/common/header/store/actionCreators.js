import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10) 
}) 

export const inputFocus = () => ({
  type: actionTypes.INPUT_FOCUS
});

export const inputBlur = () => ({
  type: actionTypes.INPUT_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(changeList(res.data.data));
    }).catch(() => {
      console.log('error')
    })
  }
};

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
});

export const pageChange = (page) => ({
  type: actionTypes.PAGE_CHANGE,
  page: page
})