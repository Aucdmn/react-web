import axios from 'axios';

const initLogin = (account, password) => {
  return {
    type: 'GET_LOGIN',
    account,
    password
  }
}

export const getLogin = (account, passoword) => {
  return (dispatch) => {
    axios.get('/api/login.json').then((res) => {console.log(res.data)})
    dispatch(initLogin(account,passoword))
  }
}

export const logout = () => ({
  type: 'LOGOUT',
  value: false
})