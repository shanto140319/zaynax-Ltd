import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper className='section section-center'>
      <ul>
        <li>
          <Link to='/'>HomePage</Link>
        </li>
        <li>
          <Link to='/products'>ProductPage</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ul {
    display: flex;
    gap: 2rem;
  }
`

export default Navbar
