import axios from 'axios';

const initAction = (res) => {
  return ({
    type: 'UPDATE_LIST',
    title: res.data.title,
    content: res.data.content
  })
}

export const updateList = (id) => {
  return (dispatch) => {
    console.log(id);
    axios.get('/api/detail.json?id=' + id).then((res) => {
      dispatch(initAction(res));
    })
  }
}
  