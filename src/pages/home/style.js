import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img{
    width: 625px;
    height: 240px;
  }
`
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7;
  .topic-pic{
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic{
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .content{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendList = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 5px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div`
  box-sizing: border-box;
  width: 280px;
  margin: 20px 0;
  height: 300px;
  line-height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`
export const WritterItem = styled.div`
  width: 280px;
  height: 45px;
  margin-bottom: 10px;
`
export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height:  40px;
  background: #a5a5a5;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`

export const BackToTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
  cursor: pointer;
`