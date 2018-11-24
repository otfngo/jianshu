import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HeaderWrapper, Logo, SearchWrapper, SearchInfo, Spinner } from './style'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.spinRef = React.createRef()
  }

  render() {
    const searchWrapperClass = "margin-right-auto border border-ellipse padding-left-lg padding-right-n padding-y-sm"
    const searchInfoClass = "border border-radius-n padding-n font-size-sm bg-white"
    const { searchValue, isFocused, isMouseEnter, list, page, totalPage, handleInputChange, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    
    return (
      <HeaderWrapper className="display-flex align-items-center border border-bottom border-light">
        <Link to="/">
          <Logo></Logo>
        </Link>
        <div className="display-flex align-items-center flex-1">
          <div className="padding-x-lg">首页</div>
          <div className="padding-x-lg">下载App</div>
          <SearchWrapper className={isFocused ? `${searchWrapperClass} border-success` : `${searchWrapperClass}`}>
            <input className={isFocused ? 'input border-transparent focus' : 'input border-transparent'} 
              value={searchValue}
              placeholder="搜索"
              onChange={e => handleInputChange(e.target.value)}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur} />
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-htmal5icon25"></use>
            </svg>
            <SearchInfo className={isFocused || isMouseEnter ? `${searchInfoClass}` : 'display-none'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="display-flex align-items-center">
                <span className="margin-right-auto text-muted">热门搜索</span>
                
                <span className="text-muted hover-black" 
                  onClick={() => handleChangePage(page, totalPage, this.spinRef)}>
                  <Spinner ref={this.spinRef}>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-spinner"></use>
                    </svg>
                  </Spinner>
                  <span className="padding-left-sm">换一换</span>
                </span>
              </div>
              <div className="btns margin-top-lg">
                {this.getSearchList()}
              </div>
            </SearchInfo>
          </SearchWrapper>
          <div className="padding-x-lg">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-Aa"></use>
            </svg>
          </div>
          <div className="padding-x-lg">登录</div>
        </div>
        <div>
          <button className="btn btn-n btn-outline-danger border-ellipse padding-x-lg margin-x-n">注册</button>
          <button className="btn btn-n btn-danger border-ellipse padding-x-lg margin-x-n">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-feather-"></use>
            </svg>
            写文章
          </button>
        </div>
      </HeaderWrapper>
    )
  }

  getSearchList() {
    const { list, page } = this.props
    const filterList = list.filter((item, index) => index >= page && index < page + 10)
    return filterList.map(item => {
      return <span className="btn btn-sm btn-outline-secondary" key={item}>{item}</span>
    })
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.getIn(['header', 'searchValue']),
    isFocused: state.getIn(['header', 'isFocused']),
    isMouseEnter: state.getIn(['header', 'isMouseEnter']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(value) {
      dispatch(actionCreators.inputChange(value))
    },
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getHeaderList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spinRef) {
      const style = spinRef.current.style
      const prevRotateDeg = style.transform.replace(/[^0-9]/ig, '') || 0
      style.transform = `rotate(${+prevRotateDeg + 360}deg)`

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
