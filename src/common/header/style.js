import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
`

export const Logo = styled.div`
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
  top: calc(100% + 0.75rem);
  width: 220px;
  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    padding: 0.4rem;
    border: inherit;
    background: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
  }
`

export const Spinner = styled.div`
  display: inline-block;
  transition: all 0.3s ease-out;
`