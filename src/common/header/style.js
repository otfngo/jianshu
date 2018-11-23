import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
`

export const Logo = styled.a`
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const SearchWrapper = styled.div`
  position: relative;
  .input {
    width: 120px;
    transition: width 0.5s ease-out;
    &.focus {
      width: 220px;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  width: 220px;
  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: -16px;
    border: 8px solid transparent;
    border-bottom-color: lightgrey;
    margin-top: 1px;
  }
`