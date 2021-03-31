import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style'
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import * as actionCreators from './store';

class Home extends Component {
  
  handleToTop() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackToTop onClick={this.handleToTop}>回到顶部</BackToTop> : null
        }
        
      </HomeWrapper>
    )
  }
  componentDidMount() {
    const { getWholePage } = this.props;
    getWholePage();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollState)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollState)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  getWholePage() {
    const action = actionCreators.getWholePageFromCreator();
    dispatch(action);
  },
  changeScrollState() {
    if(document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.getScrollState(true));
    }else{
      dispatch(actionCreators.getScrollState(false));
    }
  }
})
  
      

export default connect(mapState, mapDispatch)(Home);

