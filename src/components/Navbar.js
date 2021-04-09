import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper className='section section-center'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>All products</Link>
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
  ul li {
    padding: 0.2rem;
    transition: all 0.3 sec;
  }
  ul li:hover {
    border-bottom: 1px solid var(--clr-green);
  }
`

export default Navbar
