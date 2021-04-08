import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const CurrentFilters = () => {
  const { clearFilters } = useFilterContext()
  return (
    <Wrapper>
      <button type='button' className='clear-btn' onClick={clearFilters}>
        clear filters
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
`

export default CurrentFilters
