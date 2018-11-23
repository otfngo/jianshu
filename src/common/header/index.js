import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HeaderWrapper, Logo, SearchWrapper, SearchInfo } from './style'

const Header = (props) => {
  const searchClass = "margin-right-auto border border-ellipse padding-left-lg padding-right-n padding-y-sm"
  const { focused, list, handleInputFocus, handleInputBlur } = props

  return (
    <HeaderWrapper className="display-flex align-items-center border border-bottom border-light">
      <Logo href="/"></Logo>
      <div className="display-flex align-items-center flex-1">
        <div className="padding-x-lg">首页</div>
        <div className="padding-x-lg">下载App</div>
        <SearchWrapper className={focused ? `${searchClass} border-success` : `${searchClass}`}>
          <input className={focused ? 'input border-transparent focus' : 'input border-transparent'} 
            placeholder="搜索"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur} />
          <i className="iconfont icon-htmal5icon25"></i>
          <SearchInfo className="border border-radius-n padding-n font-size-sm">
            <div className="display-flex align-items-center">
              <span className="margin-right-auto text-muted">热门搜索</span>
              <span className="text-muted hover-black">换一换</span>
            </div>
            <div className="btns margin-top-lg">
              {
                Array.isArray(list) && list.map(item => {
                  return <span className="btn btn-sm btn-outline-secondary" key={item}>{item}</span>
                })
              }
            </div>
          </SearchInfo>
        </SearchWrapper>
        <div className="padding-x-lg">
          <i className="iconfont icon-Aa"></i>
        </div>
        <div className="padding-x-lg">登录</div>
      </div>
      <div>
        <button className="btn btn-n btn-outline-danger border-ellipse padding-x-lg margin-x-n">注册</button>
        <button className="btn btn-n btn-danger border-ellipse padding-x-lg margin-x-n">
          <i className="iconfont icon-feather-"></i>
          写文章
        </button>
      </div>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getHeaderList())
      dispatch(actionCreators.getSearchFocusAction())
    },
    handleInputBlur() {
      dispatch(actionCreators.getSearchBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
