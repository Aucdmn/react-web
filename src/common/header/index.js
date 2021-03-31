import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, 
				 Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch,
				 SearchInfoList, SearchInfoItem  
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

class Header extends Component {
	render() {
		const { focused, list, page, totalPage, mouseIn, login, handleInputFocus, handleInputBlur, handleMouseEnter, 
						handleMouseLeave, handlePageChange, handleLogout } = this.props;
		const newList = list.toJS();
		const resList = []
		const getListArea = () => {
			if(newList.length) {
				for(let i = (page - 1) * 10; i < page * 10; i++) {
					resList.push(
						<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
					);
				}
			}
			if(focused || mouseIn) {
				return (
					<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch onClick={handlePageChange.bind(this, page, totalPage, this.spinIcon)}
							>
							<span ref={(icon) => {this.spinIcon = icon}} className='iconfont'>&#xe675;</span>
							换一换</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{resList}
						</SearchInfoList>
					</SearchInfo>
				)
			}else {
				return null;
			}
		}

		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ? <NavItem className='right' onClick={handleLogout}>退出</NavItem> 
									: <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
					}
					
					<NavItem className='right'>
						<span className='iconfont'>&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							classNames='slide'
							timeout={200}
							in={focused}
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => {handleInputFocus(list)}}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span 
							className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
						>&#xe603;</span>
						{getListArea(focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<span className='iconfont'>&#xe878;</span>
							<span>写文章</span>
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
		</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		page: state.get('header').get('page'),
		totalPage: state.get('header').get('totalPage'),
		mouseIn: state.get('header').get('mouseIn'),
		login: state.get('login').get('login')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			if(list.size === 0) {dispatch(actionCreators.getList())};
			dispatch(actionCreators.inputFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.inputBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handlePageChange(page, totalPage, spinIcon) {
			let preDegree = spinIcon.style.transform.replace(/[^0-9]/ig, '');
			if(preDegree) {
				preDegree = parseInt(preDegree, 10);
			}else {
				preDegree = 0;
			}
			spinIcon.style.transform = 'rotate(' + (preDegree + 360) + 'deg)';
			if(page < totalPage) {
				dispatch(actionCreators.pageChange(page + 1));
			}else {
				dispatch(actionCreators.pageChange(1));
			}
		},
		handleLogout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);