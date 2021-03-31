import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, handleLoadMore, page } = this.props;
    return (
      <div>
        {
          list.map( (item, index) => {
            return(
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem> 
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='content'>{item.get('desc')}</p>
                  </ListInfo>
                  <img alt='' className='list-pic' src={item.get('imgUrl')}/>
                </ListItem>
              </Link>
            )
          } )
        }
        <LoadMore onClick={handleLoadMore.bind(this, page)}>更多文字</LoadMore>
      </div>
    )
  }
}  

const mapState = (state) => ({
  list: state.get('home').get('articleList'),
  page: state.getIn(['home', 'page'])
})

const mapDispatch = (dispatch) => ({
  handleLoadMore(page) {
    const action = actionCreators.getLoadMoreInfo(page);
    dispatch(action);
  }
})

export default connect(mapState, mapDispatch)(List);

