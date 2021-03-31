import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    z-index: 1;
    position:relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    margin: 0 auto;
    width: 960px;
    height: 100%;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 16px;
    color: #555;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})
`   
    box-sizing: border-box;
    width: 160px;
    background: #eee;
    height: 38px;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    border-radius: 19px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #666;
    &.slide-enter{
      transition: all .2s ease-in;
    }
    &.slide-enter-active{
      width: 240px;
    }
    &.slide-exit{
      transition: all .2s ease-in;
    }
    &.slide-exit-active{
      width: 160px;
    }
    &::placeholder{
       color: #999;
    }
    &.focused{
      width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 3px;
    background: white;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 12px;
    cursor: pointer;
    .iconfont{
      display: block;
      float: left;
      font-size: 12px;
      margin-right: 5px;
      transition: all .2s ease-in;
      transform-origin: center;
    }
`;

export const SearchInfoList = styled.span`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #787878;
    line-height: 20px;
    border: 1px solid #ddd;
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    border: 1px solid #ec6149;
    border-radius: 19px;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 15px;
    padding: 0 20px;
    &.reg{
      color: #ec6149;
    }
    &.writting{
      color: #fff;
      background: #ec6149;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom{
      position: absolute;
      right: 5px;
      bottom: 5px;
      border-radius: 19px;
      width: 30px;
      line-height: 30px;
      text-align: center;
      &.focused{
        background: #666; 
        color: #fff;
      }
    }
`

