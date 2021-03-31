import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(!loginStatus) {
      return(
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账户' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.handleClick(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
    else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  handleClick(accountElem, passwordElem) {
    dispatch(actionCreators.getLogin(accountElem.value,passwordElem.value));
  }
})

export default connect(mapState, mapDispatch)(Login);

