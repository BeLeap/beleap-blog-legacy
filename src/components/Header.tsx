import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as React from 'react'
import { colors, dimensions, heights } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}rem;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0 0 1rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 999;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
`

const HomepageLink = styled(Link)`
  color: ${colors.black};
  font-size: 3rem;
  font-weight: 600;
`

const MenuInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 20rem;
  margin: 0;
`

const MenuLink = styled(Link)`
  color: ${colors.black};
  font-size: 2rem;
  font-weight: 600;
  height: 3rem;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>

      <MenuInner>
        <MenuLink to="/">Article</MenuLink>
        <MenuLink to="/">About</MenuLink>
      </MenuInner>
    </HeaderInner>
  </StyledHeader>
)

export default Header
